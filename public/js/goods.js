"use strick"

document.addEventListener("DOMContentLoaded", function () {

	let goodsNav = document.querySelector(".goods__nav_main");
	let goodsImgs = document.querySelectorAll(".goods__img");

	goodsNav.addEventListener("mouseover", changeGoodsImg);

	function changeGoodsImg(event) {
		let target = event.target;
		if (target.tagName != "A") {
			return;
		}
		let timer = setTimeout(function () {
			for (let img of goodsImgs) {
				let src = img.src;
				let newFolder = target.dataset.folder;
				img.style.opacity = 0;
				img.src = changeGoodsPath(src, newFolder);
				fadeInGoods(img);
			}
		}, 300);
		goodsNav.addEventListener("mouseout", function () { clearTimeout(timer) });
	}





	//Допоміжні функції

	function changeGoodsPath(path, newFolder) {
		let firstIndex = path.toLowerCase().indexOf("goods") + 6;
		let lastIndex = path.toLowerCase().lastIndexOf("\/0");
		let oldFolder = path.slice(firstIndex, lastIndex);
		let newSrc = path.replace(oldFolder, newFolder);
		return newSrc;
	}

	function fadeInGoods(el) {
		let opacity = 0.01;
		let translateY = 400;
		let timer = setInterval(function () {
			if (translateY < 1) {
				clearInterval(timer);
			}
			el.style.opacity = opacity;
			el.style.transform = "translateY(" + translateY + "%)";
			opacity += opacity * 0.2;
			translateY -= translateY * 0.1;
		}, 10);
	}

});