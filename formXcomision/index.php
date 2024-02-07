<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form test</title>
    <link rel="shortcut icon" href="./view.svg" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      .container-sm {
        max-width: 650px;
        width: 100%;
      }
      .c-postion-relative {
        position: relative;
      }
      .password-control {
        position: absolute;
        bottom: 10px;
        right: 20px;
        display: inline-block;
        z-index: 5;
        width: 20px;
        height: 20px;
        background: url(./view.svg) 0 0 no-repeat;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <section class="container-sm pt-4">
      <form class="border border-Secondary rounded p-2" action="./succ.php" method="post">
        <h2 class="h2 text-center">Register</h2>
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="mb-3 col">
            <label for="firsName" class="form-label">first name</label>
            <input type="text" class="form-control" name="firstName" id="firsName">
          </div>
          <div class="mb-3 col">
            <label for="lastName" class="form-label">lats name</label>
            <input type="text" class="form-control" name="lastName" id="lastName">
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2">
          <div class=" mb-3 col">
            <label for="country" class="form-label">country</label>
            <select class="form-select" aria-label="France" name="country" id="country">
              <option selected>France</option>
              <option value="IT">Italy</option>
              <option value="DE">German</option>
            </select>
          </div>
          <div class=" mb-3 col">
            <label for="currency" class="form-label">currency</label>
            <select class="form-select" aria-label="EU" name="currency" id="currency">
              <option selected>EURO</option>
              <option value="EU">DOLLAR</option>
              <option value="EU">EU</option>
            </select>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="mb-3 col">
            <label for="phone" class="form-label">phone number</label>
            <input type="tel" class="form-control" name="phone" id="phone" required>
          </div>
          <div class="mb-3 col">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" name="email" id="email" required>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="mb-3 col c-postion-relative">
            <a class="password-control" onclick="togglePassword('password')"></a>
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password" required>
          </div>
          <div class="mb-3 col c-postion-relative">
            <a class="password-control" onclick="togglePassword('password2')"></a>
            <label for="password2" class="form-label">confirm Password</label>
            <input type="password" class="form-control" name="password2" id="password2" required>
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" name="checkbox" id="checkbox" required>
          <label class="form-check-label" for="checkbox">i am over 18 and i have read and accepted</label>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      function togglePassword(idPass) {
        let passwordInput = document.getElementById(idPass);
        passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
      }
    </script>
    <!-- <script>
            document.addEventListener('DOMContentLoaded', function() {
                document.addEventListener('submit', function(event) {
                    event.preventDefault();

                    var $that = event.target;
                    var $inputs = $that.querySelectorAll('input');
                    var $select = $that.querySelectorAll('select');
                    var $btn = $that.querySelectorAll('button');


                    params = {
                        path: 'formXcomision',
                        // pixels: '<?= $pixels ?>',
                        // arb: '<?= $arb; ?>',
                        // clickid: '<?= $click; ?>',
                        // landing: '<?= $land; ?>'
                    }
                    console.log(params);

                    var isChcec = true
                    $inputs.forEach(function(input) {
                        if (input.name === 'phone') {
                            var res = input.value.split('_').length > 1
                            if (res) {
                                return isChcec = false
                            }
                        }
                        params[input.name] = input.value;
                    })
                    $select.forEach(function(select) {
                        params[select.name] = select.value
                    })

                    pairs = [];
                
                    for (var key in params) {
                        if (params.hasOwnProperty(key)) {
                            pairs.push(key+"="+encodeURIComponent(params[key]));
                        }
                    };
                
                    var qs = pairs.join('&');
                    var url = 'https://<?= $_SERVER["HTTP_HOST"] ?>/' + params.path + '/success.php?params=' + JSON.stringify(params) + '&' + qs;

                    fetch(url, {
                        method: 'POST',
                        mode: 'no-cors',
                        cache: 'no-cache'
                    })
                    .then((x) => x.text())
                    .then((x) => {
                        if (!x) {
                            console.log('huy')

                            var $that = event.target;
                            var $inputs = $that.querySelectorAll('input');
                            $inputs.forEach(function(input) {
                                if (input.name === 'phone') input.style.borderColor = 'red'
                            })

                            return
                        }

                        document.open();
                        document.write(x);
                        document.close();
                        return;
                    })
                    .catch((err) => {
                        // console.log(err);
                    });

                });
            });
    </script> -->
  </body>
</html>