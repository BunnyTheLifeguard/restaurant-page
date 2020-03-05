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

	const starters = document.createElement('h3');
	starters.innerHTML = 'Starters';
	display.appendChild(starters);

	const menu1 = document.createElement('p');
	menu1.setAttribute('class', 'text');
	menu1.innerHTML = 'Lobster bisque, charlotte potatoes, fresh herbs | £17';
	display.appendChild(menu1);

	const menu2 = document.createElement('p');
	menu2.setAttribute('class', 'text');
	menu2.innerHTML =
		'Cornish crab salad, brown crab mayonnaise, toasted muffin | £20';
	display.appendChild(menu2);

	const mains = document.createElement('h3');
	mains.innerHTML = 'Mains';
	display.appendChild(mains);

	const menu3 = document.createElement('p');
	menu3.setAttribute('class', 'text');
	menu3.innerHTML =
		'Grilled lobster thermidor or garlic butter  | half or whole £35/£70';
	display.appendChild(menu3);

	const menu4 = document.createElement('p');
	menu4.setAttribute('class', 'text');
	menu4.innerHTML =
		'Beef Wellington, red wine jus (for two, please allow 45 minutes) | £94';
	display.appendChild(menu4);

	const sides = document.createElement('h3');
	sides.innerHTML = 'Sides';
	display.appendChild(sides);

	const menu5 = document.createElement('p');
	menu5.setAttribute('class', 'text');
	menu5.innerHTML =
		'Charred tender stem broccoli, artichoke, chilli and coconut sauce | £17';
	display.appendChild(menu5);

	const menu6 = document.createElement('p');
	menu6.setAttribute('class', 'text');
	menu6.innerHTML =
		'Wild mushroom vol-au-vent, slow-cooked egg, smoked cheddar velouté | £18';
	display.appendChild(menu6);

	const desserts = document.createElement('h3');
	desserts.innerHTML = 'Desserts';
	display.appendChild(desserts);

	const menu7 = document.createElement('p');
	menu7.setAttribute('class', 'text');
	menu7.innerHTML =
		'Warm chocolate tart, mascarpone and lavender ice cream | £11';
	display.appendChild(menu7);

	const menu8 = document.createElement('p');
	menu8.setAttribute('class', 'text');
	menu8.innerHTML = 'Apple Tarte Tatin, vanilla ice cream | £22 (for 2)';
	display.appendChild(menu8);
};

export { menu };
