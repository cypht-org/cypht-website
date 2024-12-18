<?php
$GLOBALS["BASE_URL"] = "https://github.com/cypht-org/cypht/raw/master/config/";
$GLOBALS["CACHE_DIR"] = ".cache-config-generator/";

$REGEX_THE_BIG_ONE = '/(\/\*(?<comment>(.|\n)*?)\*\/(.|\n)*?)?env\(\'(?<key>.*?)\'(, *?(?<default>.*?))?\)/';
$REGEX_REMOVE_FIRST_COMMENT = '/\/\*(.|\n)*?\*\//';
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

for ($i = 0; $i < count($FILES); $i++) {
    $filename = $FILES[$i];
    $contents = getFile($filename);

    if ($filename == "app.php") {
        $contents = preg_replace($REGEX_REMOVE_FIRST_COMMENT, "", $contents, 1);
        continue;
    }

    $options = array();

    preg_match_all(
        $REGEX_THE_BIG_ONE, 
        $contents,
        $matches,
        PREG_SET_ORDER);
    foreach ($matches as $match) {        
        #echo $match[0];
        #echo "\n";
        #echo $match[5];
        /*
        foreach ($match as $key => $value) {
            echo  $key;
            echo "\n";
        };*/

        array_push($options, (object) [
            "key" => $match["key"],
        ]);
        break;
    }
}

?>