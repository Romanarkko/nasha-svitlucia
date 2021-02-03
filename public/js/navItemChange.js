"use strick"

document.addEventListener("DOMContentLoaded", function(){

	let navIcons = document.getElementsByClassName("nav-icon-wrapper");

	for(let element of navIcons){
		element.addEventListener("click", hamburger);
	}
	
	function hamburger(event){
		let target = this.querySelector(".nav-icon");
		target.classList.toggle("nav-icon-active");
	}

});