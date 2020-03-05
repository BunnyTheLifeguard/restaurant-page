const menu = () => {
	document.querySelector('.display').remove();
	document.querySelector('#home').style.backgroundColor =
		'rgba(255, 255, 255, 0.1)';
	document.querySelector('#menu').style.backgroundColor =
		'rgba(255, 255, 255, 0.3)';
	document.querySelector('#contact').style.backgroundColor =
		'rgba(255, 255, 255, 0.1)';

	const display = document.createElement('div');
	display.setAttribute('class', 'display');
	content.appendChild(display);
};

export { menu };
