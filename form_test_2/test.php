<?php
$filename = 'pixel_2.txt';

// // Читаем содержимое файла в массив
// $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// // Перебираем строки и выводим индекс и значение
// foreach ($lines as $index => $line) {
//     echo "$index:$line<br>";
//     $newEntry = $pixelId . ':' . $accessToken . PHP_EOL;
//     file_put_contents('pixel_2.txt', $newEntry, FILE_APPEND | LOCK_EX);
// }


    $pixelId = "3030030";
    // $accessToken = $_POST['accessToken'];
    $accessToken = "ddkskddkskdskdkskk";

    // Читаем содержимое файла в массив
    $lines = file("pixel_2.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    // Перебираем строки и выводим индекс и значение
    foreach ($lines as $index => $line) {
        // echo "$index:$line<br>";
        $newEntry = $index . ":" . $pixelId . ':' . $accessToken . "\n";
        file_put_contents('pixel_2.txt', $newEntry, FILE_APPEND | LOCK_EX);
    }

    // $newEntry = $pixelId . ':' . $accessToken . PHP_EOL;
    // file_put_contents('pixel_2.txt', $newEntry, FILE_APPEND | LOCK_EX);
    echo <<<HTML
        <div class="container">
            <p style='color:green'>New Pixel ID and Access Token added successfully!</p>
        </div>
        <!-- <script>
            setTimeout(() => {
                location.href = "./";
            }, 2000);
        </script> -->
    HTML;


// if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['pixelId']) && isset($_POST['accessToken'])) {
//     // $pixelId = $_POST['pixelId'];
//     $pixelId = "3030030";
//     // $accessToken = $_POST['accessToken'];
//     $accessToken = "ddkskddkskdskdkskk";

//     // Читаем содержимое файла в массив
//     $lines = file("pixel_2.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

//     // Перебираем строки и выводим индекс и значение
//     foreach ($lines as $index => $line) {
//         // echo "$index:$line<br>";
//         $newEntry = $index . ":" . $pixelId . ':' . $accessToken . "\n";
//         file_put_contents('pixel_2.txt', $newEntry, FILE_APPEND | LOCK_EX);
//     }

//     // $newEntry = $pixelId . ':' . $accessToken . PHP_EOL;
//     // file_put_contents('pixel_2.txt', $newEntry, FILE_APPEND | LOCK_EX);
//     echo <<<HTML
//         <div class="container">
//             <p style='color:green'>New Pixel ID and Access Token added successfully!</p>
//         </div>
//         <script>
//             setTimeout(() => {
//                 location.href = "./";
//             }, 2000);
//         </script>
//     HTML;
// }


function removePixel() {
    global $request;
    $file_path = 'pixel_2.txt';
    // $pattern = $request->pixelIdRemove;
    $pattern = "1577894522981368";

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
    
            // echo <<<HTML
            //     <div class="container">
            //         <h1 style='color:green'>Pixel ID and Access Token Removed</h1>
            //     </div>
            //     <script>
            //         setTimeout(() => {
            //             location.reload();
            //         }, 2000);
            //     </script>
            // HTML;
        } catch (Exception $e) {
            http_response_code(500);
            echo 'Произошла ошибка при удалении строк: ' . $e->getMessage();
        }
    }
}
// removePixel();