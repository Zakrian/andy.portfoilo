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
		closeModal = document.querySelector('.modal__close'),
		worksSection = document.querySelector('.works'),
		abputPosition = document.querySelector('.about').offsetTop,
		worksPosition = worksSection.offsetTop,
		contactsPosition = document.querySelector('.contacts').offsetTop,
		filterBtnsWrapper = worksSection.querySelector('.works__sort'),
		filterBtns = worksSection.querySelectorAll('.sort-works__var'),
		workksWrapper = worksSection.querySelector('.works__wrapper'),
		worksItems = document.querySelectorAll('.works__portfolio'),
		form = document.querySelector('form');

	// let timeoutModal = setTimeout(showModal, 25000);

	// Burger-menu
	function clickOnBurger() {
		burger.classList.toggle('_active');
		mobMenu.classList.toggle('_active');
		toogleBlockClassToBody();
	}

	// Add/Remove active-class on PC/Mobile menu-link
	function addActiveClassToPcMenuLink(selector) {
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

	function addActiveClassToMobileMenuLink(selector) {
		selector.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const target = e.target;
				if (target && target.classList.contains('_active')) {
					target.classList.remove('_active');
					removeActiveClassOnMobileMenu();
					toogleBlockClassToBody();

				} else {
					removeActiveClassOnMenuLink(selector);
					target.classList.add('_active');
					removeActiveClassOnMobileMenu();
					toogleBlockClassToBody();
				}
			});
		});
	}

	function removeActiveClassOnMenuLink(selector) {
		selector.forEach(item => {
			item.classList.remove('_active');
		});
	}

	function removeActiveClassOnMobileMenu() {
		mobMenu.classList.remove('_active');
		burger.classList.remove('_active');
		// toogleBlockClassToBody();
	}

	function removeActiveClassOnMenuLinks(arr) {
		arr.forEach(item => {
			item.classList.remove('_active');
		});
	}

	// Toggle block-class on body
	function toogleBlockClassToBody() {
		body.classList.toggle('_block');
	}

	// Auto-scroll to anchors
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

	// Modal window
	// function showModal() {
	// 	modal.classList.add('_modal-active');
	// 	overlay.classList.add('overlay_show');
	// 	toogleBlockClassToBody();
	// }

	function hideModal() {
		modal.classList.remove('_modal-active');
		overlay.classList.remove('overlay_show');
		toogleBlockClassToBody();
	}

	// Active class to menu link on scroll
	function addActiveClassOnMenuLinkInScroll() {
		pcMenuLinks.forEach(item => {
			item.classList.remove('_active');
		});

		if (window.pageYOffset >= (abputPosition - 40)) {
			pcMenuLinks[0].classList.add('_active');
		} else {
			pcMenuLinks[0].classList.remove('_active');
		}

		if (window.pageYOffset >= (worksPosition - 40)) {
			pcMenuLinks[0].classList.remove('_active');
			pcMenuLinks[1].classList.add('_active');
		} else {
			pcMenuLinks[1].classList.remove('_active');
		}

		if (window.pageYOffset >= (contactsPosition - 40)) {
			pcMenuLinks[1].classList.remove('_active');
			pcMenuLinks[2].classList.add('_active');
		} else {
			pcMenuLinks[2].classList.remove('_active');
		}
	}

	// Portfolio filter
	function toggleActiveClassOnSortBtn(arr, element) {
		arr.forEach(btn => {
			btn.classList.remove('_active-sort-btn');
		});
		// console.log(element);
		element.classList.add('_active-sort-btn');
	}

	function portfolioFilter(arr, selector, target) {
		if (target.classList.contains(selector)) {
			toggleActiveClassOnSortBtn(arr, target);
		} else if (target.parentNode.classList.contains(selector)) {
			toggleActiveClassOnSortBtn(arr, target.parentNode);
		}
	}

	// Send form
	form.addEventListener('submit', formSend);
	
	async function formSend(e) {
		// e.preventDeffault();

		let error = formValidate(form);
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		console.log(formReq);
		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	// Portfolio cards Class
	// class PortfolioCards {
	// 	constructor(src, alt, name, link, subSelector, type, parent) {
	// 		this.src = src;
	// 		this.alt = alt;
	// 		this.name = name;
	// 		this.link = link;
	// 		this.subSelector = subSelector;
	// 		this.type = type;
	// 		this.parent = document.querySelector(parent);
	// 	}

	// 	render() {
	// 		const div = document.createElement('div');
	// 		div.classList.add('works__portfolio', `${this.subSelector}`, `${this.type}`);
	// 		div.dataset.category = `${this.type}`;
	// 		div.innerHTML = `
	// 			<div class="portfolio__img">
	// 				<img src=${this.src} alt=${this.alt}></img>
	// 			</div>
	// 			<div class="portfolio__hover">
	// 				<span class="portfolio__title title">${this.name}</span>
	// 				<a href=${this.link} target="_blank" class="portfolio__btn btn">Посмотреть</a>
	// 			</div>
	// 		`;

	// 		this.parent.append(div);
	// 	}
	// }

	// // Portfolio cards copy
	// new PortfolioCards(
	// 	"img/works/Porten.png",
	// 	"Porten",
	// 	"Porten",
	// 	"https://zakrian.github.io/porten/",
	// 	"portfolio-1",
	// 	"onepage",
	// 	".works__wrapper"
	// ).render();

	// new PortfolioCards(
	// 	"img/works/Cootels.png",
	// 	"Cootels",
	// 	"Cootels",
	// 	"https://zakrian.github.io/cootels/",
	// 	"portfolio-2",
	// 	"manypages",
	// 	".works__wrapper"
	// ).render();

	// new PortfolioCards(
	// 	"img/works/DenisNovik.png",
	// 	"DenisNovik",
	// 	"DenisNovik",
	// 	"https://zakrian.github.io/denisnovik/",
	// 	"portfolio-3",
	// 	"onepage",
	// 	".works__wrapper"
	// ).render();

	// new PortfolioCards(
	// 	"img/works/CoolerWash.png",
	// 	"CoolerWash",
	// 	"CoolerWash",
	// 	"https://zakrian.github.io/coolerwash/",
	// 	"portfolio-4",
	// 	"onepage",
	// 	".works__wrapper"
	// ).render();

	// Listener CLICK on Document
	document.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;

		//Burger menu
		if (target && target === burger) {
			clickOnBurger();
		}

		//Modal window
		if (target && target === modalBtn) {
			showModal();
			clearTimeout(timeoutModal);
		} else if (target && target === closeModal || target === overlay) {
			hideModal();
		}
	});

	// Listener CLICK on filter btns wrapper
	filterBtnsWrapper.addEventListener('click', (e) => {
		const target = e.target;
		if (worksSection === null) return;

		let filterClass;

		portfolioFilter(filterBtns, 'sort-works__var', target);
		if (!target.classList.contains('sort-works__var') && target.classList.contains('_active-sort-btn')) return;

		if (target.classList.contains('sort-works__var')) {
			filterClass = target.dataset.filter;
		} else if (target.parentNode.classList.contains('sort-works__var')) {
			filterClass = target.parentNode.dataset.filter;
		}

		worksItems.forEach(item => {
			if (!item.classList.contains(filterClass) && filterClass != 'all') {
				item.classList.add('_hide-card');
			} else {
				item.classList.remove('_hide-card');
			}
		});
	});

	// Listener SCROLL on Window
	window.addEventListener('scroll', () => {
		addActiveClassOnMenuLinkInScroll();
	});

	addActiveClassToPcMenuLink(pcMenuLinks);
	addActiveClassToMobileMenuLink(mobMenuLinks);
	scrollToAnchor();

});