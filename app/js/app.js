document.addEventListener("DOMContentLoaded", function() {

	//Слайдер на главной
	$('.js-main-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: false
	})

	$('.js-prev-slide').on('click', function(e) {
		e.preventDefault()

		$('.js-main-carousel').trigger('prev.owl.carousel')
	})
	$('.js-next-slide').on('click', function(e) {
		e.preventDefault()

		$('.js-main-carousel').trigger('next.owl.carousel')
	})

	//Слайдер в карточке магазина
	$('.js-shops-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		dots: true,
		nav: false
	})

	//Слайдер акции
	$('.js-sale-carousel').owlCarousel({
		items: 5,
		smartSpeed: 500,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoWidth: true,
		dots: false,
		nav: false
	})

	//Попап карты
	$('.js-open-map-popup').on('click', function(e) {
		e.preventDefault()

		$('body').addClass('mapOpened')
	})

	$('.js-close-map-popup').on('click', function(e) {
		e.preventDefault()

		$('body').removeClass('mapOpened')
	})

	$('.df-popup__wrap').on('click', function(e) {
		e.preventDefault()

		if ($(e.target).closest('.df-popup__center').length === 0) {
			$('body').removeClass('mapOpened')
		}
	})

	//Go to top
	$('.js-go-to-top').on('click', function(e) {
		e.preventDefault()

		$('html, body').animate({ scrollTop: 0 }, 500)
	})

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > $(window).innerHeight()/4) {
			$('.js-go-to-top').addClass('active')
		} else {
			$('.js-go-to-top').removeClass('active')
		}
	})
});
