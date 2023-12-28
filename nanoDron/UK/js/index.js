document.addEventListener('DOMContentLoaded', function () {


  function timer1() {
    const timerEls = document.querySelectorAll('.stringWithTime');
    const timerTextEls = [];
    timerEls.forEach(element => {
      timerTextEls.push(element.querySelector('span[class="timer"]'));
    });
    const hours = 0;
    const minutes = 46;
    const seconds = 50;
    let countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + hours);
    countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
    countdownDate.setSeconds(countdownDate.getSeconds() + seconds);
    timerTextEls.forEach(element => {
      const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        element.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        if (distance < 0) {
          clearInterval(x);
          timerTextEl.textContent = '00:00:00';
        }
      }, 1000);
    });
  };
  timer1();

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
    var loadMoreContent = document.querySelector('div[data-id="11:3648"]');
    if (loadMoreContent) {
      loadMoreContent.addEventListener("click", function (e) {
        var loadMoreEl = document.querySelector('div[data-id="11:3648"]');
        var progressEl = document.querySelector("#progress");
    
        loadMoreEl.style.display = "none";
        progressEl.style.display = "flex";
      });
    }
  }
  LoaderBox();

  let moreText = document.querySelector('div[data-id="I11:3725;11:3743;11:3741"');
  function handleDropdownFooter() {
    let e = document.querySelector('.hidden-text'),
    o = document.querySelector('div[data-id="I11:3725;11:3743;11:3741"]');
    e.classList.contains('show') ? (o.textContent = 'Read more') : (o.textContent = 'Read less'),
    e.classList.toggle('show');
  }
  moreText.addEventListener("click", function() {
    handleDropdownFooter();
  });

  function scrollBox() {
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
          button2.style.bottom = "-4rem"
        }
    });
  }
  scrollBox();

  
  function SliderBox() {
    var swiper3 = new Swiper(".mySwiper3", {
      loop: true,
      // spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clicklabel: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: swiper3,
      },
    });
  }
  // SliderBox();

  function selectImage() {
    const images = [
      "./img/cero.png",
      "./img/uno.png",
      "./img/dos.png",
      "./img/tres.png",
    ];
    const img = document.querySelector('img[data-id="10:2072"]');
    const cero = document.querySelector('div[data-id="10:2409"]');
    const uno = document.querySelector('div[data-id="10:2462"]');
    const dos = document.querySelector('div[data-id="10:2412"]');
    const tres = document.querySelector('div[data-id="10:2415"]');

    cero.addEventListener("click", function() {
      img.src = images[0];
    });
    uno.addEventListener("click", function() {
      img.src = images[1];
    });
    dos.addEventListener("click", function() {
      img.src = images[2];
    });
    tres.addEventListener("click", function() {
      img.src = images[3];
    });
  }
  selectImage();
});
