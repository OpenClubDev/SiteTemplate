$(function() {
		
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:5000,
			autoplaySpeed: 1000,
			dotsSpeed: 1000,
			touchDrag  : true,
			mouseDrag  : true,
			responsiveClass:true,
			responsive:{
				1366:{
					items:1,
					nav:true
				},
				0:{
					items:1,
					nav:true
				}
			}
		})
		 $(".navbar-toggle").on("click", function () {
			$(this).toggleClass("active");
		  });
});
