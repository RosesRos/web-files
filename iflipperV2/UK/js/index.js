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
        element.innerHTML = `<span class="timer-span">00</span> <span class="timer-span">${hours < 10 ? '0' + hours : hours}</span>  <span class="timer-span"> ${minutes < 10 ? '0' + minutes : minutes}</span>  <span class="timer-span">${seconds < 10 ? '0' + seconds : seconds}</span> <span class="timer-span-text">DAY</span> <span class="timer-span-text">HOUR</span> <span class="timer-span-text">MINUTE</span> <span class="timer-span-text">SECOND</span>`;
        if (distance < 0) {
          clearInterval(x);
          timerTextEl.textContent = '00:00:00';
        }
      }, 1000);
    });
  };
  timer1();

  function accordion() {
    const btn = document.querySelectorAll('.accordion__header');

    btn.forEach(item => {
      item.addEventListener('click', function () {
        let currentParent = this.closest('.accordion__header');
        currentParent.classList.toggle('active');
      });
    });

  };
  accordion();



});
