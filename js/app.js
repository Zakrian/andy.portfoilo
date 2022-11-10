window.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body'),
		burger = document.querySelector('.menu-icon'),
		mobMenu = document.querySelector('.mobile-menu'),
		pcMenuLinks = document.querySelectorAll('.menu__link'),
		mobMenuLinks = document.querySelectorAll('.mobile-menu__link');

	function removeActiveClassOnMenuLink(selector) {
		selector.forEach(item => {
			item.classList.remove('_active');
		});
	}

	function removeActiveClassOnMobileMenu() {
		mobMenu.classList.remove('_active');
		burger.classList.remove('_active');
		body.classList.remove('_block');
	}

	function addActiveClassToMenuLink(selector) {
		selector.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const target = e.target;
				if (target && target.classList.contains('_active')) {
					target.classList.remove('_active');
					removeActiveClassOnMobileMenu();
				} else {
					removeActiveClassOnMenuLink(selector);
					target.classList.add('_active');
					removeActiveClassOnMobileMenu();
				}
			});
		});
	}

	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		mobMenu.classList.toggle('_active');
		body.classList.toggle('_block');
	});

	addActiveClassToMenuLink(pcMenuLinks);
	addActiveClassToMenuLink(mobMenuLinks);

});