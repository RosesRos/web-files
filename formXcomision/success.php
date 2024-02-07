<?php
header('Access-Control-Allow-Origin: *');
$request = (object) $_REQUEST;

/** @custom params */
$endpoint = "https://tyourads-api.com/api/v2/leads?";
$api_key = "BFA74738-84BA-DF18-C390-8995241CE2C2";

$buildParams = [
  "firstName" => $request->ﬁrstName,
  "lastName" => $request->lastName,
  "email" => $request->email,
  "password" => $request->password,
  "password2" => $request->password2,
  "phone" => $request->phone,
  // "ip" => $_SERVER['HTTP_X_FORWARDED_FOR'], //you can use getUserIP() to get user`s IP
  "ip" => "212.126.5.245",
  "offerName" => "Baltic Pipe", //put your offer name
  "offerWebsite" => "https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] //put your domain
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $endpoint);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
"Api-Key: $api_key",
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($buildParams));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$response = (object) json_decode($response);
curl_close($ch);

$link = $response->details->redirect->url;

if ($link) {
  echo <<<EOT
  <script type="text/javascript">
    setTimeout(function () { location.href = "$link"; }, 7000);
  </script>
  EOT;
}

// echo '<pre>';
// print_r($response->details->redirect->url);
// print_r($link);
// echo '<pre>';

?>


<!--PIXELS-->
<?php

// $pixels = explode(",", $request->pixels);
// $pixels = "44444443";
// echo '<script>script = document.getElementsByTagName("script");script[0].remove()</script>';

// echo "<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";
// foreach ($pixels as &$value) {
//   echo "fbq('init', '" . trim($value) . "');";
// };
// echo "fbq('init', '" . trim($value) . "');";
// echo "fbq('track', 'PageView');";
// echo "fbq('track', 'Lead');";
// echo "</script>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="robots" content="noindex, nofollow">

  <title>Registration</title>

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <style type="text/css">
    html,
    body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 100%;
      background: #191a1a;
      text-align: center;
    }

    h1 {
      margin: 0;
      padding: 0;
      font-family: ‘Arial Narrow’, sans-serif;
      font-weight: 100;
      font-size: 1.1em;
      color: #a3e1f0;
      position: relative;
      top: 38%;

    }

    span {
      display: block;
      position: absolute;
      top: 0.63em;
      width: 300px;
      margin: 0 calc(50% - 150px);
      text-transform: uppercase;
      opacity: 0;
    }

    .let1 {
      animation: drop 2s ease-in-out;
      animation-delay: .1s;
    }

    .let2 {
      animation: drop 2s ease-in-out;
      animation-delay: 2.1s;
    }

    .let3 {
      animation: drop 2s ease-in-out;
      animation-delay: 4.1s;
    }

    .let4 {
      animation: drop_stop 5s ease-in-out infinite;
      animation-delay: 6.1s;
      /*animation-timing-function: steps(1, end);*/
    }

    @keyframes drop {
      10% {
        opacity: 0.5;
      }

      20% {
        opacity: 1;
        top: 3.78em;
        /*         transform: rotateX(-360deg); */
      }

      80% {
        opacity: 1;
        top: 3.78em;
        /*         transform: rotateX(-360deg); */
      }

      90% {
        opacity: 0.5;
      }

      100% {
        opacity: 0;
        top: 6.94em
      }
    }

    @keyframes drop_stop {
      0% {
        opacity: 1;
        top: 3.78em;
      }

      100% {
        opacity: 1;
        top: 3.78em;
      }
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
    }

    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      left: -12px;
      margin: 4px;
      border: 2px solid #a3e1f0;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #a3e1f0 transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  </style>


  <!-- Google tag (gtag.js) -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11203559123"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-11203559123');
  </script> -->

</head>

<body>
  <h1>
    <span class="let1">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>Platform selection
    </span>
    <span class="let2">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>Registration
    </span>
    <span class="let3">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>Waiting for a redirection
    </span>
    <span class="let4">We will contact you as soon as possible</span>
  </h1>

  <!-- <script type="text/javascript">
    // var pm = window.location.href.match(/(\?|\&)to=([^\&\#]+)/i);
    let pm = '<?= $link ;?>';
    if (pm) { setTimeout(function () { window.location.replace(decodeURIComponent(pm)); }, 7000); }
  </script> -->
</body>
</html>