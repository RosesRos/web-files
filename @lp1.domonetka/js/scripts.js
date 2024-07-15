document.addEventListener("DOMContentLoaded", function (event) {

{/* 
<div id="clockdiv">
<div class="timer-date">
<span class="hour">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>
</div>
</div> 
*/}

    // Функция для определения оставшегося времени
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    // Функция для инициализации часов
    function initializeClock(id, endtime) {

        // Функция для обновления времени на часах
        function updateClock() {
            var t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
                initializeClock('clockdiv', deadline);
            }

            // Обновление времени на всех элементах с классом "timer-date"
            let clock = document.querySelectorAll('.timer-date').forEach(item => {
                item.querySelector(".hour").innerHTML = ("0" + t.hours).slice(-2);
                item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
                item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
            });
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    // Определение дедлайна
    var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);

    // Инициализация часов с id "clockdiv" и указанным дедлайном
    initializeClock("clockdiv", deadline);

    // Обработчик клика на все ссылки, которые начинаются с символа '#'
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let href = this.getAttribute("href").substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            // Плавная прокрутка к указанному элементу
            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });


    // Подставляем код телефона
    function addMaskPhone() {
        var mask = {
            getPhones: function () {
                var phones = document.querySelectorAll('.wv_phone');
                return (phones.length) ? phones : 0;
            },

            init: function () {
                var phones = mask.getPhones();
                if (phones) {
                    var countryCode = 'co'; // Здесь указываете нужный код страны

                    var countryCodes = {
                        'at': '+43',
                        'be': '+32',
                        'ch': '+41',
                        'de': '+49',
                        'it': '+39',
                        'es': '+34',
                        'fi': '+358',
                        'lv': '+371',
                        'lt': '+370',
                        'ee': '+372',
                        'ro': '+40',
                        'bg': '+359',
                        'pl': '+48',
                        'gr': '+30',
                        'cy': '+357',
                        'hu': '+36',
                        'fr': '+33',
                        'cz': '+420',
                        'pt': '+351',
                        'pe': '+51',
                        'co': '+57',
                        'cl': '+56',
                        'gt': '+502',
                        'ru': '+7',
                        'mx': '+52',
												'pa': '+507',
												'bo': '+591',
												'vn': '+84',
												'ec': '+593',
                        'do': '+809',
												'ar': '+54',
												'ph': '+63',
												'jo': '+962',
												'om': '+968',
												'cr': '+506',
												'pr': '+1',
												'py': '+595',
												'rs': '+381',
												'ba': '+387',
												'hn': '+504',
												'jp': '+81',
												'se': '+46',
                                                'no': '+47',
                    };

                    phones.forEach(function (phone) {
                        phone.pattern = '(\\+)[0-9]{10,16}';
                        phone.title = 'the phone must contain 10 to 17 digits only';

                        var code = countryCodes[countryCode.toLowerCase()];
                        phone.value = code; // Устанавливаем начальное значение поля

                        phone.addEventListener('focusin', function () {
                            this.value = code + this.value.slice(code.length);
                        });

                        phone.addEventListener('input', function () {
                            if (this.value.indexOf(code) !== 0) {
                                this.value = code + this.value.slice(code.length);
                            }
                        });
                    });
                }
            },
        };

        mask.init();
    }

    addMaskPhone();
});



//Нажатие на кнопку в форме!
function checkCookies(event) {
    var input_wv_phone = document.querySelector('.wv_phone').value; // Значение из поля ввода
    var input_wv_name = document.querySelector('.wv_name').value; // Значение из поля ввода

    var cookieValue = getCookie('user_phone'); // Значение куки с именем "myCookie"

    if (cookieValue) {
        if (cookieValue === input_wv_phone) {
            event.preventDefault();
            var body = document.querySelector('body');
            var template = getTemplate(window.lang || 'en', 'recently_confirmed');
            body.insertAdjacentHTML('beforeend', template);
        } else {
            setCookie('user_phone', input_wv_phone, 60 * 60);//60 minutes
            setCookie('user_name', input_wv_name, 60 * 60);//60 minutes
        }
    } else {
        setCookie('user_phone', input_wv_phone, 60 * 60);//60 minutes
        setCookie('user_name', input_wv_name, 60 * 60);//60 minutes
    }
}



//отрисовка окна при существовании уже кука
function getTemplate(lang, msg) {
    var input_wv_phone = document.querySelector('.wv_phone').value; // Значение из поля ввода

    const phone_support = "Invalid phone!";
    const main_msg = input_wv_phone;

    const styles = '<style scoped> #order-in-progress__popup {\
				position: fixed;\
				left: 50%;\
				top: 50%;\
				z-index: 200;\
				transform: translateX(-50%) translateY(-50%);\
				 background: white;\
				 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\
				 font-family: inherit;\
				 font-size: 18px;\
				 text-align: center;\
				 display: flex;\
				 justify-content: center;\
				 align-items: center;\
				 flex-direction: column;\
				 max-width: 400px;\
				 width: 100%;\
				 height: auto;\
				 border-radius: 5px;\
				 padding: 30px;\
				}\
				#order-in-progress__popup button {\
				 background: #f57d02;\
				 border-radius: 3px;\
				 border: none;\
				 text-transform: uppercase;\
				 padding: 10px 20px;\
				 margin-top: 20px;\
				 font-weight: 700;\
				 color: white;\
				 font-size: 19px;\
				 font-family: inherit;\
				}\
				#order-in-progress__popup span {\
				 width: 100%;\
				}\
				@media screen and (max-width: 479px) {\
				 #order-in-progress__popup {\
					max-width: calc(90vw - 40px);\
					padding: 15px 20px;\
				 }\
				}</style>';
    return styles + '<div id="order-in-progress__popup" ' +
        'style="position: fixed; z-index: 2147483647;" >' +
        '<span>' + main_msg + ' ' + phone_support + '</span>' +
        '<button' +
        ' style="background: #f57d02; border: 0px;margin-top: 30px; width: auto;"' +
        '  onclick="document.body.removeChild(document.querySelector(\'#order-in-progress__popup\'))">Close'+
        '</button>' +
        '</div>';
}


//Проверка существовании кука
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function setCookie(cname, cvalue, expireSeconds) {
    var d = new Date();
    d.setTime(d.getTime() + (expireSeconds * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



//отрисовка даты на страничке
function dtime_nums(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    document.write(date.toLocaleDateString());
}
