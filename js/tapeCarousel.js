"use strick"

document.addEventListener("DOMContentLoaded", function(){
	let owl = $('.owl-carousel');
	let  tapCounter = 2;

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: false,
		dots: false,
		responsive: {
			0:{
				items:2
			},
			540:{
				items:4
			},
			960:{
				items:5
			}
		}
	});

	$(document).bind("mousewheel", function (e) {
		if (e.deltaY<0) {
			tapCounter++;
			if (tapCounter % 3 == false) {

			owl.trigger('stop.owl.autoplay');
			owl.trigger('next.owl', [5000]);
			owl.trigger('play.owl.autoplay', [5000, 40000]);
			}
		} 
		// else {
		// 	owl.trigger('prev.owl', [2000]);
		// }
	});


});