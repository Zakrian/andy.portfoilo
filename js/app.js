window.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body'),
		burger = document.querySelector('.menu-icon'),
		mobMenu = document.querySelector('.mobile-menu'),
		pcMenuLinks = document.querySelectorAll('.menu__link'),
		mobMenuLinks = document.querySelectorAll('.mobile-menu__link'),
		anchors = document.querySelectorAll('.link'),
		modalBtn = document.querySelector('.intro__btn'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal'),
		closeModal = document.querySelector('.modal__close');

	function removeActiveClassOnMenuLink(selector) {
		selector.forEach(item => {
			item.classList.remove('_active');
		});
	}

	function removeActiveClassOnMobileMenu() {
		mobMenu.classList.remove('_active');
		burger.classList.remove('_active');
		toogleBlockClassToBody();
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

	function removeActiveClassOnMenuLinks(arr) {
		arr.forEach(item => {
			item.classList.remove('_active');
		});
	}

	function toogleBlockClassToBody() {
		if (body.classList.contains('_block')) {
			body.classList.remove('_block');
		} else {
			body.classList.add('_block');
		}
	}

	function scrollToAnchor() {
		anchors.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const blockId = item.getAttribute('href');

				document.querySelector(blockId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				if (e.target.classList.contains('header__logo') || e.target.classList.contains('header__logo_img') || e.target.classList.contains('header__logo_name')) {
					removeActiveClassOnMenuLinks(pcMenuLinks);
					removeActiveClassOnMenuLinks(mobMenuLinks);
				}
			});
		});
	}

	function showModal() {
		modalBtn.addEventListener('click', (e) => {
			e.preventDefault();
			modal.classList.add('_modal-active');
			overlay.classList.add('overlay_show');
			toogleBlockClassToBody();
		});
	}

	function hideModal() {
		window.addEventListener('click', (e) => {
			const target = e.target;
			if (target && target == closeModal || target.classList.contains('overlay')) {
				modal.classList.remove('_modal-active');
				overlay.classList.remove('overlay_show');
			}
		});
	}

	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		mobMenu.classList.toggle('_active');
		body.classList.toggle('_block');
	});

	addActiveClassToMenuLink(pcMenuLinks);
	addActiveClassToMenuLink(mobMenuLinks);
	scrollToAnchor();
	showModal();
	hideModal();

});