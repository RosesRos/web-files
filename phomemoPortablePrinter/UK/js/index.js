document.addEventListener('DOMContentLoaded', function () {

  function timer1() {
    // const timerEls = document.querySelectorAll('.stringWithTime');
    // const timerTextEls = [];
    // timerEls.forEach(element => {
    //   timerTextEls.push(element.querySelector('span[class="timer"]'));
    // });

    const hour = document.querySelector(".hour");
    const minu = document.querySelector(".minu");
    const seco = document.querySelector(".seco");

    const hours = 0;
    const minutes = 8;
    const seconds = 50;
    let countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + hours);
    countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
    countdownDate.setSeconds(countdownDate.getSeconds() + seconds);

    const tim = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      hour.textContent = `${hours < 10 ? '0' + hours : hours}`;
      seco.textContent = `${seconds < 10 ? '0' + seconds : seconds}`;
      minu.textContent = `${minutes < 10 ? '0' + minutes : minutes}`;
      if (distance < 0) {
        clearInterval(tim);
        hour.textContent = "02";
        minu.textContent = "46";
        seco.textContent = '50';
      }
    }, 1000);

    // timerTextEls.forEach(element => {
    //   const x = setInterval(function() {
    //     const now = new Date().getTime();
    //     const distance = countdownDate - now;
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //     element.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    //     if (distance < 0) {
    //       clearInterval(x);
    //       timerTextEl.textContent = '00:00:00';
    //     }
    //   }, 1000);
    // });
  };
  timer1();

  function selectImage() {

    // path to  images //
    // path to  images //
    const imagesBlack = [
      "./img/slider-1.png",
      "./img/slider-1-2.png",
      "./img/slider-1-3.png",
    ];
    const imagesGray = [
      "./img/slider-2.png",
      "./img/slider-2-2.png",
      "./img/slider-2-3.png",
    ];
    const imagesGreen = [
      "./img/slider-3.png",
      "./img/slider-3-2.png",
      "./img/slider-3-3.png",
    ];
    const imagesWhite = [
      "./img/slider-4.png",
      "./img/slider-4-2.png",
      "./img/slider-4-3.png",
    ];
    // path to  images //
    // path to  images //


    const slider0 = document.getElementById("slider-0");
    const slider1 = document.getElementById("slider-1");
    const slider2 = document.getElementById("slider-2");

    // clicklabel buttons //
    // clicklabel buttons //
    const blackBtn = document.querySelector('[data-id="1434:9076-d066d904-52e7-4a32-bae8-85bfc1ef2fb5"]');
    const grayBtn = document.querySelector('[data-id="1434:9077-97a9795b-23fd-41a9-9681-5661be18cdaa"]');
    const greenBtn = document.querySelector('[data-id="1434:9079-a9ae3d5c-327a-46e4-9356-f87f06a1124e"]');
    const whiteBtn = document.querySelector('[data-id="1434:9080-4c18e280-d36f-46b9-a304-11417e1d8133"]');
    // clicklabel buttons //
    // clicklabel buttons //

    blackBtn.addEventListener("click", function() {
      slider0.src = imagesBlack[0];
      slider1.src = imagesBlack[1];
      slider2.src = imagesBlack[2];
    });

    grayBtn.addEventListener("click", function() {
      slider0.src = imagesGray[0];
      slider1.src = imagesGray[1];
      slider2.src = imagesGray[2];
    });

    greenBtn.addEventListener("click", function() {
      slider0.src = imagesGreen[0];
      slider1.src = imagesGreen[1];
      slider2.src = imagesGreen[2];
    });

    whiteBtn.addEventListener("click", function() {
      slider0.src = imagesWhite[0];
      slider1.src = imagesWhite[1];
      slider2.src = imagesWhite[2];
    });
  }
  selectImage();



  function accordion() {
    const btn = document.querySelectorAll('.accordion');

    btn.forEach((item, index) => {
      item.addEventListener('click', function () {
        let currentParent = this.closest('.accordion');
        currentParent.classList.toggle('active');

        let currentArrow = document.querySelectorAll('.accordion-arrow');
        for (let ind = 0; ind < currentArrow.length; ind++) {
          if (index == ind) {
            currentArrow[ind].classList.toggle("active");
          }
        }
      });
    });

  };
  accordion();


  function accordionFaqs() {
    const btn = document.querySelectorAll('.accordion-faq');

    btn.forEach((item, index) => {
      item.addEventListener('click', function () {
        let currentParent = this.closest('.accordion-faq');
        currentParent.classList.toggle('active');

        let closeArrow = document.querySelectorAll('.close-arrow');
        for (let ind = 0; ind < closeArrow.length; ind++) {
          if (index == ind) {
            closeArrow[ind].classList.toggle("active");
          }
        }
      });
    });

  };
  accordionFaqs();


  function LoaderBox() {
    var loadMoreContent = document.querySelector('div[data-id="1474:8192"]');
    if (loadMoreContent) {
      loadMoreContent.addEventListener("click", function (e) {
        var loadMoreEl = document.querySelector('div[data-id="1474:8192"]');
        var progressEl = document.querySelector("#progress");
    
        loadMoreEl.style.display = "none";
        progressEl.style.display = "flex";
      });
    }
  }
  LoaderBox();

  let moreText = document.querySelector('div[data-id="I1474:8478;1474:8437;546:2175"]');
  function handleDropdownFooter() {
    let e = document.querySelector('.hidden-text'),
    o = document.querySelector('div[data-id="I1474:8478;1474:8437;546:2175"]');
    e.classList.contains('show') ? (o.textContent = 'Read more') : (o.textContent = 'Read less'),
    e.classList.toggle('show');
  }
  moreText.addEventListener("click", function() {
    handleDropdownFooter();
  });

  function scrollBox() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const scroElement = document.getElementById('scro');
    const scrollThreshold = scroElement.offsetTop; // Порог прокрутки до элемента scro

    window.addEventListener('scroll', function () {
      // Получаем текущую позицию прокрутки
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Проверяем, достигли ли порога
        if (scrollPosition >= scrollThreshold) {
          // Показываем кнопку 2 и скрываем кнопку 1
          button2.style.bottom = "10px"
        } else {
          // Скрываем кнопку 2 и показываем кнопку 1
          button2.style.bottom = "-10rem"
        }
    });
  }
  scrollBox();

  function SliderBox() {
    new Swiper(".mySwiper2", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: false,
      pagination: {
        el: ".c-swiper-pagination",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    });
  }
  SliderBox();

  function SliderBox4() {
    new Swiper(".mySwiper4", {
      spaceBetween: 10,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: false,
      initialSlide: 0,
      pagination: {
        el: ".swiper-pagination-4",
        clickable: true,
      },
    });
  }
  SliderBox4();

  function boxColor() {
    const Colors = document.querySelectorAll('.selector_-color');
    Colors[0].classList.add('active');
    Colors.forEach((colo) => {
      colo.addEventListener("click", function() {
        Colors.forEach((btn) => {
          btn.classList.remove("active");
        });
        colo.classList.toggle("active");
      });
    }); 
  };
  boxColor();

});
