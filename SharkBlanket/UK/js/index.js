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
    const minutes = 10;
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
    const imagesGray = [
      "./img/slider-1.png",
      "./img/slider-1-2.png",
      "./img/slider-1-3.png",
    ];
    const imagesPink = [
      "./img/slider-3.png",
      "./img/slider-3-2.png",
      "./img/slider-3-3.png",
    ];
    const imagesGreen = [
      "./img/slider-4.png",
      "./img/slider-4-2.png",
      "./img/slider-1-3.png",
    ];
    // path to  images //
    // path to  images //


    const slider0 = document.getElementById("slider-0");
    const slider1 = document.getElementById("slider-1");
    const slider2 = document.getElementById("slider-2");

    const mySwiperImg = document.querySelectorAll(".c-swiper-mySwiper-img");

    // clicklabel buttons //
    // clicklabel buttons //
    const grayBtn = document.querySelector('[data-id="1168:3135"]');
    const pinkBtn = document.querySelector('[data-id="1168:3137"]');
    const greenBtn = document.querySelector('[data-id="1168:3139"]');
    // clicklabel buttons //
    // clicklabel buttons //

    grayBtn.addEventListener("click", function() {
      slider0.src = imagesGray[0];
      slider1.src = imagesGray[1];
      slider2.src = imagesGray[2];
      document.getElementById("slider-2-2").style.display = "block";

      // slider thumbsSlider //
      // slider thumbsSlider //
      mySwiperImg[0].src = imagesGray[0];
      mySwiperImg[1].src = imagesGray[1];
      mySwiperImg[2].src = imagesGray[2];
      document.getElementById("thums-2-2").style.display = "block";
      // slider thumbsSlider //
      // slider thumbsSlider //
    });

    pinkBtn.addEventListener("click", function() {
      slider0.src = imagesPink[0];
      slider1.src = imagesPink[1];
      slider2.src = imagesPink[2];
      document.getElementById("slider-2-2").style.display = "block";

      // slider thumbsSlider //
      // slider thumbsSlider //
      mySwiperImg[0].src = imagesPink[0];
      mySwiperImg[1].src = imagesPink[1];
      mySwiperImg[2].src = imagesPink[2];
      document.getElementById("thums-2-2").style.display = "block";
      // slider thumbsSlider //
      // slider thumbsSlider //
    });

    greenBtn.addEventListener("click", function() {
      slider0.src = imagesGreen[0];
      slider1.src = imagesGreen[1];
      document.getElementById("slider-2-2").style.display = "none";

      // slider thumbsSlider //
      // slider thumbsSlider //
      mySwiperImg[0].src = imagesGreen[0];
      mySwiperImg[1].src = imagesGreen[1];
      document.getElementById("thums-2-2").style.display = "none";
      // slider thumbsSlider //
      // slider thumbsSlider //
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
    var loadMoreContent = document.querySelector('div[data-id="1172:8909"]');
    if (loadMoreContent) {
      loadMoreContent.addEventListener("click", function (e) {
        var loadMoreEl = document.querySelector('div[data-id="1172:8909"]');
        var progressEl = document.querySelector("#progress");
    
        loadMoreEl.style.display = "none";
        progressEl.style.display = "flex";
      });
    }
  }
  LoaderBox();

  let moreText = document.querySelector('div[data-id="I1172:8977;1172:8923;546:2175"]');
  function handleDropdownFooter() {
    let e = document.querySelector('.hidden-text'),
    o = document.querySelector('div[data-id="I1172:8977;1172:8923;546:2175"]');
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
    let swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".mySwiper2", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 10,
      // centeredSlides: true,
      thumbs: {
        swiper: swiper,
      },
    });
  }
  SliderBox();

  function SliderBox3() {
    new Swiper(".mySwiper3", {
      spaceBetween: 30,
      loop: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination-3",
        clickable: true,
      },
    });
  }
  SliderBox3();

  function boxPage() {
    const items = document.querySelectorAll(".c-size-box");
    items[0].classList.add("active");
    items.forEach((item) => {
      item.addEventListener("click", function() {
        items.forEach((ite) => {
          ite.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    }); 
  }
  boxPage();

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

  function showSize() {
    const btnSize = document.querySelector('[data-id="I1168:3575;1172:3800"]');
    btnSize.addEventListener("click", function() {
      let currentBtn = document.querySelector(".showSize");
      currentBtn.classList.contains('active') ? (btnSize.textContent = 'View size guide') : (btnSize.textContent = 'Close size guide');
      currentBtn.classList.contains('active') ? (btnSize.style.color = '#5B708E') : (btnSize.style.color = '#5b708e99');

      currentBtn.classList.toggle("active");
    });
  };
  showSize();

});
