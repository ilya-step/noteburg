// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("navbar").classList.remove('_active');
	} else {
		document.getElementById("navbar").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}

// Попап спасибо
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})

// Попап с формой
p1 = $('.popup__overlay1')
$('.popup__toggle1').click(function () {
	p1.addClass('_active')
})
p1.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p1).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p1.removeClass('_active')
})

// Попап с видео 1
p2 = $('.popup__overlay2')
$('.popup__toggle2').click(function () {
	p2.addClass('_active')
})
p2.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p2).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p2.removeClass('_active')
})

// Попап с видео 2
p3 = $('.popup__overlay3')
$('.popup__toggle3').click(function () {
	p3.addClass('_active')
})
p3.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p3).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p3.removeClass('_active')
})

// Попап с видео 3
p4 = $('.popup__overlay4')
$('.popup__toggle4').click(function () {
	p4.addClass('_active')
})
p4.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p4).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p4.removeClass('_active')
})

// Попап с видео 3
p5 = $('.popup__overlay5')
$('.popup__toggle5').click(function () {
	p5.addClass('_active')
})
p5.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p5).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p5.removeClass('_active')
})


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});

// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на эелемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}

// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// слайдер
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 30, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			950: {
				items: 3
			}
		}
	});
});

// Аккордион с вопросами
$('.accordion').accordion({
	heightStyle: 'content',
	active: 0,
	header: '> .accordion-item > .accordion-header'
});

// квиз
var quizCounter = 1;
var qiuzButtons = document.getElementsByClassName("quiz-btn");
var l;
var answers1 = document.querySelector(".answers1");
var answers2 = document.querySelector(".answers2");
var answers3 = document.querySelector(".answers3");
var answers4 = document.querySelector(".answers4");
var questCounter = document.querySelector(".quest-counter");
var answers4 = document.querySelector(".answers4");
var question = document.querySelector(".question");
var progressLine = document.querySelector(".progress-line");
var quizButtons = document.querySelector(".quiz-buttons");
for (l = 0; l < qiuzButtons.length; l++) {
	qiuzButtons[l].addEventListener("click", function () {
		if (this.classList.contains("_prev")) {
			// кнопка назад
			if (quizCounter == 2) {
				quizCounter--;
				answers2.classList.remove("show");
				answers1.classList.add("show");
				questCounter.innerHTML = "Вопрос 1 из 3";
				question.innerHTML = "Выберите категорию:";
				progressLine.style.width = "25%";
				return;
			};
			if (quizCounter == 3) {
				quizCounter--;
				answers4.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 3";
				question.innerHTML = "Что вы хотите?";
				progressLine.style.width = "75%";
				document.querySelector("#quiz-btn-next").style.display = "block";
				document.querySelector(".submitForm").style.display = "none";
				return;
			};
		} else {
			// кнопка вперёд
			if (quizCounter == 1) {
				quizCounter++;
				answers1.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 3";
				question.innerHTML = "Что вы хотите?";
				progressLine.style.width = "75%";
				return;
			};
			if (quizCounter == 2) {
				quizCounter++;
				answers2.classList.remove("show");
				answers4.classList.add("show");
				questCounter.innerHTML = "Вопрос 3 из 3";
				question.innerHTML = "Оставьте Ваш телефон";
				progressLine.style.width = "95%";
				document.querySelector("#quiz-btn-next").style.display = "none";
				document.querySelector(".submitForm").style.display = "block";
				return;
			};
		}
	});
}


// стилизация select
(function ($) {
	$(function () {
		$('select').styler();
	});
})(jQuery);