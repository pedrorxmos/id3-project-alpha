const header = document.querySelector('header');
const nav = document.querySelector('nav');
const icon = document.querySelector('.nav-icon');
const iconPath = document.querySelector('path');
const items = document.querySelector('.nav-items');
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

let navbarOpened = false;
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
	if (!navbarOpened) {
		navColorScroll();
		navHideOnScroll();
		navScrollOnTop();
	}
});

icon.addEventListener('click', () => {
	if (navbarOpened === false) {
		navbarOpened = true;
		nav.classList.add('navbar-open');
	} else {
		navbarOpened = false;
		nav.classList.remove('navbar-open');
		navColorScroll();
	}
});

//Modify nav colors when scrolling
const navColorScroll = () => {
	if (pageYOffset >= header.clientHeight - 3.2 * rem) {
		nav.classList.add('navbar-light');
	} else {
		nav.classList.remove('navbar-light')
	}
};

//Hide when scrolling
const navHideOnScroll = () => {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		nav.classList.remove('navbar-hide');
	} else {
		nav.classList.add('navbar-hide');
	}
	prevScrollpos = currentScrollPos;
};

const navScrollOnTop = () => {
	if (pageYOffset <= 10) {
		nav.classList.add('navbar-top');
	} else {
		nav.classList.remove('navbar-top');
	}
};

navScrollOnTop();
