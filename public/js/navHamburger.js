"use strick"

document.addEventListener("DOMContentLoaded", function(){

	let navHamburgerButton = document.getElementById("navHamburger");
	let navHamburgerButtonIcon = document.getElementById("navHamburgerIcon");
	let navSubMenu = document.getElementById("navHeadSubMenu");
	
	navHamburgerButton.addEventListener("click", showSubMenu);

	function showSubMenu(event){
		
		navSubMenu.classList.toggle("sub-menu-active");

		if (navSubMenu.classList.contains("sub-menu-active")){
			let docWidth = document.body.clientWidth;
			document.body.style.overflow = "hidden";
			let newDivClientWidth = document.body.clientWidth - docWidth; //При зникненні прокрутки, щоб не пригав гамбургер
			navHamburgerButton.style.marginRight = newDivClientWidth + "px";
			navHamburgerButtonIcon.style.marginRight = newDivClientWidth + "px";
			navSubMenu.style.paddingRight = newDivClientWidth + "px";
		}
		else{
			document.body.style.overflow = "";
			navHamburgerButton.style.marginRight = "";
			navHamburgerButtonIcon.style.marginRight = "";
			navSubMenu.style.paddingRight = "";
		}
	}


});