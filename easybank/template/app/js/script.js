const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btn-hamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
  console.log('hamburger clicked')

  if (header.classList.contains('open')) {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  } else {
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})
