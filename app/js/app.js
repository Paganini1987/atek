document.addEventListener("DOMContentLoaded", function() {

	//Слайдер на главной
	$('.js-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: false
	})

	$('.js-prev-slide').on('click', function(e) {
		e.preventDefault()

		$('.js-carousel').trigger('prev.owl.carousel')
	})
	$('.js-next-slide').on('click', function(e) {
		e.preventDefault()

		$('.js-carousel').trigger('next.owl.carousel')
	})
});
