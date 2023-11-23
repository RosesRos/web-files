document.addEventListener('DOMContentLoaded', function () {


  function timer1() {
    var timerElement = document.querySelector(".timer");
    var timer = timerElement.textContent.split(":");
    var hours = parseInt(timer[0], 10);
    var minutes = parseInt(timer[1], 10);
    var seconds = parseInt(timer[2], 10);

    var interval = setInterval(function () {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
          }
        }
      }
      timerElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    }, 1000);

    function pad(value) {
      return value < 10 ? "0" + value : value;
    }
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
