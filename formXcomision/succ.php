<?php 
header('Access-Control-Allow-Origin: *');
$request = (object) $_REQUEST;

$buildParams = [
    "firstName" => $request->firstName,
    "lastName" => $request->lastName,
    "country" => $request->country,
    "currency" => $request->currency,
    "phone" => $request->phone,
    "email" => $request->email,
    "password" => $request->password,
    "password2" => $request->password2,
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>request form</title>
    <link rel="shortcut icon" href="./view.svg" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container-sm {
            max-width: 650px;
            width: 100%;
        }
    </style>
</head>
<body>

    <section class="container-sm pt-4">
        <div class="card">
            <div class="card-header">Данные отправленные с Формы</div>
            <div class="card-body">
                <h5 class="card-title">проверяем данные</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: <?php echo $request->firstName;?></li>
                    <li class="list-group-item">LastName: <?php echo $request->lastName;?></li>
                    <li class="list-group-item">Country: <?php echo $request->country;?></li>
                    <li class="list-group-item">Currency: <?php echo $request->currency;?></li>
                    <li class="list-group-item">Phone: <?php echo $request->phone;?></li>
                    <li class="list-group-item">Email: <?php echo $request->email;?></li>
                    <li class="list-group-item">Password1: <?php echo $request->password;?></li>
                    <li class="list-group-item">Password2: <?php echo $request->password2;?></li>
                </ul>
                <a href="../" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>