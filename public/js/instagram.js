"use strick"

document.addEventListener("DOMContentLoaded", function () {


	let instaMainImg = document.querySelector(".instaMain");
	let movY = instaMainImg.clientHeight / 5;

	// GSAP

	let tween;
	let tweenSlow;
	instaGsap();

	mq.addEventListener("change", instaGsap);
	function instaGsap() {
		if (mq.matches) {
			instaScale(instaMainImg);
			tween = gsap.to(".insta-normal", { //layer
				scale: 0.3,
				y: movY,
				transformOrigin: "center",
				scrollTrigger: {
					trigger: ".instagram-grid",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				}
			});
			tweenSlow = gsap.to(".insta-slow", { //all delate
				scale: 0.2,
				y: movY,
				transformOrigin: "center center",
				scrollTrigger: {
					trigger: ".instagram-grid",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				}
			});

		}
		else {
			let grid = document.querySelector(".instagram-grid");
			grid.style.transform = `scale(1)`;
			tween = gsap.to(".instagram-layer", {
				scale: 1,
				y: 0,
				transformOrigin: "center",
				scrollTrigger: {
					trigger: ".instagram",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				}
			});
		}
	}


	function instaScale(elem) {
		let windowWidth = document.documentElement.clientWidth;
		let elemWidth = elem.clientWidth;
		let grid = document.querySelector(".instagram-grid");
		let scale = windowWidth / elemWidth + 1;
		grid.style.transform = `scale(${scale})`;
	}

});