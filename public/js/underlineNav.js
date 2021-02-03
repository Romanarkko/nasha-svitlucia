"use strick"

document.addEventListener("DOMContentLoaded", function () {

	let underlineItems = document.querySelectorAll(".underlineNav");
	for (let element of underlineItems) {
		element.addEventListener("mouseout", outItem);
		element.addEventListener("mouseover", onItem);
	}

	function outItem(event) {
		let target = event.target;
		if (target.tagName == "A") {
			target.style = "background-position: 100% 100%;";
		}
	}

	function onItem(event) {
		let target = event.target;
		if (target.tagName == "A") {
			target.style = "background-position: 0% 100%;";
		}



	}

});