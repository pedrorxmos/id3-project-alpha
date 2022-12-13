const header = document.querySelector('header');
const nav = document.querySelector('nav');
const icon =  document.querySelector('.nav-icon');
const iconPath = document.querySelector('path');
const items = document.querySelector('.nav-items');
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
let navbarOpened = false;
let prevScrollpos = window.pageYOffset;

//Color variables
const black = '#1a1a1a';
const white = '#fcfcfc';

window.addEventListener('scroll', () => {
  if(!navbarOpened){
    navColorScroll();
    navHideOnScroll();
  }

  navScrollOnTop();
});

icon.addEventListener('click', () => {
  if(items.style.display === 'none') {
    navbarOpened = true;
    items.style.display = 'flex';
    iconPath.style.stroke = white;
    nav.style.backgroundColor = black;
    items.style.color = white;
  } 
  else {
    navbarOpened = false;
    items.style.display = 'none';
    navColorScroll();
  } 
})

//Modify nav colors when scrolling
const navColorScroll = () => {
  if (pageYOffset >= header.clientHeight - 3.5*rem){
    iconPath.style.stroke = black;
    nav.style.backgroundColor = white;
    items.style.color = black;
  }
  else{
    iconPath.style.stroke = white;
    nav.style.backgroundColor = black;
    //items.forEach(x => x.style.color = white);
    items.style.color = white;
  }
}

//Hide when scrolling
const navHideOnScroll = () => {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.style.top = "-1px";
    } else {
      nav.style.top = "calc(-4rem - 1px)";
    }
    prevScrollpos = currentScrollPos;
}

const navScrollOnTop = () => {
  if(pageYOffset <= 10){
    nav.style.paddingTop = '1.5rem';
    nav.style.top = "-1px";
  }
  else{
    nav.style.paddingTop = '1rem';
  }
}

navScrollOnTop();