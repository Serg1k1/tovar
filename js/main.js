$('.direction__blocks').slick({
	arrows: false,
	dots: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000
});

$('.menu__btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu__btn-active');
	$('.menu').toggleClass('menu-active');
	$('.burger').toggleClass('burger-active');
});

document.body.onload = function() {
	
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if ( !preloader.classList.contains('preloader_done') )
		{
			preloader.classList.add('preloader_done')
		}
	}, 1000);
}