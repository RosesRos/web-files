<?php
namespace html;
header('Access-Control-Allow-Origin: *');
$request = (object) $_REQUEST;


function setDomain() {
    global $request;
    // global $_SERVER;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        class NewImage {
            public $file;
            const UPLOAD_DIRECTORY = 'img/';
            
            public function setImage($file, $newFileName) {
                $this->file = $file;
                if (!file_exists(self::UPLOAD_DIRECTORY)) {
                    mkdir(self::UPLOAD_DIRECTORY, 0777, true);
                }
                if (isset($this->file) && $this->file["error"] === UPLOAD_ERR_OK) {
                    $filename = basename($this->file["name"]);

                    $uploadFilePath = self::UPLOAD_DIRECTORY . $newFileName;
                    if (move_uploaded_file($this->file["tmp_name"], $uploadFilePath)) {
                        // echo "Файл успешно загружен и сохранен в $uploadFilePath";
                    } else {
                        echo "Произошла ошибка при перемещении файла в папку.";
                    }
                }
            }
            public function setImageDefault($fileDefault, $destinationFileDefault) {
                if (!file_exists($fileDefault)) {
                    return false;
                }
                if (!file_exists($destinationFileDefault)) {
                    if (!mkdir($destinationFileDefault, 0777, true)) {
                        return false;
                    }
                }
                $destinationPath = $destinationFileDefault . DIRECTORY_SEPARATOR . basename($fileDefault);
                if (!copy($fileDefault, $destinationPath)) {
                    return false;
                }

                return true;
            }
        }

        
        $newImage = new NewImage();
        $file0 = $_FILES['file0'];
        if ($file0) {
            $newImage->setImage($file0, 'icon.png');
        } else {
            $sourcePath = 'source2/img/icon.png';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file1 = $_FILES['file1'];
        // $newImage->setImage($file1, 'L.jpg');
        if ($file1) {
            $newImage->setImage($file1, 'L.jpeg');
        } else {
            $sourcePath = 'source2/img/L.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file2 = $_FILES['file2'];
        // $newImage->setImage($file2, 'M.jpg');
        if ($file2) {
            $newImage->setImage($file2, 'M.jpeg');
        } else {
            $sourcePath = 'source2/img/M.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file3 = $_FILES['file3'];
        // $newImage->setImage($file3, 'R.jpg');
        if ($file3) {
            $newImage->setImage($file3, 'R.jpeg');
        } else {
            $sourcePath = 'source2/img/R.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        // echo "domain: " . $domain;

        function runBashScript($scriptPath) {
            global $request;
            $param1 = $request->domain;
            $param2 = 'value2';
            $command = "bash $scriptPath $param1";
            $output = shell_exec($command);
            return $output;
        }

        $scriptPath = "../../doman.sh";
        $result = runBashScript($scriptPath);
        echo $result;

    }
}
setDomain();

?>