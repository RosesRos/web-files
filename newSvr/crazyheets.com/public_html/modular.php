<?php

$request = (object) $_REQUEST;

// $newTitle = $request->newText;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newTitle = $request->newText ?? '';
    // $newTexts = array(
    //     '★ '.'New Text uno',
    //     '★ '.'New Text dos',
    //     '★ '.'New Text tres',
    //     '★ '.'New Text cuatro',
    // );
    $htmlFilePath = './source2/index.php';

    function changeTitle() {
        global $newTitle;
        global $htmlFilePath;
        $html = file_get_contents($htmlFilePath, true);

        $doc = new DOMDocument();
        $doc->loadHTML($html);
        $xpath = new DOMXPath($doc);
        $nodes = $xpath->query('//text()');
        foreach ($nodes as $node) {
            $node->nodeValue = str_replace('sola', $newTitle, $node->nodeValue);
        }
        $doc->saveHTMLFile($htmlFilePath);
    }
    changeTitle();

    function changeText() {
        // global $newTexts;
        global $htmlFilePath;
        $newTexts = array(
            '★ '.'New Text uno',
            '★ '.'New Text dos',
            '★ '.'New Text tres',
            '★ '.'New Text cuatro',
        );
        $html = file_get_contents($htmlFilePath, true);
        // echo $html;
        // die();

        $dom = new DOMDocument();
        $dom->encoding = 'UTF-8';
        $dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));
        $pElements = $dom->getElementsByTagName('p');
        $count = 0;
        $elementsToRemove = array();
        
        foreach ($pElements as $pElement) {
            if ($pElement->getAttribute('class') === 'newText') {
                $fontElement = $pElement->getElementsByTagName('font')->item(0);

                if ($fontElement) {
                    $count++;
                    if ($count <= 4) {
                        if (isset($newTexts[$count - 1])) {
                            $fontElement->nodeValue = $newTexts[$count - 1];
                        }
                    } else {
                        $elementsToRemove[] = $pElement;
                    }
                }
            }
        }

        foreach ($elementsToRemove as $element) {
            $element->parentNode->removeChild($element);
        }

        $dom->saveHTML($htmlFilePath);
    }
    changeText();
}




?>
