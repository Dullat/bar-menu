import './scss/reset.scss';
import './scss/magic.scss';

let list = document.querySelector('.primary-nav').querySelectorAll('a');
let cssRule = ``;

function activeLink(receved) {
  list.forEach((item) => {
    item.classList.remove('active');
    receved.classList.add('active');
  });
}

list.forEach((item, index) =>
  item.addEventListener('click', () => {
    activeLink(item);
    console.log(item.clientWidth);
    console.log(item.parentNode.clientWidth);
    let toMove = (item.parentNode.clientWidth - 64 - item.clientWidth * 5) / 4;
    console.log(toMove);
    if (index === 0) {
      toMove = 0;
    }
    document.querySelector('indicator').style.transform =
      `translateX(${(toMove + item.clientWidth) * index}px)`;

    console.log(document.querySelector('indicator'));
  }),
);
