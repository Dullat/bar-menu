import './scss/reset.scss';
import './scss/magic.scss';

let list = document.querySelector('.primary-nav').querySelectorAll('a');

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
    this.classList.add('active');
  });
}

list.forEach((item) => item.addEventListener('click', activeLink));
