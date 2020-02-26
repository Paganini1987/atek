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
});
