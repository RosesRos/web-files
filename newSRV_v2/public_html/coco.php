<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <form id="form_one" action="~/replacing" method="post" enctype="multipart/form-data">
            <div class=" mb-3 col">
                <label for="currency" class="form-label">Название новой директории:</label>
                <select class="form-select" name="domain" id="domain">
                  <option selected value="crazyheets.com">crazyheets.com</option>
                  <option value="const141825.vds">const141825.vds</option>
                </select>
            </div>
            <div>
                <label for="newText">Новый текст (заменит '777 Casino'):</label>
                <input type="text" id="newText" name="newText" required>
            </div>
            <div>
                <div>
                    <label for="icon">Иконка (PNG):</label>
                    <input type="file" name="file0" accept=".jpg, .jpeg, .png, .svg">
                </div>
                <div>
                    <label for="leftScreenshot">1 скриншот (Left):</label>
                    <input type="file" name="file1" accept=".jpg, .jpeg, .png">
                </div>
                <div>
                    <label for="middleScreenshot">2 скриншот (Middle):</label>
                    <input type="file" name="file2" accept=".jpg, .jpeg, .png">
                </div>
                <div>
                    <label for="rightScreenshot">3 скриншот (Right):</label>
                    <input type="file" name="file3" accept=".jpg, .jpeg, .png">
                </div>    
                
            </div>
            <div>
                <button id="sender" type="submit">создать</button>
            </div>
        </form>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("form_one").addEventListener("submit", function(event) {
                event.preventDefault();
                var $that = event.target;
                var $btn = $that.querySelectorAll('#sender');
                var $domain = $that.querySelector("#domain");
                var $newText = $that.querySelector("#newText");
                var $filesImg = $that.querySelectorAll('input[type="file"]');

                params = {
                    path: "/",
                    domain: $domain.value,
                    newText: $newText.value
                };
                const formData = new FormData();
                formData.append("file0", $filesImg[0].files[0]);
                formData.append("file1", $filesImg[1].files[0]);
                formData.append("file2", $filesImg[2].files[0]);
                formData.append("file3", $filesImg[3].files[0]);

                pairs = [];
	            for (var key in params) {
                    if (params.hasOwnProperty(key)) {
                        pairs.push(key+"="+encodeURIComponent(params[key]));
                    }
	            };
                let qs = pairs.join('&');
                let url = `https://${location.hostname}` + params.path + 'form.php?' + qs;

                fetch(url, {
                    method: "POST",
                    body: formData,
                    mode: 'no-cors',
                    cache: 'no-cache'
                })
                .then((response) => response.text())
                .then((data) => {
                    document.open();
                    document.write(data);
                    document.close();
                    return;
                })
                .catch((error) => {
                    return console.error(error);
                })

            });
        });
    </script>
</body>
</html>