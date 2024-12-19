<?php
$GLOBALS["BASE_URL"] = "https://github.com/cypht-org/cypht/raw/master/config/";
$GLOBALS["CACHE_DIR"] = ".cache-config-generator/";

$REGEX_THE_BIG_ONE = '/(\/\*(?<comment>(.|\n)*?)\*\/(.|\n)*?)?env\(\'(?<key>.*?)\'(, *?(?<default>.*?))?\)/';
$REGEX_REMOVE_FIRST_COMMENT = '/\/\*(.|\n)*?\*\//';
$REGEX_REMOVE_LINE_COMMENTS = '/ *\/\/.*?$/m';
$REGEX_VALID_VALUES = '/Valid values.*?\n(?<values>(.|\n)*)/';
$FILES = json_decode(file_get_contents("data/configFiles.json"), false);


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
    }
    $fileOptions = array();

    preg_match_all(
        $REGEX_THE_BIG_ONE, 
        $contents,
        $matches,
        PREG_SET_ORDER);
    
    foreach ($matches as $match) {        
        $key = $match["key"];
        $valueDefault = (array_key_exists("default", $match) ? trim($match["default"], " '") : null);
        $comment = $match["comment"]; // TODO Run cleancomment
        $commentHtml = null;
        $setValues = null;
        if ($comment) {
            // Clean comment
            $commentLines = explode(
                "\n    |",
                preg_replace('/\n\n/', "\n", $comment)
            );
            $commentLines = array_map('trim', $commentLines);
            $commentLines = array_filter($commentLines);
            $comment = implode("\n", $commentLines);

            // Create HTML-innerText-insertable comment
            $commentHtml = preg_replace('/\n/', "<br>", $comment);
            $commentHtml = preg_replace('/ /', "&nbsp;", $comment);
        }
        


        // Determine input type
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

        if ($comment) {
            // Fetch setValues
            preg_match(
                $REGEX_VALID_VALUES,
                $comment,
                $match);
            if ($match) {
                $unfiliterdValues = explode("\n", $match["values"]);
                $values = array();
                $customAlreadyAdded = false;

                foreach ($unfiliterdValues as $value) {
                    if ($customAlreadyAdded) {
                        // add all text after custom to custom
                        $customAndMore = trim(array_pop($values)) . " " . trim($value);
                        $values[] = $customAndMore;
                        continue;
                    }
                    // manual override
                    if (!str_starts_with($value, "langauge codes")) {
                        $values[] = $value;
                        if (str_starts_with($value, "custom")) {
                            $customAlreadyAdded = true;
                        }
                    }
                }
                if (count($values) > 0) {  // superfluous?
                    $setValues = array();
                    foreach ($values as $commentLine) {
                        $keyIndex = strpos($commentLine, ' ');
                        $setValues[] = (object) [
                            "value" => substr($commentLine, 0, $keyIndex),
                            "description" => trim(substr($commentLine, $keyIndex)),
                        ];
                    }
                    $inputType = "select";
                }
            }
        }

        if (!isset($inputType)) {
            throw new Exception("inputType could not be determined for $key");
        }


        // Push to array
        $fileOptions[] = (object) [
            "key" => $key,
            "valueDefault" => $valueDefault,
            "comment" => $comment,
            "commentHtml" => $commentHtml,
            "inputType" => $inputType,
            "setValues" => $setValues
        ];
    }

    $options->$filename = $fileOptions;
}
$out = fopen("data/configOptions.json", "w");
fwrite($out, json_encode($options, JSON_PRETTY_PRINT));
fclose($out);

?>