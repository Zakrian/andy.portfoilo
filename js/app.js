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

	class PortfolioCards {
		constructor(src, alt, name, link, subSelector, type, parent) {
			this.src = src;
			this.alt = alt;
			this.name = name;
			this.link = link;
			this.subSelector = subSelector;
			this.type = type;
			this.parent = document.querySelector(parent);
		}

		render() {
			const div = document.createElement('div');
			div.classList.add('works__portfolio', `${this.subSelector}`, `${this.type}`);
			div.innerHTML = `
				<div class="portfolio__img">
					<img src=${this.src} alt=${this.alt}></img>
				</div>
				<div class="portfolio__hover">
					<span class="portfolio__title title">${this.name}</span>
					<a href=${this.link} target="_blank" class="portfolio__btn btn">Посмотреть</a>
				</div>
			`;

			this.parent.append(div);
		}
	}

	new PortfolioCards(
		"img/works/Porten.png",
		"Porten",
		"Porten",
		"https://zakrian.github.io/porten/",
		"portfolio-1",
		"landing",
		".works__wrapper"
	).render();

	new PortfolioCards(
		"img/works/Cootels.png",
		"Cootels",
		"Cootels",
		"https://zakrian.github.io/cootels/",
		"portfolio-2",
		"shop",
		".works__wrapper"
	).render();

	new PortfolioCards(
		"img/works/DenisNovik.png",
		"DenisNovik",
		"DenisNovik",
		"https://zakrian.github.io/denisnovik/",
		"portfolio-3",
		"landing",
		".works__wrapper"
	).render();

	new PortfolioCards(
		"img/works/CoolerWash.png",
		"CoolerWash",
		"CoolerWash",
		"https://zakrian.github.io/coolerwash/",
		"portfolio-4",
		"landing",
		".works__wrapper"
	).render();

	const sortBtns = document.querySelectorAll('.sort-works__var'),
		worksCards = document.querySelectorAll('.works__portfolio');

	function filter(category, items) {
		items.forEach(item => {
			const isItemFiltered = !item.classList.contains(category),
				isShowAll = category.toLowerCase() === 'all';

			if (isItemFiltered && !isShowAll) {
				item.classList.add('_anim-card');
			} else {
				item.classList.remove('_hide-card');
				item.classList.remove('_anim-card');
			}
		});
	}

	sortBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const currentCategory = btn.dataset.filter;
			filter(currentCategory, worksCards);
		});
	});

	worksCards.forEach(card => {
		card.ontransitionend = function() {
			if (card.classList.contains('_anim-card')) {
				card.classList.add('_hide-card');
			}
		};
	});

	addActiveClassToMenuLink(pcMenuLinks);
	addActiveClassToMenuLink(mobMenuLinks);
	scrollToAnchor();
	showModal();
	hideModal();

});