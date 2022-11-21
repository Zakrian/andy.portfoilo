// Переменные и константы ====================================
//Burger menu
const menuBurger = document.querySelector('.menu-icon'),
	menuBody = document.querySelector('.menu'),
	//Modal window
	introBtn = document.querySelector('.intro__btn'),
	modalBtn = document.querySelector('.modal__btn'),
	modal = document.querySelector('.modal'),
	modalWrap = document.querySelector('modal__wrap'),
	body = document.querySelector('body'),
	overlay = document.querySelector('.overlay');
//DOM Moving
let main = document.querySelector('.main'),
	brends = document.querySelector('.brends');
const removeShowClass = () => {
	modal.classList.remove('_show-modal');
	body.classList.remove('body_fixed');
	overlay.classList.remove('_show-overlay');
};

// Modal window =============================================================
introBtn.addEventListener('click', function (e) {
	// e.preventDefault
	modal.classList.add('_show-modal');
	body.classList.add('body_fixed');
	overlay.classList.add('_show-overlay');
});

modalBtn.addEventListener('click', function () {
	removeShowClass();
});
overlay.addEventListener('click', function () {
	removeShowClass();
});

// Меню бургер ===============================================
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	});
}

// Плавный скролл к якорю ===================================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 80;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Изменение порядков элементов DOM при определенной ширине экрана ================
if (window.innerWidth <= 767.99) {
	main.append(brends);
}

// Swiper slider ============================================================
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	speed: 10000,
	width: 800,
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 50
		},
		991.99: {
			slidesPerView: 7,
			spaceBetween: 100
		}
	},
	autoplay: {
		delay: 800,
	},
});

// Class for services section & his instances======================================
class ServicesCard {
	constructor(link, src, alt, title, descr, parentSelector) {
		this.link = link;
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.descr = descr;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('services__item');

		el.innerHTML = `
			<a href=${this.link} target="_blank" class="services__link btn__pc"></a>
			<div class="services__img">
				<img src=${this.src} alt=${this.alt}>
			</div>
			<div class="services__name">${this.title}</div>
			<div class="services__descr">${this.descr}</div>
		`;

		this.parent.append(el);
	}
}

new ServicesCard(
	'https://zakrian.github.io/coolerwash/',
	'img/works/CoolerWash.png',
	'Porten',
	'Обслуживание сплит систем',
	'Профилактическая (плановая) чистка внутреннего и внешнего блоков сплит системы водой под давлением, а также чистка пластикового корпуса внутреннего блока.',
	'.services__inner'
).render();

new ServicesCard(
	'https://zakrian.github.io/cootels/',
	'img/works/Cootels.png',
	'Cootels',
	'Бронирование комнат и отелей',
	'Комплексная чистка внутреннего и внешнего блоков сплит системы водой под давлением, антибактериальная обработка испарителя и вала(крыльчатки), а также чистка пластикового корпуса внутреннего блока',
	'.services__inner'
).render();

new ServicesCard(
	'https://zakrian.github.io/denisnovik/',
	'img/works/DenisNovik.png',
	'Denis Novik',
	'Сайт портфолио UI/UX дизайнера',
	'Профилактическая (плановая) чистка внутреннего и внешнего блоков сплит системы водой под давлением, а также чистка пластикового корпуса внутреннего блока.',
	'.services__inner'
).render();

new ServicesCard(
	'https://zakrian.github.io/porten/',
	'img/works/Porten.png',
	'Porten',
	'Интернет-магазин мужских часов',
	'Профилактическая (плановая) чистка внутреннего и внешнего блоков сплит системы водой под давлением, а также чистка пластикового корпуса внутреннего блока.',
	'.services__inner'
).render();