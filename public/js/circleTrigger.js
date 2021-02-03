"use strick"



document.addEventListener("DOMContentLoaded", function () {

	let circleTl = gsap.timeline();
	circleTl.to(".circleMoveCont", {
		rotate: 360,
		transformOrigin: "center",
		duration: 80,
		ease: "linear",
		repeat: -1
	});
	gsap.to(".contact-imgWrap", {
		rotate: 100,
		transformOrigin: "center",
		duration: 1,
		paused: true,
		scrollTrigger: {
			trigger: "#Contact",
			scrub: true,
		}
	});


});