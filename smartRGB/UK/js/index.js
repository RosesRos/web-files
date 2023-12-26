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
        let closeArrow = document.querySelectorAll(".close-mobsVO");
        for (let ind = 0; ind < currentArrow.length; ind++) {
          if (index == ind) {
            currentArrow[ind].classList.toggle("active");
          }
        }
        for (let inde = 0; inde < closeArrow.length; inde++) {
          if (index == inde) {
            closeArrow[inde].classList.toggle("active");
          }
        }
      });
    });

  };
  accordion();

  function LoaderBox() {
    var loadMoreContent = document.querySelector('div[data-id="3158:436"]');
    if (loadMoreContent) {
      loadMoreContent.addEventListener("click", function (e) {
        var loadMoreEl = document.querySelector('div[data-id="3158:436"]');
        var progressEl = document.querySelector("#progress");
    
        loadMoreEl.style.display = "none";
        progressEl.style.display = "flex";
      });
    }
  }
  LoaderBox();

  let moreText = document.querySelector('div[data-id="I3210:465;3107:9437;3107:9431"]');
  function handleDropdownFooter() {
    let e = document.querySelector('.hidden-text'),
    o = document.querySelector('div[data-id="I3210:465;3107:9437;3107:9431"]');
    e.classList.contains('show') ? (o.textContent = 'Read more') : (o.textContent = 'Read less'),
    e.classList.toggle('show');
  }
  moreText.addEventListener("click", function() {
    handleDropdownFooter();
  });

});
