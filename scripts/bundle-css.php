<?php
/**
 * bundle-css.php — Production CSS bundler (post-build step).
 *
 * Resolves every @import in main.css RECURSIVELY, in the EXACT source order
 * (so the cascade is preserved 1:1, unlike Cecil's --optimize which reorders),
 * inlines the remote Bootstrap import at its real position, applies a SAFE
 * minification (never touches calc()/data-URI internals), and overwrites the
 * built file in _site/.
 *
 * Sources are untouched: main.css keeps its @import list for local dev.
 * Run AFTER `cecil build` (see Makefile `prod` target and the CI workflow).
 *
 * Usage:  php scripts/bundle-css.php
 */

$root    = dirname(__DIR__);
$entry   = "$root/static/assets/css/main.css";
$outFile = "$root/_site/assets/css/main.css";

if (!is_file($entry)) {
    fwrite(STDERR, "[bundle-css] ERROR: source not found: $entry\n");
    exit(1);
}
if (!is_dir(dirname($outFile))) {
    fwrite(STDERR, "[bundle-css] ERROR: build output missing — run `cecil build` first.\n");
    exit(1);
}

$importRe = '/@import\s+url\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)\s*;/';

/**
 * Inline @imports in $file's content, depth-first, preserving order.
 */
function inline_imports(string $file, array &$seen): string
{
    global $importRe;
    $baseDir = dirname($file);
    $css     = file_get_contents($file);

    return preg_replace_callback($importRe, function ($m) use ($baseDir, &$seen) {
        $url = trim($m[1]);

        // Remote import (Bootstrap CDN): fetch + inline at this exact position.
        if (preg_match('#^https?://#', $url)) {
            $content = @file_get_contents($url);
            if ($content === false) {
                fwrite(STDERR, "[bundle-css] ERROR: could not fetch remote @import: $url\n");
                exit(1); // fail loudly rather than emit invalid CSS (@import not first)
            }
            return "\n/* === inlined (remote): $url === */\n" . $content . "\n";
        }

        // Local import: resolve relative to the importing file, recurse.
        $path = realpath($baseDir . '/' . $url);
        if ($path === false) {
            fwrite(STDERR, "[bundle-css] ERROR: local @import not found: $url (in $baseDir)\n");
            exit(1);
        }
        if (isset($seen[$path])) {
            return ''; // already inlined once — avoid duplicate/loops
        }
        $seen[$path] = true;
        return "\n/* === " . basename($path) . " === */\n" . inline_imports($path, $seen);
    }, $css);
}

$seen   = [$entry => true];
$bundle = inline_imports($entry, $seen);

// ---- SAFE minification --------------------------------------------------
// Strip /* */ comments (keep /*! license */), then trim per-line leading/
// trailing whitespace and collapse blank lines. We deliberately DO NOT touch
// interior whitespace, so calc(100% - 1px) and data-URI payloads stay intact.
$bundle = preg_replace('#/\*(?!!).*?\*/#s', '', $bundle);
$bundle = preg_replace('/^[ \t]+/m', '', $bundle);
$bundle = preg_replace('/[ \t]+$/m', '', $bundle);
$bundle = preg_replace('/\n{2,}/', "\n", $bundle);
$bundle = trim($bundle) . "\n";

// Sanity: no @import must survive (everything is inlined now).
if (preg_match($importRe, $bundle)) {
    fwrite(STDERR, "[bundle-css] ERROR: an @import survived — bundle would be invalid.\n");
    exit(1);
}
// Sanity: braces balanced.
if (substr_count($bundle, '{') !== substr_count($bundle, '}')) {
    fwrite(STDERR, "[bundle-css] ERROR: unbalanced braces in bundle.\n");
    exit(1);
}

file_put_contents($outFile, $bundle);
printf("[bundle-css] OK -> %s  (%d KB, %d rules)\n",
    str_replace($root . '/', '', $outFile),
    round(strlen($bundle) / 1024),
    substr_count($bundle, '{'));
