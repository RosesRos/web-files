<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <form action="modular.php" method="post">

            <div>
                <label for="newText">Новый текст (заменит '777 Casino'):</label>
                <input type="text" id="newText" name="newText" required><br>
            </div>

            <!-- <div>
                <label for="line1">Описание 1 (заменит '1str'):</label>
                <input type="text" id="line1" name="line1"><br>
                <label for="line2">Описание 2 (заменит '2str'):</label>
                <input type="text" id="line2" name="line2"><br>
                <label for="line3">Описание 3 (заменит '3str'):</label>
                <input type="text" id="line3" name="line3"><br>
                <label for="line4">Описание 4 (заменит '4str'):</label>
                <input type="text" id="line4" name="line4"><br>
            </div> -->

            <div>
                <button type="submit">remodelar</button>
            </div>

        </form>


        <?php

// HTML код
$html = '<p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NOUVEAUX EMPLACEMENTS 2024</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bienvenue dans les NOUVEAUX SLOTS 2023&nbsp;! </font><font style="vertical-align: inherit;">Les machines à sous du casino lola gratuites et sans internet vous attendent en ce moment !</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">★ Incroyable bonus de bienvenue du casino Lola 700 000 tours gratuits</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">★ De nouvelles machines à sous sans internet gratuites chaque semaine !</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">★ Compétitions de casino Lola avec dautres joueurs en ligne !</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">★ Une variété de machines à sous gratuites sans Internet et chacune a sa propre fonctionnalité et un jeu bonus unique !</font></font></p>
         <p class="newText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">★ De grosses récompenses pour ceux qui jouent aux machines à sous en ligne tous les jours !</font></font></p>';

// Новые тексты для замены
$newTexts = array(
    'New Text 1',
    'New Text 2',
    'New Text 3',
    'New Text 4'
);

// Создаем новый объект DOMDocument
$dom = new DOMDocument();

// Устанавливаем кодировку UTF-8
$dom->encoding = 'UTF-8';

// Загружаем HTML с указанием кодировки
$dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));

// Получаем список всех элементов <p> с классом "newText"
$pElements = $dom->getElementsByTagName('p');

// Счетчик для отслеживания первых четырех элементов <p> с классом "newText"
$count = 0;

// Список элементов <p>, которые нужно удалить
$elementsToRemove = array();

// Проходимся по каждому элементу <p> с классом "newText"
foreach ($pElements as $pElement) {
    // Проверяем, имеет ли текущий элемент класс "newText"
    if ($pElement->getAttribute('class') === 'newText') {
        // Получаем дочерний элемент <font>
        $fontElement = $pElement->getElementsByTagName('font')->item(0);
        
        // Проверяем, существует ли дочерний элемент <font>
        if ($fontElement) {
            // Увеличиваем счетчик
            $count++;
            
            // Проверяем, не превысил ли счетчик 4
            if ($count <= 4) {
                // Заменяем текст внутри текущего элемента <font>
                if (isset($newTexts[$count - 1])) {
                    $fontElement->nodeValue = $newTexts[$count - 1];
                }
            } else {
                // Если счетчик больше 4, добавляем текущий элемент <p> в список для удаления
                $elementsToRemove[] = $pElement;
            }
        }
    }
}

// Удаляем все элементы <p>, которые находятся в списке для удаления
foreach ($elementsToRemove as $element) {
    $element->parentNode->removeChild($element);
}

// Получаем обновленное содержимое
$newHtml = $dom->saveHTML();

// Выводим обновленное содержимое
echo $newHtml;

?>








</body>
</html>