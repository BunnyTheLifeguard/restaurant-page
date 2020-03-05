import { start } from './init';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

start();

const tabs = (() => {
	const tabHome = document.querySelector('#home');
	tabHome.addEventListener('click', home);

	const tabMenu = document.querySelector('#menu');
	tabMenu.addEventListener('click', menu);

	const tabContact = document.querySelector('#contact');
	tabContact.addEventListener('click', contact);
})();
