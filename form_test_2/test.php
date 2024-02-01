<?php

// function incrementCounter() {
//     $counterValue = (int)file_get_contents('counter.txt');
//     $counterValue = $counterValue + 1;
//     $newEntry = $counterValue . "\n";
//     file_put_contents('counter.txt', $newEntry, FILE_APPEND | LOCK_EX);
// }
// incrementCounter();
// function getCounter() {
//     $counterValue = file_get_contents('counter.txt');
//     return $counterValue;
// }

// echo "<p>Текущее значение счетчика:" .  getCounter() . "</p>";


$filename = 'counter.txt';

// Читаем текущее значение из файла (если файл существует)
$currentValue = file_exists($filename) ? (int)file_get_contents($filename) : 0;

// Открываем файл для записи
$file = fopen($filename, 'w');

// Записываем новое значение в файл
fwrite($file, $currentValue . PHP_EOL);

// Увеличиваем значение на 1
$currentValue++;

// Закрываем файл
fclose($file);

echo "Цифра добавлена в файл. Текущее значение: $currentValue";