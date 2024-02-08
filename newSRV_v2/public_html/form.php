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
            $sourcePath = 'source/img/icon.png';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file1 = $_FILES['file1'];
        if ($file1) {
            $newImage->setImage($file1, 'L.jpeg');
        } else {
            $sourcePath = 'source/img/L.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file2 = $_FILES['file2'];
        if ($file2) {
            $newImage->setImage($file2, 'M.jpeg');
        } else {
            $sourcePath = 'source/img/M.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

        $file3 = $_FILES['file3'];
        if ($file3) {
            $newImage->setImage($file3, 'R.jpeg');
        } else {
            $sourcePath = 'source/img/R.jpeg';
            $newFolderPath = 'img/';
            $newImage->setImageDefault($sourcePath, $newFolderPath);
        }

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

        function changeTitle() {

            global $request;
            $ftp_server = '185.198.164.164';
            $ftp_username = 'xxx';
            $ftp_password = 'xxxoxxooxx';
            $newTitle = $request->newText ?? '';
            $ftp_directory = "web/$request->domain/public_html";

            $conn_id = ftp_connect($ftp_server);
            $login_result = ftp_login($conn_id, $ftp_username, $ftp_password);

            if ($login_result) {
                $contents = ftp_nlist($conn_id, $ftp_directory);
                $folders = array_filter($contents, function($item) use ($conn_id) {
                    return ftp_size($conn_id, $item) == -1 && $item != '.' && $item != '..';
                });
                $latest_folder = end($folders) . "/index.php";

                $handle = fopen('php://temp', 'r+');
                ftp_fget($conn_id, $handle, $latest_folder, FTP_BINARY, 0);
                rewind($handle);
                $content_2 = stream_get_contents($handle);
                fclose($handle);

                $content_3 = str_replace('777 Casino', $newTitle, $content_2);

                $tempFile = tempnam(sys_get_temp_dir(), 'ftp_tmp');
                file_put_contents($tempFile, $content_3);
                ftp_put($conn_id, $latest_folder, $tempFile, FTP_BINARY);
                unlink($tempFile);

                ftp_close($conn_id);
            } else {
                echo "Ошибка при авторизации на FTP-сервере";
            }
        }
        changeTitle();

    }
}
setDomain();

?>
