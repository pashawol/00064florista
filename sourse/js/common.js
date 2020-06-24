const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
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
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
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

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);
					_this.closeMenu();

				});
			})
			document.addEventListener('mouseup', function (event) {
				let container = event.target.closest(".menu-mobile--js.active"); // (1)
				if (!container) {
					_this.closeMenu();

				}
			});
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	customRange() {
		$(".range-wrap").each(function () {
			let _this = $(this);
			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onChange: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onFinish: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onUpdate: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data;
				// th.val(data + ' т')
				$d3_instance.update({
					from: min,
				})
			});

			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data;
				// th.val(data + ' т')
				$d3_instance.update({
					from: max,
				})
			});
			// $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute

			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });


		})
	},

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();
	JSCCommon.customRange();
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/pa-address.png);"></div>')
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

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0, 
		watchOverflow: true, 
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 7,
			// loadOnTransitionStart: true
		},
	}
	const swiper4 = new Swiper('.headerBlock__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		 
		navigation: {
			nextEl: '.headerBlock .swiper-button-next',
			prevEl: '.headerBlock .swiper-button-prev',
		},
		pagination: {
			el: '.headerBlock .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	
	// $('.sCatalog__slider--js').each(function () { 
		const swiper5 = new Swiper('.sCatalog__slider--js', {
			// slidesPerView: 5,
			...defaultSl,
			spaceBetween: 30,
			
			navigation: {
				nextEl: '.sCatalog .swiper-button-next',
				prevEl: '.sCatalog .swiper-button-prev',
			},
			breakpoints: {
				// when window width is >= 320px
			
				// when window width is >= 480px
				576: {
					slidesPerView: 2, 
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 3, 
				},
				
				1200: {
					slidesPerView: 4, 
				},

			}
		});

	// })
	
	const swiper6 = new Swiper('.sThematicSelections__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		spaceBetween: 30,
		slidesPerView: 'auto',
		watchOverflow: true, 
		freeMode: true,
		watchOverflow: true,
		loop: false,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true,
		},
		 
	});


	// function tabSlider(){
	function tabscostumeCatalog(tab) {
		var params = { 
				// slidesPerView: 5,
				...defaultSl,
				spaceBetween: 30,

				navigation: {
					nextEl: '.sCatalog .swiper-button-next',
					prevEl: '.sCatalog .swiper-button-prev',
				},
				breakpoints: {
					// when window width is >= 320px

					// when window width is >= 480px
					576: {
						slidesPerView: 2,
					},
					// when window width is >= 640px
					992: {
						slidesPerView: 3,
					},

					1200: {
						slidesPerView: 4,
					},

				} 
		}
		var mySwiper = new Swiper($(".tabs__content.active").find('.tabs__slider--js'), params);

		$('.sCatalog .' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).addClass('active').fadeIn(function () {
					var slider = $(this).find('.tabs__slider--js');
					if (slider.hasClass("swiper-container-initialized")) {
						mySwiper.update();
					}
					else {
						mySwiper = new Swiper(slider, params);
					}
				});
			// swiper6.destroy();
		});

		// }
		// mySwiper.on('init', function() { /* do something */ });
		// // mySwiper.slideNext();
		// mySwiper.init();
	}

	tabscostumeCatalog('tabs');

	
	
	const swiper7 = new Swiper('.sGal__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		spaceBetween: 20,
		slidesPerView: 'auto',
		watchOverflow: true, 
		freeMode: true,
		watchOverflow: true,
		loopedSlides: 5,
		breakpoints: {
			// when window width is >= 320px
 
			1200: {
				spaceBetween: 40,
			},

		}
	});
	


	//Prod slider
	const galleryThumbs = new Swiper('.gallery-thumbs', {
		...defaultSl,
		spaceBetween: 10,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		watchOverflow: true,
		breakpoints: {
			992: {
				direction: 'vertical',
				spaceBetween: 12,
				slidesPerView: 5,
			},
			
			1630: {
				direction: 'vertical',
				spaceBetween: 33,
			},

		},
		// direction: 'vertical',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		lazy: {
			loadPrevNext: true,
		},
	});
	const galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		},
		lazy: {
			loadPrevNext: true,
		},
	});

	// breadcrumb
	var breadSl = new Swiper('.breadcrumb-slider-js, .tabs-slider-js', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30, 
		watchOverflow: true,
	});

	// modal window
	$(".s-filter__btn--js").click(function () {
		$(this).toggleClass('active').find("strong").toggleClass("d-none")
		$(".s-filter-wrap").toggle();
	});

	// accordion
	$(".showhide").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	});

	//luckyoneJs
	let paNavSlider;
	window.setTimeout(function () {
		paNavSlider = new Swiper('.pa-nav-slider-js', {
			//spaceBetween: 72,
			breakpoints: {
				320:{
					spaceBetween: 21,
				},
				768:{
					spaceBetween: 72,
				},
			},

			slidesPerView: 'auto',
			freeMode: true,
			freeModeMomentum: true,
			watchOverflow: true,
		});
	},300);

	$('.content-header-js').click(function () {
		$(this).toggleClass('active');
		$(this.parentElement).find('.content-items-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	});
	//end luckyoneJs

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});


	$(".topLine__dropdown-toggle").click(function () {
		$(this).next().slideToggle();
	})
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
