<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['directoryName'])) {
    $directoryName = trim($_POST['directoryName']);
    $newText = $_POST['newText'] ?? '';
    $descriptionLines = [
        $_POST['line1'] ?? '1str',
        $_POST['line2'] ?? '2str',
        $_POST['line3'] ?? '3str',
        $_POST['line4'] ?? '4str',
    ];
    $sourcePath = __DIR__ . '/source2/';
    $targetPath = __DIR__ . '/' . $directoryName . '/';
    $imgPath = $targetPath . 'img/';

    if (!file_exists($targetPath)) {
        mkdir($targetPath, 0777, true);
        $iterator = new RecursiveDirectoryIterator($sourcePath, RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST);
        foreach ($files as $file) {
            $target = $targetPath . $files->getSubPathName();
            if ($file->isDir()) mkdir($target, 0777, true);
            else copy($file, $target);
        }
    } else {
        echo "<p>Директория '$directoryName' уже существует.</p>";
    }

    // Создаем директорию для изображений, если ее нет
    if (!file_exists($imgPath)) {
        mkdir($imgPath, 0777, true);
    }

    // Загрузка и сохранение изображений
    $imageFields = ['icon', 'leftScreenshot', 'middleScreenshot', 'rightScreenshot'];
    $imageNames = ['icon.jpeg', 'L.jpeg', 'M.jpeg', 'R.jpeg'];
    foreach ($imageFields as $index => $fieldName) {
        if (isset($_FILES[$fieldName]) && $_FILES[$fieldName]['error'] == UPLOAD_ERR_OK) {
            move_uploaded_file($_FILES[$fieldName]['tmp_name'], $imgPath . $imageNames[$index]);
        }
    }

    // Обновление index.html
    $filePath = $targetPath . 'index.html';
    if (file_exists($filePath)) {
        $fileContents = file_get_contents($filePath);
        $fileContents = str_replace('777 Casino', $newText, $fileContents);
        foreach ($descriptionLines as $index => $line) {
            $fileContents = str_replace(($index + 1) . 'str', $line, $fileContents);
        }
        file_put_contents($filePath, $fileContents);
        echo "<p>Сайт '$directoryName' успешно создан и обновлен.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Генератор сайта</title>
</head>
<body>
    <h2>Создать и изменить сайт</h2>
    <form method="post" enctype="multipart/form-data">
        <label for="directoryName">Название новой директории:</label>
        <input type="text" id="directoryName" name="directoryName" required><br>
        <label for="newText">Новый текст (заменит '777 Casino'):</label>
        <input type="text" id="newText" name="newText" required><br>
        
        <!-- Поля для описания -->
        <label for="line1">Описание 1 (заменит '1str'):</label>
        <input type="text" id="line1" name="line1"><br>
        <label for="line2">Описание 2 (заменит '2str'):</label>
        <input type="text" id="line2" name="line2"><br>
        <label for="line3">Описание 3 (заменит '3str'):</label>
        <input type="text" id="line3" name="line3"><br>
        <label for="line4">Описание 4 (заменит '4str'):</label>
        <input type="text" id="line4" name="line4"><br>
        
        <!-- Поля для загрузки изображений -->
        <label for="icon">Иконка (JPEG):</label>
        <input type="file" id="icon" name="icon" accept=".jpg, .jpeg"><br>
        <label for="leftScreenshot">1 скриншот (Left):</label>
        <input type="file" id="leftScreenshot" name="leftScreenshot" accept=".jpg, .jpeg"><br>
        <label for="middleScreenshot">2 скриншот (Middle):</label>
        <input type="file" id="middleScreenshot" name="middleScreenshot" accept=".jpg, .jpeg"><br>
        <label for="rightScreenshot">3 скриншот (Right):</label>
        <input type="file" id="rightScreenshot" name="rightScreenshot" accept=".jpg, .jpeg"><br>
        
        <input type="submit" value="Создать">
    </form>
</body>
</html>
