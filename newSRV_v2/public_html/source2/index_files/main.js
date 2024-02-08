(function () {
  window.addEventListener('popstate', function (e) {
    for (i = 0; i < 10; i++) {
      window.history.pushState('target', '', location.href);
    }
  });
  window.history.pushState('target', '', location.href);
})();

let EBtEl = document.getElementById('expand-button')
let text = document.getElementById('text')


const helpers = {
  decode: value => {
    const decode = document.createElement('textarea')
    decode.innerHTML = value
    return decode.innerText
  }
}

window.addEventListener('load', function () {
  document.querySelectorAll('[helpers-decode]').forEach(value => {
    value.innerText = helpers.decode(value.innerText)
  })
})
