console.clear();

const input = document.querySelector('#email');
const span = document.querySelector('span');
input.addEventListener('keyup', eventHandler);

const debounceTime = 1000;
let lastKeyup;

function eventHandler() {
  lastKeyup = Number(new Date());  
}

function validateEmail() {
  const diff = +(new Date()) - lastKeyup;
  if (diff >= debounceTime) {
    const validEmail = input.value.includes('@') && input.value.includes('.');
    if (!validEmail) span.textContent = 'Email is not valid';
  }
}

const int = setInterval(validateEmail, 500);
