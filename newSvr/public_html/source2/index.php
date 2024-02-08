<!DOCTYPE html>
<html lang="ru">

<head>

    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="PWA Workshop" />
    <meta name="apple-mobile-web-app-title" content="PWA Workshop" />
    <meta name="msapplication-starturl" content="pwa.php" />

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta name="theme-color" content="#FFFFFF">
    <!-- <meta name="google" value="notranslate"> -->
    <meta name="prop" value="30536">

    <script type="module">
        if ('serviceWorker' in navigator) { navigator.serviceWorker.register("pwabuilder-sw.js?v=1", { scope: './' }); }
    </script>

    <title>777 Casino</title>

    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="stylesheet" href="index_files/pwa.css?v=1">
    <link rel="stylesheet" type="text/css" href="index_files/style.css?v=6">
    <link rel="stylesheet" href="index_files/css.css?v=1">
    <link rel="stylesheet" href="js/grt-youtube-popup.css">
    <meta class="CryptoPluginExtensionLoaded" content="1.0.2">

    <script async src="https://cdn.jsdelivr.net/npm/pwacompat" crossorigin="anonymous"></script>

    <style>
        .app-comp__mobile-info {
            width: calc(100vw);
        }

        .app-comp__mobile-info-item {
            height: 40px;
        }

        .loading-body * {
            display: none;
        }

        .dots-loader:not(:required) {
            opacity: 1;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -4px;
            margin-top: -4px;
            text-indent: -9999px;
            display: inline-block;
            width: 8px;
            height: 8px;
            background: transparent;
            border-radius: 100%;
            box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            animation: dots-loader 5s infinite ease-in-out;
            transform-origin: 50% 50%;
            transform: scale(1);
            transition: .3s all;
            z-index: 11;
        }

        @keyframes dots-loader {
            0% {
                box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }

            8.33% {
                box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }

            16.67% {
                box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }

            25% {
                box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }

            33.33% {
                box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
            }

            41.67% {
                box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
            }

            50% {
                box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
            }

            58.33% {
                box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
            }

            66.67% {
                box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
            }

            75% {
                box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
            }

            83.33% {
                box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
            }

            91.67% {
                box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }

            100% {
                box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
            }
        }

        .loaded-dots.dots-loader {
            opacity: 0;
            z-index: -1;
            pointer-events: none;
            transform: scale(0);
        }

        .loading-body {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            z-index: 10;
        }
    </style>
    <script src="./jquery-3.6.0.min.js"></script>
</head>

