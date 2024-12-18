<?php
$GLOBALS["BASE_URL"] = "https://github.com/cypht-org/cypht/raw/master/config/";
$GLOBALS["CACHE_DIR"] = ".cache-config-generator/";

$REGEX_THE_BIG_ONE = '/(\/\*(?<comment>(.|\n)*?)\*\/(.|\n)*?)?env\(\'(?<key>.*?)\'(, *?(?<default>.*?))?\)/';
$REGEX_REMOVE_FIRST_COMMENT = '/\/\*(.|\n)*?\*\//';
$REGEX_REMOVE_LINE_COMMENTS = '/ *\/\/.*?$/m';
$FILES = array("app.php", "database.php", "2fa.php", "carddav.php", "dynamic_login.php", "github.php", "ldap.php", "oauth2.php", "recaptcha.php", "wordpress.php");

function getFile($filename) {
    $filepath = $GLOBALS["CACHE_DIR"] . $filename;
    
    if (!is_file($filepath)) {
        $data = file_get_contents(
            $GLOBALS["BASE_URL"] . $filename,
            false,
            stream_context_create([])
        );
        $write = fopen($filepath, "w");
        fwrite($write, $data);
        fclose($write);
    }
    return file_get_contents($filepath);
}


if (!is_dir($GLOBALS["CACHE_DIR"])) {
    mkdir($GLOBALS["CACHE_DIR"]);
}

$options = (object) [];
for ($i = 0; $i < count($FILES); $i++) {
    $filename = $FILES[$i];
    $contents = getFile($filename);

    if ($filename == "app.php") {
        $contents = preg_replace($REGEX_REMOVE_FIRST_COMMENT, "", $contents, 1);
        $contents = preg_replace($REGEX_REMOVE_LINE_COMMENTS, "", $contents);
        $out = fopen("data/test.php", "w");
        fwrite($out, $contents);
        fclose($out);
    }
    $fileOptions = array();

    preg_match_all(
        $REGEX_THE_BIG_ONE, 
        $contents,
        $matches,
        PREG_SET_ORDER);
    
    echo "$filename has matches " . count($matches) . "\n";
    foreach ($matches as $match) {        
        $key = $match["key"];
        $valueDefault = (array_key_exists("default", $match) ? trim($match["default"], " '") : null);
        $comment = $match["comment"]; // TODO Run cleancomment
        
        // Determine input type
        /**
         * The original Node.JS version had an automatic determiner of input type
         * While developing the translation to PHP, I first moved the manual stuff
         * I was then presented with only 6 items trying to be automatically determined,
         * so it seems manual is the game. If automatic would ever be useful again, see the link
         * here https://github.com/Denperidge/cypht-config-generator/blob/ccaa56ad0efc92d36c3aea38a2eb9be8fe1e4373/index.11tydata.mjs#L73
         */
        if ($valueDefault) {
            if (is_int($valueDefault)) {
                $inputType = "number";
            } else if ($valueDefault == "false" || $valueDefault == "true") {
                $inputType = "checkbox";
            } else if (is_string($valueDefault)) {
                $inputType = "text";
            }
        } else {
            switch ($key) {
                case "DEFAULT_SMTP_TLS":
                case "LDAP_AUTH_TLS":
                case "DEFAULT_SMTP_TLS":
                case "DEFAULT_SMTP_NO_AUTH":
                case "AUTO_CREATE_PROFILE":
                case "ALWAYS_MOBILE_UI":
                case "ENCRYPT_AJAX_REQUESTS":
                case "ENCRYPT_LOCAL_STORAGE":
                    $inputType = "checkbox";
                    break;
                    
                case "DEFAULT_SMTP_NAME":
                case "DEFAULT_SMTP_SERVER":
                case "ADMIN_USERS":
                case "COOKIE_DOMAIN":
                case "COOKIE_PATH":
                case "DEFAULT_EMAIL_DOMAIN":
                case "REDIRECT_AFTER_LOGIN":
                case "AUTH_CLASS":
                case "API_LOGIN_KEY":
                case "MEMCACHED_USER":
                case "SESSION_CLASS":
                    $inputType = "text";
                    break;
                
                case "DB_PASS":  // database.php
                case "REDIS_PASS":
                case "MEMCACHED_PASS":
                case "APP_2FA_SECRET":  // 2fa.php
                    $inputType = "password";
                    break;
                
                case "DEFAULT_SMTP_PORT":
                    $inputType = "number";
                    break;
            }
        }
        

        if (str_contains($key, "SECRET")) {
            $inputType = "password";
        }

        if (!isset($inputType)) {
            throw new Exception("inputType could not be determined for $key");
        }


        // Push to array
        $fileOptions[] = (object) [
            "key" => $key,
            "valueDefault" => $valueDefault,
            "comment" => $comment,
            "inputType" => $inputType,
        ];
    }

    $options->$filename = $fileOptions;
    echo "$filename " . count($fileOptions) . "\n";
}
$out = fopen("data/config-generator.json", "w");
fwrite($out, json_encode($options, JSON_PRETTY_PRINT));
fclose($out);

?>