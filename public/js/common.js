"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (_this.btnToggleMenuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		var _this = this;

		if (_this.menuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});

			_this.menuMobile.classList.remove("active");

			_this.body.classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		if (_this.menuMobileLink) {
			_this.toggleMenu();

			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this.closeMenu();
				}
			});
		}
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: min
				});
			});
			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: max
				});
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	}
};

function eventHandler() {
	var _defaultSl, _objectSpread2, _objectSpread3, _objectSpread4;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.customRange(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/checkoit.jpg);"></div>')
	// /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = (_defaultSl = {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0
	}, _defineProperty(_defaultSl, "watchOverflow", true), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "lazy", {
		loadPrevNext: true,
		loadPrevNextAmount: 7 // loadOnTransitionStart: true

	}), _defaultSl);
	var swiper4 = new Swiper('.headerBlock__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		navigation: {
			nextEl: '.headerBlock .swiper-button-next',
			prevEl: '.headerBlock .swiper-button-prev'
		},
		pagination: {
			el: '.headerBlock .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	})); // $('.sCatalog__slider--js').each(function () { 

	var swiper5 = new Swiper('.sCatalog__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 30,
		navigation: {
			nextEl: '.sCatalog .swiper-button-next',
			prevEl: '.sCatalog .swiper-button-prev'
		},
		breakpoints: {
			// when window width is >= 320px
			// when window width is >= 480px
			576: {
				slidesPerView: 2
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	}));
	var swiper8 = new Swiper('.sCatalog__sliderCheckut--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 30,
		slidesPerView: 2,
		navigation: {
			nextEl: '.sCatalog .swiper-button-next',
			prevEl: '.sCatalog .swiper-button-prev'
		},
		breakpoints: {
			// when window width is >= 320px
			// when window width is >= 480px
			576: {
				slidesPerView: 3
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 5
			}
		}
	})); // })

	var swiper6 = new Swiper('.sThematicSelections__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread2 = {
		spaceBetween: 30,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true
	}, _defineProperty(_objectSpread2, "watchOverflow", true), _defineProperty(_objectSpread2, "loop", false), _defineProperty(_objectSpread2, "scrollbar", {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true
	}), _objectSpread2))); // function tabSlider(){

	function tabscostumeCatalog(tab) {
		var params = _objectSpread(_objectSpread({}, defaultSl), {}, {
			spaceBetween: 30,
			navigation: {
				nextEl: '.sCatalog .swiper-button-next',
				prevEl: '.sCatalog .swiper-button-prev'
			},
			breakpoints: {
				// when window width is >= 320px
				// when window width is >= 480px
				576: {
					slidesPerView: 2
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 3
				},
				1200: {
					slidesPerView: 4
				}
			}
		});

		var mySwiper = new Swiper($(".tabs__content.active").find('.tabs__slider--js'), params);
		$('.sCatalog .' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).addClass('active').fadeIn(function () {
				var slider = $(this).find('.tabs__slider--js');

				if (slider.hasClass("swiper-container-initialized")) {
					mySwiper.update();
				} else {
					mySwiper = new Swiper(slider, params);
				}
			}); // swiper6.destroy();
		}); // }
		// mySwiper.on('init', function() { /* do something */ });
		// // mySwiper.slideNext();
		// mySwiper.init();
	}

	tabscostumeCatalog('tabs');
	var swiper7 = new Swiper('.sGal__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread3 = {
		spaceBetween: 20,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true
	}, _defineProperty(_objectSpread3, "watchOverflow", true), _defineProperty(_objectSpread3, "loopedSlides", 5), _defineProperty(_objectSpread3, "breakpoints", {
		// when window width is >= 320px
		1200: {
			spaceBetween: 40
		}
	}), _objectSpread3))); //Prod slider

	var galleryThumbs = new Swiper('.gallery-thumbs', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread4 = {
		spaceBetween: 10,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true
	}, _defineProperty(_objectSpread4, "watchOverflow", true), _defineProperty(_objectSpread4, "breakpoints", {
		992: {
			direction: 'vertical',
			spaceBetween: 12,
			slidesPerView: 5
		},
		1630: {
			direction: 'vertical',
			spaceBetween: 33
		}
	}), _defineProperty(_objectSpread4, "watchSlidesVisibility", true), _defineProperty(_objectSpread4, "watchSlidesProgress", true), _defineProperty(_objectSpread4, "lazy", {
		loadPrevNext: true
	}), _objectSpread4)));
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		thumbs: {
			swiper: galleryThumbs
		},
		lazy: {
			loadPrevNext: true
		}
	}); // breadcrumb

	var breadSl = new Swiper('.breadcrumb-slider-js, .tabs-slider-js', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30, 
		watchOverflow: true
	}); // modal window

	$(".s-filter__btn--js").click(function () {
		$(this).toggleClass('active').find("strong").toggleClass("d-none");
		$(".s-filter-wrap").toggle();
	}); // accordion

	$(".showhide").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	});
	$(".menu-mobile__item.menu-item-has-children ").each(function () {
		$(this).append('<div class="toggle-l"></div>');
	}); // $(".nav__item--has-children-js   .nav__link").click(function () {
	// 	return false;
	// })

	$(".menu-mobile  ").on('click', '.toggle-l', function () {
		$(this).toggleClass('active').prev('.sub-menu').slideToggle(); // return false;
	}); //luckyoneJs

	var paNavSlider;
	window.setTimeout(function () {
		paNavSlider = new Swiper('.pa-nav-slider-js', {
			//spaceBetween: 72,
			breakpoints: {
				320: {
					spaceBetween: 21
				},
				768: {
					spaceBetween: 72
				}
			},
			slidesPerView: 'auto',
			freeMode: true,
			freeModeMomentum: true,
			watchOverflow: true
		});
	}, 300);
	$('.content-header-js').click(function () {
		$(this).toggleClass('active');
		$(this.parentElement).find('.content-items-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //calendar js

	$('.sPACalendar__fancy-link').click(function () {
		var defaultDay = event.target.classList.contains('default-day');
		if (!defaultDay) return;
	}); //sticky-js
	// var Sticky = require('sticky-js');

	var sticky = new Sticky('.sCheckout__orderWrap'); //end luckyoneJs

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
	$(".topLine__dropdown-toggle").click(function () {
		$(this).next().slideToggle();
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}