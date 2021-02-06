"use strick"

document.addEventListener("DOMContentLoaded", function(){
	
	let navHead = document.getElementById("navHead");

	window.addEventListener("scroll", navDisapear);
	window.addEventListener("sc", navDisapear);
	function navDisapear(event){
		if (window.pageYOffset > 30){
			navHead.style.visibility = "hidden";
			navHead.style.opacity = "0";
		}
		if (window.pageYOffset < 30){
			navHead.style.visibility = "visible";
			navHead.style.opacity = "1";
		}
	}
	

});

