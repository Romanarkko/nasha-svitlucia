"use strick"

document.addEventListener("DOMContentLoaded", function(){
	let navSubItems = document.getElementById("navHeadMenu-div-menu-main");
	let navSubMenuParentDiv = document.getElementById("navHeadMenu-div-img");
	let navSubMenuImg = document.getElementById("fakeImg");
	


	function fadeIn (el){
		let opacity = 0.01;
		let timer = setInterval(function() {
    		if(opacity >= 1) {
				clearInterval(timer);
			}	
		el.style.opacity = opacity;
     	opacity += opacity * 0.1;
	}, 10);
	}


	async function getImg(num){
		let responseBgImg = await fetch("../json/navHeadSubmenuBg.json");
		let bgImgs = await responseBgImg.json();
		return bgImgs[num];
	}
	async function changeImage(path){
		navSubMenuParentDiv.style.backgroundImage = navSubMenuImg.style.backgroundImage;
		navSubMenuImg.style.opacity = 0.01;
		navSubMenuImg.style.backgroundImage = "url(" + path + ")";
		fadeIn(navSubMenuImg);
	}



	
	navSubItems.addEventListener("mouseover", changeBgSubMenu);
	

	function changeBgSubMenu (event){
		
		let target = event.target;
		if (target.tagName != "A"){
			return;
		}
		let timer = setTimeout(function () {
			let num = target.dataset.imgNum;
			getImg(num).then(changeImage);
		}, 300);
		navSubItems.addEventListener("mouseout", function (){clearTimeout(timer)});
	}
	

	
});