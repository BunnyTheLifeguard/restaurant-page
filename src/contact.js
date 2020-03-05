const contact = () => {
	document.querySelector('.display').remove();
	document.querySelector('#home').style.backgroundColor =
		'rgba(255, 255, 255, 0.1)';
	document.querySelector('#menu').style.backgroundColor =
		'rgba(255, 255, 255, 0.1)';
	document.querySelector('#contact').style.backgroundColor =
		'rgba(255, 255, 255, 0.3)';

	const display = document.createElement('div');
	display.setAttribute('class', 'display');
	content.appendChild(display);
};

export { contact };
