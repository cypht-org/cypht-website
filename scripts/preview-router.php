<?php

/**
 * preview-router.php - Range-capable static server for previewing the PROD build.
 *
 * PHP's built-in server (`php -S`) ignores HTTP Range requests, so <video>
 * elements (mp4/webm) won't play locally. This router adds Range support.
 *
 * Usage:  php -S 127.0.0.1:8080 -t _site scripts/preview-router.php
 *         (or simply: make preview)  →  http://127.0.0.1:8080
 */

$root = $_SERVER['DOCUMENT_ROOT'];                 // = _site (from -t _site)
$path = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$file = realpath($root . $path);

if ($file !== false && is_dir($file)) {
    $file = realpath(rtrim($file, '/') . '/index.html');
}
// Security: stay inside the docroot; 404 otherwise.
// Serve the generated 404 page, like GitHub Pages does in production.
if ($file === false || strncmp($file, realpath($root), strlen(realpath($root))) !== 0 || !is_file($file)) {
    http_response_code(404);
    $notFound = realpath($root . '/404.html');
    if ($notFound !== false && is_file($notFound)) {
        header('Content-Type: text/html; charset=utf-8');
        readfile($notFound);

        return true;
    }
    echo 'Not found';

    return true;
}

$mimes = [
    'html' => 'text/html; charset=utf-8',
    'css' => 'text/css',
    'js' => 'text/javascript',
    'json' => 'application/json',
    'svg' => 'image/svg+xml',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'webp' => 'image/webp',
    'gif' => 'image/gif',
    'ico' => 'image/x-icon',
    'mp4' => 'video/mp4',
    'webm' => 'video/webm',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'xml' => 'application/xml',
];
$ext  = strtolower(pathinfo($file, PATHINFO_EXTENSION));
$mime = $mimes[$ext] ?? 'application/octet-stream';
$size = filesize($file);

header("Content-Type: $mime");
header('Accept-Ranges: bytes');

// Range request → 206 Partial Content (what browsers need for <video>).
if (isset($_SERVER['HTTP_RANGE']) && preg_match('/bytes=(\d*)-(\d*)/', $_SERVER['HTTP_RANGE'], $m)) {
    $start = $m[1] === '' ? 0 : (int) $m[1];
    $end   = $m[2] === '' ? $size - 1 : min((int) $m[2], $size - 1);
    if ($start > $end) {
        http_response_code(416);
        return true;
    }
    $len = $end - $start + 1;
    http_response_code(206);
    header("Content-Range: bytes $start-$end/$size");
    header("Content-Length: $len");
    $fp = fopen($file, 'rb');
    fseek($fp, $start);
    echo fread($fp, $len);
    fclose($fp);
} else {
    header("Content-Length: $size");
    readfile($file);
}
return true;
