const form = document.querySelector('#js-form');
const mssg = document.querySelector('#js-message');

form.addEventListener('submit', (event) => {
	const data = new FormData(form);
	for (const [name, value] of data) {
		console.log(name, ':', value);
	}
	event.preventDefault();
	form.reset();
	mssg.style.maxHeight = '100%';
});
