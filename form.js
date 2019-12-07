const first = document.querySelector('#first')
const second = document.querySelector('#last')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

const inputs = [first, second, email, pass]

const firstErr = document.querySelector('#first__err')
const secondErr = document.querySelector('#second__err')
const emailErr = document.querySelector('#email__err')
const passErr = document.querySelector('#pass__err')

const errs = [firstErr, secondErr, emailErr, passErr]

for (let i = 0; i < 4; i++) {
  //this cancels custom validity if previously added
  inputs[i].addEventListener('input', () => {
    inputs[i].setCustomValidity('');
  })
}

document.getElementById('submit').addEventListener('click', () => {
  for (let i = 0; i < 4; i++) {
    if (!inputs[i].checkValidity()) {
      inputs[i].classList.add('input-error')
      errs[i].classList.add('err-msg-show')
      //this removes default validity to disable tooltip
      inputs[i].setCustomValidity(' ');

    } else {
      inputs[i].classList.remove('input-error')
      errs[i].classList.remove('err-msg-show')
    }
  }
})