<?php
$request = (object) $_REQUEST;


echo <<<HTML
    <style>
        .container {
            max-width: 800px;
            width: 100%;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
HTML;

// if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['pixelId']) && isset($_POST['accessToken']))
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($request->pixelId) && isset($request->accessToken)) {
    $pixelId = $request->pixelId;
    $accessToken = $request->accessToken;
    $lines = file('pixel_2.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $lastIndex = count($lines) - 1;
    $newIndex = $lastIndex + 1;
    $newLine = $pixelId . ':' . $accessToken . PHP_EOL;
    // $newLine = $newIndex . ":" . $pixelId . ':' . $accessToken . "\n";
    $newEntry[] = $newLine;
    file_put_contents('pixel_2.txt', implode("\n", $newEntry), FILE_APPEND | LOCK_EX);
    echo <<<HTML
        <div class="container">
            <h1 style='color:green'>New Pixel ID and Access Token added successfully!</h1>
        </div>
        <script>
            setTimeout(() => {
                location.reload();
            }, 2000);
        </script>
    HTML;
}

function removePixel() {
    global $request;
    $file_path = 'pixel_2.txt';
    $pattern = $request->pixelIdRemove;

    if (!empty($pattern)) {
        try {
            // Читаем содержимое файла
            $file_content = file_get_contents($file_path);

            // Разбиваем текст по строкам
            $lines = explode("\n", $file_content);
    
            // Фильтруем строки, исключая ту, которая содержит указанный паттерн
            $filtered_lines = array_filter($lines, function ($line) use ($pattern) {
                return strpos($line, $pattern) === false;
            });
    
            // Собираем строки обратно в текст
            $result_text = implode("\n", $filtered_lines);
    
            // Перезаписываем файл
            file_put_contents($file_path, $result_text);
    
            echo <<<HTML
                <div class="container">
                    <h1 style='color:green'>Pixel ID and Access Token Removed</h1>
                </div>
                <script>
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                </script>
            HTML;
        } catch (Exception $e) {
            http_response_code(500);
            echo 'Произошла ошибка при удалении строк: ' . $e->getMessage();
        }
    }
}
removePixel();


function deleteLine() {
    global $_GET;
    $index = $_GET['index'];
    $filePath = 'pixel_2.txt';

    if (!empty($index)) {
        $fileContent = file_get_contents($filePath);
        $lines = explode("\n", $fileContent);
        if (isset($lines[$index])) {
            unset($lines[$index]);
        }
        $newContent = implode("\n", $lines);
        file_put_contents($filePath, $newContent);
        echo json_encode(['success' => true]);
    }
}
deleteLine();

?>
