const header = document.querySelector('header');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const icon = document.querySelector('.nav-icon');
const items = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

let navbarOpened = false;
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
	if (!navbarOpened) {
		navColorScroll();
		navHideOnScroll();
		navScrollOnTop();
	}
	actualSection();
});

icon.addEventListener('click', () => {
	if (!navbarOpened) {
		navbarOpened = true;
		nav.classList.add('navbar-open');
		body.style.overflow = 'hidden';
	} else {
		navbarOpened = false;
		nav.classList.remove('navbar-open');
		body.style.overflow = 'overlay';
		navColorScroll();
	}
});

items.forEach((item) => {
	item.addEventListener('click', () => {
		if (navbarOpened) {
			navbarOpened = false;
			nav.classList.remove('navbar-open');
			body.style.overflow = 'overlay';
			navColorScroll();
		}
	});
});

//Modify nav colors when scrolling
const navColorScroll = () => {
	if (pageYOffset >= header.clientHeight - 3.2 * rem) {
		nav.classList.add('navbar-light');
	} else {
		nav.classList.remove('navbar-light');
	}
};

//Hide when scrolling
const navHideOnScroll = () => {
	let currentScrollPos = window.pageYOffset;
	if (pageYOffset > 10) {
		if (prevScrollpos > currentScrollPos) {
			nav.classList.remove('navbar-hide');
		} else {
			nav.classList.add('navbar-hide');
		}
		prevScrollpos = currentScrollPos;
	}
};

//Modify nav padding and shadow when its on top of the page
const navScrollOnTop = () => {
	if (pageYOffset <= 10) {
		nav.classList.add('navbar-top');
	} else {
		nav.classList.remove('navbar-top');
	}
};

navScrollOnTop();

//Gets the section shown and change nav-item to active
const actualSection = () => {
	sections.forEach((section) => {
		if (pageYOffset >= section.offsetTop - section.clientHeight / 3)
			items.forEach((item) => {
				if (item.getAttribute('href') === '#' + section.getAttribute('id')) item.classList.add('nav-item-active');
				else item.classList.remove('nav-item-active');
			});
	});
};

actualSection();
