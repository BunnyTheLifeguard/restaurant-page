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

	const cont0 = document.createElement('p');
	cont0.style.padding = '5%';
	display.appendChild(cont0);

	const cont1 = document.createElement('p');
	cont1.setAttribute('class', 'text');
	cont1.innerHTML = 'Fancy Hotel, London - WC2R 0EU';
	display.appendChild(cont1);

	const cont3 = document.createElement('p');
	cont3.setAttribute('class', 'text');
	cont3.innerHTML = 'Restaurant Reservations: 0207 123 4567';
	display.appendChild(cont3);

	const cont5 = document.createElement('p');
	cont5.setAttribute('class', 'text');
	cont5.innerHTML = 'Group Reservations: 0207 098 7654';
	display.appendChild(cont5);

	const cont7 = document.createElement('p');
	cont7.setAttribute('class', 'text');
	cont7.innerHTML = 'finerestaurant@rordongamsay.com';
	display.appendChild(cont7);

	const cont8 = document.createElement('p');
	cont8.style.padding = '5%';
	display.appendChild(cont8);
};

export { contact };
