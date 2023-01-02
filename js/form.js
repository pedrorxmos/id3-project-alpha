const form = document.querySelector('#js-form');
const mssg = document.querySelector('#js-message');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', (event) => {
	const data = new FormData(form);
	for (const [name, value] of data) {
		console.log(name, ':', value);
	}
	event.preventDefault();
	form.reset();
	mssg.style.maxHeight = '100%';
});

inputs.forEach((input) => {
	input.addEventListener('focusout', () => {
		if (input.value == null || input.value == '') {
			input.classList.remove('form__input-error');
		} else if (!input.checkValidity()) {
			input.classList.add('form__input-error');
		}
	});
});
