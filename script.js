// script.js
function highlight() {
  const strongElements = document.querySelectorAll('strong');

  for (let i = 0; i < strongElements.length; i++) {
    strongElements[i].classList.add('green-capitals');
  }
}

function return_normal() {
  const strongElements = document.querySelectorAll('strong');

  for (let i = 0; i < strongElements.length; i++) {
    strongElements[i].classList.remove('green-capitals');
  }
}
