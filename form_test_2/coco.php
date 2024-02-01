<?php

// $pixelId = $_POST['pixelId'];
$pixelId = "404040040404";
// $accessToken = $_POST['accessToken'];
$accessToken = "EAASkHGZC0BO2uH5XssP4bTNB0qO5PnooD5DZBP7BAX7KYQefZBdQTmHM7Q8oKcNRp3E8cRmssg2DO0kdg1dJhZCZCt70HxfdvCl4gfOTXYTMJNaztWZCi5Oe5K0xrunvJKZC1ypcoijCPn9Ng83yyzgb5COFBCDDTgB6CdRGjUHI7pokZA8tNhmQ2gmVdz";

$filename = 'coco.txt';

// Читаем содержимое файла в массив
$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// Находим индекс последней строки
$lastIndex = count($lines) - 1;

// Генерируем новый индекс
$newIndex = $lastIndex + 1;

// Строка для добавления
$newLine = $newIndex . ":".$pixelId . ':' . $accessToken;

// Добавляем строку в массив
$lines[] = $newLine;

// Записываем обновленный массив обратно в файл
file_put_contents($filename, implode(PHP_EOL, $lines));

echo "Строка добавлена в файл. Новый индекс: $newIndex";