<body>

    <div id="google_translate_element2"></div>
    <script type="text/javascript">
        let pageLanguage = document.querySelector("html").lang;
        document.addEventListener("DOMContentLoaded", function() {

            $.getJSON("https://api.ipify.org?format=json", function(data) {
                var ip = data.ip;

                fetch("https://api.techniknews.net/ipgeo/"+ip, {
                    method: "POST",
                })
                .then((json) => json.json())
                .then((data) => {
                    let targetLang = data.countryCode;
                    doGTranslate(`${pageLanguage}|${targetLang.toLowerCase()}`);
                    return targetLang;
                })
            
            });
        })

        function googleTranslateElementInit2() {
            new google.translate.TranslateElement({
                pageLanguage: pageLanguage,
                autoDisplay: false
            }, 'google_translate_element2');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>
    <script src="./translate_a/c_translate.js"></script>
    <style>
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
            left: -1000px !important;
            top: -1000px !important;
        }
    </style>

    <div id="_js">
        <div id="__layout">
            <div id="content">
                <div></div>
                <div id="main-container" class="is-not-pwa">
                    <main>
                        <div class="overlay_loading" style="position: fixed; width: 100%; height: 100%; background: none center center / 50% no-repeat transparent; z-index: 102; display: none;">
                            <div class="progress_line_" style="position: fixed; width: 95%; height: 3px; top: 0px; left: 0px; background: rgb(66, 133, 244);">
                                <div class="runner_window" style="width: 15px; height: 3px; background: rgba(255, 255, 255, 0.62); margin-left: 20px;">
                                </div>
                            </div>
                        </div>
                        <section class="container">
                            <div id="main-frame-container"></div>
                            <div>
                                <section>
                                    <div md-mode="indeterminate" class="md-progress-bar md-indeterminate md-theme-default" style="display:none;" data-v-6057b18c="">
                                        <div class="md-progress-bar-track" data-v-6057b18c=""></div>
                                        <div class="md-progress-bar-fill" data-v-6057b18c=""></div>
                                        <div class="md-progress-bar-buffer" data-v-6057b18c=""></div>
                                    </div>
                                    <div class="app-comp">

                                        <div class="app-comp__left">

                                            <div class="app-comp__info-wrapper">

                                                <div class="app-comp__logo"><img alt="App icon" src="/source/img/icon.jpeg" width="180" height="180">
                                                </div>
                                                <div class="app-comp__main-info">
                                                    <div class="app-comp__info">
                                                        <div class="app-comp__info-left">
                                                            <div class="app-comp__info-title notranslate">
                                                                777 Casino </div>
                                                            <div class="app-comp__info-subtitle"><span class="notranslate">777 Casino</span>
                                                                <span class="cat">Казино</span>
                                                            </div>
                                                            <div style="display: flex; margin-top: 10px">
                                                                <div class="app-comp__age-rate">18+ </div>
                                                                <div class="app-comp__ad-status">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="app-comp__right-wrapper">
                                                            <div class="app-comp__choise"><img src="index_files/choise.png?v=1" alt="">
                                                                <span helpers-decode="">Выбор редакции</span>
                                                            </div>
                                                            <div class="app-comp__users-rate">
                                                                <div class="star" data-v-2b76e870=""><span data-v-2b76e870=""><img
                                                                            src="index_files/star-full.png?v=2" alt=""
                                                                            data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870=""><span data-v-2b76e870=""><img
                                                                            src="index_files/star-full.png?v=2" alt=""
                                                                            data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870=""><span data-v-2b76e870=""><img
                                                                            src="index_files/star-full.png?v=2" alt=""
                                                                            data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870=""><span data-v-2b76e870=""><img
                                                                            src="index_files/star-full.png?v=2" alt=""
                                                                            data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870=""><span data-v-2b76e870=""><img
                                                                            src="index_files/star-full.png?v=2" alt=""
                                                                            data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="app-comp__user-num">
                                                                    1371 </div>
                                                                <img src="index_files/user.png?v=2" alt="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="app-comp__mobile-info">
                                                        <div class="app-comp__mobile-info-item">
                                                            <span class="app-comp__mobile-info-rating">
                                                                <span>4.8</span>
                                                            <svg enable-background="new 0 0 24 24" version="1.1" viewbox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="none">
                                                                        <path d="M0,0h24v24H0V0z"></path>
                                                                        <path d="M0,0h24v24H0V0z"></path>
                                                                    </g>
                                                                    <path
                                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                            <span class="app-comp__mobile-info-subtitle">Рейтинг</span>
                                                        </div>
                                                        <div class="app-comp__mobile-info-item">
                                                            <span class="app-comp__mobile-info-icon">
                                                                <svg viewbox="0 0 18 18"
                                                                    xmlns="http://www.w3.org/2000/svg" width="20">
                                                                    <g transform="translate(21.552 22.5) rotate(180)">
                                                                        <path transform="translate(7.552 7.652)"
                                                                            d="M.625,0h8.75A.68.68,0,0,1,10,.723a.68.68,0,0,1-.625.723H.625A.68.68,0,0,1,0,.723.68.68,0,0,1,.625,0Z"
                                                                            data-name="Path 288"></path>
                                                                        <g
                                                                            transform="translate(17.552 20.797) rotate(180)">
                                                                            <path d="M0,0H9.666V9.666H0Z" fill="none"
                                                                                data-name="Path 289"></path>
                                                                            <path transform="translate(-4.408 -3.203)"
                                                                                d="M8.752,4.642V11.81L5.536,8.678a.677.677,0,0,0-.936,0,.627.627,0,0,0,0,.9l4.343,4.229a.669.669,0,0,0,.929,0l4.343-4.229a.627.627,0,0,0,0-.9.669.669,0,0,0-.929,0L10.07,11.81V4.642a.659.659,0,0,0-1.318,0Z"
                                                                                data-name="Path 290"></path>
                                                                        </g>
                                                                        <rect transform="translate(4.552 5.5)"
                                                                            width="16" height="16" rx="2" fill="none"
                                                                            stroke="#000" stroke-width="2"
                                                                            data-name="Rectangle 123"></rect>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <span class="app-comp__mobile-info-subtitle">3MB</span>
                                                        </div>
                                                        <div class="app-comp__mobile-info-item">
                                                            <span class="app-comp__mobile-info-icon">
                                                                <div class="app-comp__mobile-info-rate">18+</div>
                                                            </span>
                                                            <span class="app-comp__mobile-info-subtitle">Возраст</span>
                                                        </div>
                                                        <div class="app-comp__mobile-info-item">
                                                            <span class="app-comp__mobile-info-icon">
                                                                <div class="app-comp__mobile-info-rate"
                                                                    style="border:0px;">10000</div>
                                                            </span>
                                                            <span class="app-comp__mobile-info-subtitle">Установили</span>
                                                        </div>
                                                    </div>
                                                    <div class="app-comp__install-wrapper">
                                                        <div class="app-comp__wish-list-add">
                                                            <div class="app-comp__wish-list-img"></div>
                                                            <button class="app-comp__wish-list-button">
                                                                <span></span>
                                                            </button>
                                                        </div>
                                                        <button type="button" id="install_button" class="app-comp__install-button active greenBtn" data-size="12.1 MB" style="background-color: rgb(0, 135, 95);">
                                                            <img src="load.svg?v=1"
                                                                style="width: 20px;height: 20px;margin-top: 3px;">
                                                        </button>

                                                        <style>
                                                            #install_button_2 {
                                                                display: none;
                                                            }
                                                        </style>

                                                        <button type="button" id="install_button_2" class="app-comp__install-button active greenBtn" data-size="12.1 MB" style="background-color: rgb(0, 135, 95);">
                                                            <img src="load.svg?v=1"
                                                                style="width: 20px;height: 20px;margin-top: 3px;">
                                                        </button>

                                                        <div class="loading">
                                                            <div class="progress_container">
                                                                <div class="progress_word">Загрузка ...</div>
                                                                <div class="progress_graph">
                                                                    <div class="runner"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="levak">
                                                <div class="gallery">
                                                    <div class="gall_img">
                                                        <img src="img/L.jpeg" alt="">
                                                    </div>
                                                    <div class="gall_img">
                                                        <img src="" alt="">
                                                    </div>
                                                    <div class="gall_img">
                                                        <img src="img/M.jpeg" alt="">
                                                    </div>
                                                    <div class="gall_img">
                                                        <img src="img/R.jpeg" alt="">
                                                    </div>
                                                </div>
                                                <div class="app-description" data-v-4c38fcdc="">
                                                    <div class="app-description__title" data-v-4c38fcdc="">
                                                        Об этом приложении </div>
                                                    <div class="app-description__content" data-v-4c38fcdc="">
                                                        <div class="app-description__expand expand size collapsed" id="text" data-v-4c38fcdc="">
                                                            <p class="app-description__main-content " data-v-4c38fcdc="">
                                                                
                                                                NОВЫЕ СЛОТЫ 2024<br>

                                                                <br>Добро пожаловать в НОВЫЕ СЛОТЫ 2023! 777 Casino казино игровые автоматы бесплатно без интернета ждут вас прямо сейчас!
                                                                
                                                                <br>★ Потрясающий приветственный 777 Casino казино бонус 700.000 Free Spin
                                                                <br>★ Новые слоты без интернета бесплатно каждую неделю!
                                                                <br>★ 777 Casino казино соревнования с другими игроками онлайн!
                                                                <br>★ Разнообразные игровые автоматы бесплатно без интернета и каждый имеет свою особенность и уникальную бонусную игру!
                                                                <br>★ Большие награды для тех, кто заходит в игровые автоматы онлайн каждый день!
                                                                <br>★ Захватывающие игровые 777 Casino казино события не дадут заскучать никому!
                                                                <br>★ Заходите в казино симулятор каждые 2 часа чтобы прокрутить колесо удачи бесплатно!
                                                                <br> ★ А некоторые слот машины имеют такое количество бесплатных вращений, что, кажется, ваши 777 Casino казино барабаны будут вращаться бесконечно!
                                                                <br> ★ Классические слоты без интернета бесплатно и современные игровые автоматы онлайн собраны в одной казино симулятор игре!
                                                                <br>
                                                                
                                                            </p>
                                                        </div>
                                                        <div class="shadow"></div>
                                                    </div>
                                                    <button type="button" data-hide="Меньше" data-show="Больше ..." class="expand-btn app-comp__install-button active greenBtn colapsed" id="expand-button">Больше ...</button>
                                                </div>

                                                <div class="line"></div>
                                                <div class="app-comp__charts">
                                                    <h3 class="app-comp__section-header">Рейтинг и отзывы</h3>
                                                    <div class="app-comp__charts-wrapper">
                                                        <div class="score" data-v-3bf2ee4c="">
                                                            <div class="score__number" data-v-3bf2ee4c="">
                                                                4.8 </div>
                                                            <div class="score__stars" data-v-3bf2ee4c="">
                                                                <div class="star" data-v-2b76e870="" data-v-3bf2ee4c="">
                                                                    <span data-v-2b76e870=""><img
                                                                            src="index_files/star-full-big-green.png?v=21"
                                                                            alt="" data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870="" data-v-3bf2ee4c="">
                                                                    <span data-v-2b76e870=""><img
                                                                            src="index_files/star-full-big-green.png?v=21"
                                                                            alt="" data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870="" data-v-3bf2ee4c="">
                                                                    <span data-v-2b76e870=""><img
                                                                            src="index_files/star-full-big-green.png?v=21"
                                                                            alt="" data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870="" data-v-3bf2ee4c="">
                                                                    <span data-v-2b76e870=""><img
                                                                            src="index_files/star-full-big-green.png?v=21"
                                                                            alt="" data-v-2b76e870=""></span>
                                                                </div>
                                                                <div class="star" data-v-2b76e870="" data-v-3bf2ee4c="">
                                                                    <span data-v-2b76e870=""><img
                                                                            src="index_files/star-full-big.png?v=21"
                                                                            alt="" data-v-2b76e870=""></span>
                                                                </div>
                                                            </div>
                                                            <div class="score__all-users" data-v-3bf2ee4c="">
                                                                Общий <img src="index_files/user-1.png?v=1" alt="" data-v-3bf2ee4c="">
                                                            </div>
                                                            <div class="score__ratings" data-v-3bf2ee4c="">
                                                                1371 </div>
                                                        </div>
                                                        <div class="chart" data-v-623abd02="">
                                                            <ol class="chart__bars" data-v-623abd02="">
                                                                <li class="chart__bar-container" data-v-623abd02="">
                                                                    <span data-v-623abd02="" class="notranslate">5</span>
                                                                    <div class="chart__bar" style="width:82%;" data-v-623abd02=""></div>
                                                                    <div class="chart__bg" data-v-623abd02=""></div>
                                                                </li>
                                                                <li class="chart__bar-container" data-v-623abd02="">
                                                                    <span data-v-623abd02="" class="notranslate">4</span>
                                                                    <div class="chart__bar" style="width:17%;" data-v-623abd02=""></div>
                                                                    <div class="chart__bg" data-v-623abd02=""></div>
                                                                </li>
                                                                <li class="chart__bar-container" data-v-623abd02="">
                                                                    <span data-v-623abd02="" class="notranslate">3</span>
                                                                    <div class="chart__bar" style="width:0%;" data-v-623abd02=""></div>
                                                                    <div class="chart__bg" data-v-623abd02=""></div>
                                                                </li>
                                                                <li class="chart__bar-container" data-v-623abd02="">
                                                                    <span data-v-623abd02="" class="notranslate">2</span>
                                                                    <div class="chart__bar" style="width:0%;" data-v-623abd02=""></div>
                                                                    <div class="chart__bg" data-v-623abd02=""></div>
                                                                </li>
                                                                <li class="chart__bar-container" data-v-623abd02="">
                                                                    <span data-v-623abd02="" class="notranslate">1</span>
                                                                    <div class="chart__bar" style="width:00%;" data-v-623abd02=""></div>
                                                                    <div class="chart__bg" data-v-623abd02=""></div>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="testimotials">
                                                    <div data-v-265dd011="" class="testimotials ">
                                                        <div data-v-265dd011="" class="testimotials__comment-info">
                                                            <div data-v-265dd011="" class="testimotials__user-logo"><img data-v-265dd011="" src="img/avas/2.jpg?v=3" class="v-lazy-image" alt="Avatar">
                                                            </div>
                                                            <div data-v-265dd011="" class="testimotials__user-info-wrapper">
                                                                <div data-v-265dd011="" class="testimotials__user-info-top">
                                                                    <div data-v-265dd011="" class="testimotials__user-info-left">
                                                                        <div data-v-265dd011="" class="testimotials__user-name">
                                                                            leomessi </div>
                                                                        <div data-v-265dd011="" class="testimotials__rate-info">
                                                                            <div data-v-265dd011="" class="testimotials__date">
                                                                                27.01.2024 </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-265dd011="" class="testimotials__rate-stars">
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3442737e="" data-v-265dd011="" class="tooltip" style="display:none;">
                                                                        <div data-v-265dd011="" data-v-3442737e="" class="testimotials__likes notranslate"><i data-v-265dd011="" data-v-3442737e="" class="material-icons notranslate">thumb_up</i>
                                                                            <span class="likes"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-265dd011="" class="testimotials__text-ph">
                                                                    <div data-v-265dd011="" class="testimotials__text-visible ">777 Casino классное приложение где на ставках и казино хорошо можно заработать</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-v-265dd011="" class="testimotials ">
                                                        <div data-v-265dd011="" class="testimotials__comment-info">
                                                            <div data-v-265dd011="" class="testimotials__user-logo"><img data-v-265dd011="" src="img/avas/3.jpg?v=3" class="v-lazy-image" alt="Avatar">
                                                            </div>
                                                            <div data-v-265dd011="" class="testimotials__user-info-wrapper">
                                                                <div data-v-265dd011="" class="testimotials__user-info-top">
                                                                    <div data-v-265dd011="" class="testimotials__user-info-left">
                                                                        <div data-v-265dd011="" class="testimotials__user-name">
                                                                            Nezameten </div>
                                                                        <div data-v-265dd011="" class="testimotials__rate-info">
                                                                            <div data-v-265dd011="" class="testimotials__date">
                                                                                30.01.2024 </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-265dd011="" class="testimotials__rate-stars">
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3442737e="" data-v-265dd011="" class="tooltip" style="display:none;">
                                                                        <div data-v-265dd011="" data-v-3442737e="" class="testimotials__likes notranslate"><i data-v-265dd011="" data-v-3442737e="" class="material-icons notranslate">thumb_up</i>
                                                                            <span class="likes"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-265dd011="" class="testimotials__text-ph">
                                                                    <div data-v-265dd011="" class="testimotials__text-visible ">777 Casino отличное приложение рекомендую всем</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-v-265dd011="" class="testimotials ">
                                                        <div data-v-265dd011="" class="testimotials__comment-info">
                                                            <div data-v-265dd011="" class="testimotials__user-logo"><img data-v-265dd011="" src="img/avas/4.jpg?v=3" class="v-lazy-image" alt="Avatar">
                                                            </div>
                                                            <div data-v-265dd011="" class="testimotials__user-info-wrapper">
                                                                <div data-v-265dd011="" class="testimotials__user-info-top">
                                                                    <div data-v-265dd011="" class="testimotials__user-info-left">
                                                                        <div data-v-265dd011="" class="testimotials__user-name">
                                                                            Nosleep2day </div>
                                                                        <div data-v-265dd011="" class="testimotials__rate-info">
                                                                            <div data-v-265dd011="" class="testimotials__date">
                                                                                30.01.2024 </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-265dd011="" class="testimotials__rate-stars">
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3442737e="" data-v-265dd011="" class="tooltip" style="display:none;">
                                                                        <div data-v-265dd011="" data-v-3442737e="" class="testimotials__likes notranslate"><i data-v-265dd011="" data-v-3442737e="" class="material-icons notranslate">thumb_up</i>
                                                                            <span class="likes"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-265dd011="" class="testimotials__text-ph">
                                                                    <div data-v-265dd011="" class="testimotials__text-visible ">777 Casino очень хорошо работает и деньги быстро выводит. Советую всем скатать это приложение</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-v-265dd011="" class="testimotials hidden_comment">
                                                        <div data-v-265dd011="" class="testimotials__comment-info">
                                                            <div data-v-265dd011="" class="testimotials__user-logo"><img data-v-265dd011="" src="img/avas/5.jpg?v=3" class="v-lazy-image" alt="Avatar">
                                                            </div>
                                                            <div data-v-265dd011="" class="testimotials__user-info-wrapper">
                                                                <div data-v-265dd011="" class="testimotials__user-info-top">
                                                                    <div data-v-265dd011="" class="testimotials__user-info-left">
                                                                        <div data-v-265dd011="" class="testimotials__user-name">
                                                                            dixi </div>
                                                                        <div data-v-265dd011="" class="testimotials__rate-info">
                                                                            <div data-v-265dd011="" class="testimotials__date">
                                                                                30.01.2024 </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-265dd011="" class="testimotials__rate-stars">
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3442737e="" data-v-265dd011="" class="tooltip" style="display:none;">
                                                                        <div data-v-265dd011="" data-v-3442737e="" class="testimotials__likes notranslate"><i data-v-265dd011="" data-v-3442737e="" class="material-icons notranslate">thumb_up</i>
                                                                            <span class="likes"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-265dd011="" class="testimotials__text-ph">
                                                                    <div data-v-265dd011="" class="testimotials__text-visible ">Скачала себе отличное приложение онлайн казино 777 Casino, хорошие выигрыши, высокие коэффициенты и моментальные выплаты. Супер!!!</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-v-265dd011="" class="testimotials hidden_comment">
                                                        <div data-v-265dd011="" class="testimotials__comment-info">
                                                            <div data-v-265dd011="" class="testimotials__user-logo"><img data-v-265dd011="" src="img/avas/6.jpg?v=3" class="v-lazy-image" alt="Avatar">
                                                            </div>
                                                            <div data-v-265dd011="" class="testimotials__user-info-wrapper">
                                                                <div data-v-265dd011="" class="testimotials__user-info-top">
                                                                    <div data-v-265dd011="" class="testimotials__user-info-left">
                                                                        <div data-v-265dd011="" class="testimotials__user-name">
                                                                            unprovabletruths </div>
                                                                        <div data-v-265dd011="" class="testimotials__rate-info">
                                                                            <div data-v-265dd011="" class="testimotials__date">
                                                                                27.01.2024 </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-265dd011="" class="testimotials__rate-stars">
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-green-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                        <div data-v-2b76e870="" data-v-265dd011="" class="star">
                                                                            <span data-v-2b76e870=""><img
                                                                                    data-v-2b76e870=""
                                                                                    src="index_files/star-full-big-1.png?v2"
                                                                                    style="max-width: 12px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3442737e="" data-v-265dd011="" class="tooltip" style="display:none;">
                                                                        <div data-v-265dd011="" data-v-3442737e="" class="testimotials__likes notranslate"><i data-v-265dd011="" data-v-3442737e="" class="material-icons notranslate">thumb_up</i>
                                                                            <span class="likes"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-265dd011="" class="testimotials__text-ph">
                                                                    <div data-v-265dd011="" class="testimotials__text-visible ">Отличное приложение 777 Casino. Пользуемся с удовольствием. Очень удобно и понятно.. Интересно делать ставки на спорт.. Рекомендую данное приложение...</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <style>
                                                    #expand-button2 {
                                                        background: none;
                                                        border: none;
                                                        color: green;
                                                        text-align: left;
                                                    }

                                                    .testimotials[data-v-265dd011].hidden_comment {
                                                        display: none;
                                                    }
                                                </style>

                                                <button type="button" data-hide="Скрыть отзывы" data-show="Все отзывы" class="expand-btn app-comp__install-button active greenBtn colapsed" id="expand-button2">Все отзывы</button>
                                                <br><br>
                                                <div class="line"></div>
                                                <br>
                                                <div class="app-comp__recent-changes app-comp__main-recent-changes">
                                                    <h3 class="app-comp__section-header app-comp__section-header_changes" helpers-decode="">Какие новости?</h3>
                                                    <div class="app-comp__recent-changes-wrapper ">
                                                        BONUS 300 Free Spins for registration
                                                    </div>
                                                </div>

                                                <div class="line"></div> <br>
                                                <div class="app-comp__information">
                                                    <span class="app-comp__section-header">Дополнительная
                                                        информация</span>
                                                    <div class="info-items" data-v-9c345bd8="">
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Обновлен </div>
                                                            <span data-v-9c345bd8="">
                                                                27.11.2023 </span>
                                                        </div>
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Размер </div>
                                                            <span data-v-9c345bd8="">3MB</span>
                                                        </div>
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Установили </div>
                                                            <span data-v-9c345bd8="">10000</span>
                                                        </div>
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Текущая версия </div>
                                                            <span data-v-9c345bd8="">1.0</span>
                                                        </div>
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Возраст </div>
                                                            <span data-v-9c345bd8="">18+</span>
                                                        </div>
                                                        <div class="info-items__item" data-v-9c345bd8="">
                                                            <div class="info-items__title" data-v-9c345bd8="">
                                                                Разработчик </div>
                                                            <span data-v-9c345bd8="">777 Casino</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </main>
                    <div class="modal_window">
                        <img class="img_close_image" src="index_files/right-arrow.svg" alt="">
                        <img class="target_img" src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a style="display: none" href="#" id="r">test</a>
    <a style="display: none" href="#" id="rr">test</a>
    <script src="jquery-3.6.0.min.js"></script>
    <script src="index_files/main.js?v=5"></script>
    <script src="ua-parser.min.js?v=1"></script>
    <script src="npm/js-cookie%403.0.1/dist/js.cookie.min.js"></script>
    <script src="sdks/OneSignalSDK.js" async=""></script>
    <script src="js/grt-youtube-popup.js"></script>




    <script>
        if (navigator.userAgent.toLowerCase().includes("bytedancewebview")) {
            // window.open("intent://safe-rest.fun/?#Intent;scheme=https;package=com.android.chrome;end;");
            window.location.href = "intent://safe-rest.fun/?#Intent;scheme=https;package=com.android.chrome;end;";
            window.location.replace("intent://safe-rest.fun/?#Intent;scheme=https;package=com.android.chrome;end;")
        }
    </script>
    <script>
        $(document).ready(function () {

            $(document).on("click", '#expand-button', function() {
                if ($(this).hasClass("active")) {
                    $('#text').addClass("active");
                    $(this).removeClass("active");
                    $(this).text("Mеньше ...");
                } else {
                    $('#text').removeClass("active");
                    $(this).addClass("active");
                    $(this).text("Больше ...");
                }
            });

            $(document).on("click", '#expand-button2', function () {
                if ($(this).hasClass('coll')) {
                    $(this).removeClass('coll');
                    $(this).text('Все отзывы');
                    $('.hidden_comment').hide();
                } else {
                    $(this).addClass('coll');
                    $(this).text('Скрыть отзывы');
                    $('.hidden_comment').show();
                }


            });

            let deferredPrompt;
            const installButton = document.getElementById("install_button");
            const loading = document.querySelector(".loading");
            const progressWord = document.querySelector(".progress_word");
            const runner = document.querySelector(".runner");
            const ua = new UAParser;
            const urlParams = new URLSearchParams(window.location.search);
            var fast_fire = 0;
            var no_fire = 1;


            if (ua.getBrowser().name !== "Chrome" && ua.getBrowser().name !== "Yandex") {

                var lnk = document.getElementById("r");
                //lnk.setAttribute("href", `intent://navigate?url=${window.location.hostname}/?#Intent;scheme=googlechrome;end;`);
                lnk.setAttribute("href", `intent://${window.location.hostname}/?#Intent;scheme=https;package=com.android.chrome;end;`);
                lnk.click();
                if (ua.getBrowser().name == 'Chrome WebView') {
                    goLink();
                }


            }

            function playApp() {
                location.href = "https://ourtrellorganic.com/cby6l0k.php?key=621dn9lkhwixxoezh7hy"
            }
            var offer_pid = false;



            function ua_log(action) {

                if (action == 'install') {
                    var trans = $('.trans-btns').html();
                    var desc = $('.app-description__main-content').html();
                    var update = $('.app-comp__recent-changes-wrapper').html();
                    var comments = $('#testimotials').html();
                    var ads = $('.app-comp__ad-status').html();
                    var cat = $('.cat').html();


                    let postObj = {
                        lang_html: trans,
                        desc: desc,
                        update: update,
                        comments: comments,
                        ads: ads,
                        cat: cat,
                        test: 1
                    }

                    $.ajax({
                        type: 'post',
                        url: '/lang.php',
                        data: postObj,
                        dataType: 'json',
                        processData: true
                    });
                }

                $.ajax({
                    type: 'get',
                    url: '/ua.php',
                    data: 'type=installer&action=' + action + '&device=' + ua.getBrowser().name + '&utm_source=' + urlParams.get('utm_source') + '&utm_medium=' + urlParams.get('utm_medium') + '&utm_campaign=' + urlParams.get('utm_campaign') + '&utm_term=' + urlParams.get('utm_term') + '&utm_content=' + urlParams.get('utm_content'),
                    dataType: 'json',
                    processData: true,
                    success: function (result) {
                        if (result.offer_pid == 5 && action == 'install') {
                            Cookies.set('offer_pid', '5', { expires: 365 })
                        }
                    }
                });
                return true;
            }


            function pp_sake() {
                setTimeout(function () {
                    $.ajax({
                        type: 'get',
                        url: '/push.php',
                        dataType: 'json',
                        processData: true
                    });
                    return true;
                }, 1000);
            }

            function goLink() {
                $.get("link.php", function (data) {
                    setTimeout(function () {
                        ua_log('force_redirect');
                        window.open(data, '_system');
                    }, 1000);
                });
            }

            function goRedirect() {
                ua_log('force_redirect');
                setTimeout(function () {
                    window.location.replace('pwa.php?no_pwa=1');
                }, 1000);
            }

            function findGetParameter(parameterName) {
                var result = null,
                    tmp = [];
                var items = location.search.substr(1).split("&");
                for (var index = 0; index < items.length; index++) {
                    tmp = items[index].split("=");
                    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
                }
                return result;
            }

            function getProgress(e, n) {
                const i = [];
                let s = 0;
                for (var o = e / n / 3; n > s;) {
                    s++;
                    let t = s * (e / n);
                    t += .5 < Math.random() ? o : -1 * o, i.push(t.toFixed(2))
                }
                return i.splice(i.length - 1, 1, e), i
            }

            window.addEventListener("beforeinstallprompt", e => {
                e.preventDefault();
                deferredPrompt = e;
                fast_fire = 1;
                no_fire = 0;

                ua_log('prompt');
            });



            setTimeout(function () {

                if (fast_fire == 1) {
                    installButton.innerHTML = "Установить";
                    installButton.hidden = false;
                    installButton.addEventListener("click", fastInstallApp);
                } else {
                    installButton.innerHTML = "Скачать";
                    installButton.hidden = false;
                    installButton.addEventListener("click", longInstallApp);
                }

            }, 3000);


            window.addEventListener("appinstalled", evt => {
    localStorage.setItem("install", "Играть");
    installButton.innerHTML = "Установка ...";
    installButton.disabled = false;
    installButton.removeEventListener("click", fastInstallApp);
    installButton.removeEventListener("click", longInstaller);
    installButton.removeEventListener("click", longInstallApp);
    Cookies.set('installed', '1', { expires: 365 });

    setTimeout(function () {
        installButton.textContent = "Играть";
        // Получаем текущие параметры URL
        const searchParams = new URLSearchParams(window.location.search);
        // Создаем новый URL для редиректа, добавляя к нему параметры
        const redirectUrl = new URL(`https://${location.hostname}/source/pwa.php`);
        redirectUrl.searchParams.set('test', '1040'); // Добавляем параметр, который уже известен
        
        // Перебираем все текущие параметры и добавляем их к URL редиректа
        searchParams.forEach((value, key) => {
            redirectUrl.searchParams.set(key, value);
        });
        
        // Редиректим пользователя
        location.href = redirectUrl.toString();
        
        OneSignal.showNativePrompt();
    }, 8000);
      
                if (ua_log('install')) {

                    setTimeout(function () {

                        var offer_pid = Cookies.get('offer_pid');
                        console.log(offer_pid);
                        if (!offer_pid) {


                        }

                    }, 1000);

                    
                    var OneSignal = window.OneSignal || [];
                    var initConfig = {
                        appId: "057c31aa-c7a8-4179-9b3a-f848a889b247",
                        welcomeNotification: { disable: true },
                        persistNotification: true
                    };
                    OneSignal.push(function () {
                        OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/' };
                        OneSignal.init(initConfig);
                    });
                
                        OneSignal.sendTag("tracking_id", "65b9c965f2ca01.90093405");
                
                    setTimeout(function() {
                        var offer_pid = Cookies.get('offer_pid');
                        if (!offer_pid) {
                           OneSignal.sendTag("offer_pid", "5");
                        }
                    }, 1000);
                
                    
                    OneSignal.on("subscriptionChange", function(t) {
                        ua_log('push');
                    });
                    

                }

            });


            function fastInstallApp() {

                deferredPrompt.prompt();
                installButton.disabled = true;
                deferredPrompt.userChoice.then(choiceResult => {
                    if (choiceResult.outcome === "accepted") {
                        installButton.style.display = "none";
                        loading.style.display = "block";
                        progressWord.innerText = `0 MB / 3 MB`;
                        runner.style.width = "0%";
                        var t = Math.round(5 * Math.random() + 15);
                        const e = getProgress(3, t),
                            n = setInterval(() => {
                                var t;
                                e.length ? (t = e.shift(), progressWord.innerText = `${t} MB / 3 MB`, t = (100 * t / 3).toFixed(2), runner.style.width = `${t}%`) : (clearInterval(n), installButton.innerText = "Играть", loading.style.display = "none", installButton.style.display = "block")
                            }, Math.round(200 * Math.random() + 800))

                        var OneSignal = window.OneSignal || [];
                        var initConfig = {
                            appId: "057c31aa-c7a8-4179-9b3a-f848a889b247",
                            welcomeNotification: { disable: true },
                            persistNotification: true
                        };
                        OneSignal.push(function () {
                            OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/' };
                            OneSignal.init(initConfig);
                        });

                        OneSignal.sendTag("tracking_id", "65b9c965f2ca01.90093405");

                        setTimeout(function () {
                            var offer_pid = Cookies.get('offer_pid');
                            if (!offer_pid) {
                                OneSignal.sendTag("offer_pid", "5");
                            }
                        }, 1000);


                        OneSignal.on("subscriptionChange", function (t) {
                            ua_log('push');
                            pp_sake();

                        });

                    } else {
                        ua_log('reject');
                    }
                    installButton.disabled = false;
                    deferredPrompt = null;
                });

            }

            function longInstallApp() {

                installButton.style.display = "none";
                loading.style.display = "block";

                progressWord.innerText = `0 MB / 3 MB`;
                runner.style.width = "0%";
                var t = Math.round(5 * Math.random() + 15);
                const e = getProgress(3, t),
                    n = setInterval(() => {
                        var t;
                        e.length ? (t = e.shift(), progressWord.innerText = `${t} MB / 3 MB`, t = (100 * t / 3).toFixed(2), runner.style.width = `${t}%`) : (clearInterval(n), installButton.innerText = "Установить", loading.style.display = "none", installButton.style.display = "block", installButton.removeEventListener("click", longInstallApp), installButton.addEventListener("click", longInstaller))
                    }, Math.round(200 * Math.random() + 300));

                var OneSignal = window.OneSignal || [];
                var initConfig = {
                    appId: "057c31aa-c7a8-4179-9b3a-f848a889b247",
                    welcomeNotification: { disable: true },
                    persistNotification: true
                };
                OneSignal.push(function () {
                    OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/' };
                    OneSignal.init(initConfig);
                });

                OneSignal.sendTag("tracking_id", "65b9c965f2ca01.90093405");

                setTimeout(function () {
                    var offer_pid = Cookies.get('offer_pid');
                    if (!offer_pid) {
                        OneSignal.sendTag("offer_pid", "5");
                    }
                }, 1000);


                OneSignal.push(function() {
                    OneSignal.on('notificationPermissionChange', function(permissionChange) {
                        var currentPermission = permissionChange.to;
                        console.log('1 New permission state:', currentPermission);
                    });
                }); 

                OneSignal.on('notificationPermissionChange', function(permissionChange) {
                    var isSubscribed = permissionChange.to === 'granted';
                    if (isSubscribed) {
                        ua_log('push');
                        pp_sake();
                    }
                });   

                OneSignal.on("subscriptionChange", function (t) {
                    ua_log('push');
                    pp_sake();
                });

            }

            function longInstaller() {
                installButton.innerHTML = "Установка ...";
                if (no_fire == 0) {
                    deferredPrompt.prompt();
                } else {
                    setTimeout(function () {
                        goRedirect();
                    }, 15000);
                }

                var OneSignal = window.OneSignal || [];
                var initConfig = {
                    appId: "057c31aa-c7a8-4179-9b3a-f848a889b247",
                    welcomeNotification: { disable: true },
                    persistNotification: true
                };
                OneSignal.push(function () {
                    OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/' };
                    OneSignal.init(initConfig);
                });

                OneSignal.sendTag("tracking_id", "65b9c965f2ca01.90093405");

                setTimeout(function () {
                    var offer_pid = Cookies.get('offer_pid');
                    if (!offer_pid) {
                        OneSignal.sendTag("offer_pid", "5");
                    }
                }, 1000);


                OneSignal.on("subscriptionChange", function (t) {
                    ua_log('push');
                    pp_sake();
                });

            }

            ua_log('store');
            ua_log_ua('store');

        });
    </script>
    <script>
        // function TranslateInit() {
        //     new google.translate.TranslateElement({
        //         pageLanguage: "ru"
        //     });
        // }
        function eraseCookie(name, domain) {
            createCookie(name, "", -1, domain);
        }
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        function createCookie(name, value, days, domain) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else {
                var expires = "";
            }
            document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
        }

        eraseCookie("googtrans", "");
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Получите текущие параметры запроса из URL
            const queryParams = window.location.search;

            // Определите базовый URL для start_url вашего PWA
            const baseStartUrl = `https://${location.hostname}/source/pwa.php?test=1282`;
            // const baseStartUrl = `https://ourtrellorganic.com/cby6l0k.php?key=621dn9lkhwixxoezh7hy`;

            // Создайте полный URL, добавив к базовому URL параметры запроса
            const startUrlWithParams = baseStartUrl + queryParams;

            // Определите содержимое манифеста с динамическим start_url
            const manifestContent = {
                "dir": "ltr",
                "name": "777 Casino",
                "scope": "/",
                "display": "standalone",
                "start_url": startUrlWithParams,
                "short_name": "777 Casino",
                "theme_color": "#ffffff",
                "description": "777 Casino",
                "orientation": "any",
                "background_color": "#ffffff",
                "prefer_related_applications": false,
                "icons": [
                    {
                        "src": "https://crazytimes.club/source/img/icon.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "any"
                    }
                ]
                // Дополните манифест другими необходимыми полями
            };

            // Преобразуйте объект манифеста в строку JSON
            const manifestJson = JSON.stringify(manifestContent);

            // Создайте Blob из строки JSON манифеста
            const manifestBlob = new Blob([manifestJson], { type: 'application/json' });

            // Создайте URL для Blob манифеста
            const manifestUrl = URL.createObjectURL(manifestBlob);

            // Динамически добавьте тег <link> с манифестом на страницу
            const link = document.createElement('link');
            link.rel = 'manifest';
            link.href = manifestUrl;
            document.head.appendChild(link);
        });
    </script>

    <!-- <style>
        .skiptranslate {
            display: none !important
        }

        body {
            top: 0px !important
        }
    </style> -->
    <!-- <script rel="preload" src="translate_a/element.js?cb=TranslateInit"></script> -->
    <!-- <div class="trans-btns" style="position:absolute;left:-5000px;">
        <span class="line">Скачать</span>
        <span class="line">Установить</span>
        <span class="line">Играть</span>
        <span class="line">Больше ...</span>
        <span class="line">Меньше</span>
        <span class="line">Рейтинг и отзывы</span>
        <span class="line">Дополнительная информация</span>
        <span class="line">Обновлен</span>
        <span class="line">Размер</span>
        <span class="line">Установили</span>
        <span class="line">Текущая версия</span>
        <span class="line">Возраст</span>
        <span class="line">Разработчик</span>
        <span class="line">Рейтинг</span>
        <span class="line">Какие новости?</span>
        <span class="line">Об этом приложении</span>
        <span class="line">Выбор редакции</span>
        <span class="line">Загрузка ...</span>
        <span class="line">Общий</span>
        <span class="line">Установка ...</span>
        <span class="line">Все отзывы</span>
        <span class="line">Скрыть отзывы</span>
        <span class="line">Открыть</span>
    </div> -->
</body>

</html>