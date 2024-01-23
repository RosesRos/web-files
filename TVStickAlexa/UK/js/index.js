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

  function LoaderBox() {
    var loadMoreContent = document.querySelector('div[data-id="1332:10581"]');
    if (loadMoreContent) {
      loadMoreContent.addEventListener("click", function (e) {
        var loadMoreEl = document.querySelector('div[data-id="1332:10581"]');
        var progressEl = document.querySelector("#progress");
    
        loadMoreEl.style.display = "none";
        progressEl.style.display = "flex";
      });
    }
  }
  LoaderBox();

  function SliderBox3() {
    new Swiper(".mySwiper3", {
      spaceBetween: 30,
      loop: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination-3",
        clickable: true,
      },
    });
  }
  SliderBox3();

});
