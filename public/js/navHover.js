"use strick"

document.addEventListener("DOMContentLoaded", function(){

let navItems = document.getElementsByClassName("navUnderlineEffects");

for(let element of navItems){
	element.addEventListener("mouseout", hoverOut);
	element.addEventListener("mouseover", hoverOn);
}

function hoverOut(event){
	let target = event.target;
	target.style = "background-position: 100% 90%;";
}

function hoverOn(event){
	let target = event.target;
	target.style = "background-position: 0% 90%;";
}

});