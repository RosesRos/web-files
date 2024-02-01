<?php

$file_path = 'coco.txt';

// Получаем значение строки для удаления из POST-запроса
$searchString = isset($_POST['searchString']) ? $_POST['searchString'] : '';

if ($searchString) {
    // Читаем содержимое файла
    $file_content = file_get_contents($file_path);

    // Разбиваем текст по строкам
    $lines = explode("\n", $file_content);
    
    // Фильтруем строки, исключая ту, которая содержит указанный паттерн
    $filtered_lines = array_filter($lines, function ($line) use ($searchString) {
        return strpos($line, $searchString) === false;
    });

    // Собираем строки обратно в текст
    $result_text = implode("\n", $filtered_lines);

    // Перезаписываем файл
    file_put_contents($file_path, $result_text);

    echo 'Строка удалена успешно.';
} else {
    echo 'Введите данные для удаления.';
}

?>
