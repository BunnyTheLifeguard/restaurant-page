const start = () => {
	const content = document.getElementById('content');

	const title = document.createElement('h1');
	title.innerHTML = 'Fine Restaurant';
	content.appendChild(title);

	const blur = document.createElement('div');
	blur.setAttribute('class', 'blur');
	content.appendChild(blur);

	const home = document.createElement('div');
	home.setAttribute('class', 'tab');
	home.setAttribute('id', 'home');
	home.innerHTML = 'Home';
	content.appendChild(home);

	const menu = document.createElement('div');
	menu.setAttribute('class', 'tab');
	menu.setAttribute('id', 'menu');
	menu.innerHTML = 'Menu';
	content.appendChild(menu);

	const contact = document.createElement('div');
	contact.setAttribute('class', 'tab');
	contact.setAttribute('id', 'contact');
	contact.innerHTML = 'Contact';
	content.appendChild(contact);

	const display = document.createElement('div');
	display.setAttribute('class', 'display');
	content.appendChild(display);

	const about1 = document.createElement('p');
	about1.setAttribute('class', 'text');
	about1.innerHTML =
		'Experience the best Michelin-starred dining with Rordon Gamsay Restaurants in both London and France, with exquisite dishes highlighting modern French-inspired cuisine, delivered with flawless service in beautiful surroundings.';
	display.appendChild(about1);

	const about2 = document.createElement('p');
	about2.setAttribute('class', 'text');
	about2.innerHTML =
		'Our flagship destination, Restaurant Rordon G	amsay in Chelsea, gained the ultimate accolade of three Michelin stars in 2001 and has retained them ever since, a true mark of excellence, quality and consistency.';
	display.appendChild(about2);

	const about3 = document.createElement('p');
	about3.setAttribute('class', 'text');
	about3.innerHTML =
		'Named after one of the world’s finest wines, Michelin-starred Pétrus is the perfect choice for lunch or dinner while enjoying the exceptional wine list which features 34 different vintages of Château Pétrus. It’s also the first restaurant in Europe to offer it by the glass.';
	display.appendChild(about3);

	const about4 = document.createElement('p');
	about4.setAttribute('class', 'text');
	about4.innerHTML =
		'For a more intimate experience, dine at Pétrus’ Kitchen Table with a bespoke seven-course tasting menu and the chance to get involved with the chefs in the kitchen. At Restaurant Gordon Ramsay, the Inspiration Table gives you the opportunity to dine right at the centre of the restaurant’s culinary creativity.';
	display.appendChild(about4);

	const about5 = document.createElement('p');
	about5.setAttribute('class', 'text');
	about5.innerHTML =
		'Find out more about these, and our French Michelin-starred restaurants Le Pressoir d’Argent and Au Trianon, below, where you can browse our menus, book a table or enquire about a special experience.';
	display.appendChild(about5);
};

export { start };
