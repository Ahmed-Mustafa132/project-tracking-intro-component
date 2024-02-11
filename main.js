let btn = document.querySelector(`.btn`);
let list = document.querySelector(`ul`).stylesheets[0].rules[0];
console.log(list);
function oClist() {
  console.log(`done`);
  if (btn.getAttribute(`src`) === `/images/icon-hamburger.svg`) {
    btn.setAttribute(`src`, `/images/icon-close.svg`);
    btn.setAttribute(`alt`, `close list`);
    list.style.removePropert(`right`);
  } else {
    btn.setAttribute(`src`, `/images/icon-hamburger.svg`);
    btn.setAttribute(`alt`, `open list`);
    list.style.right = `-500px`;
  }
}
