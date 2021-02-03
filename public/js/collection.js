"use strick"

document.addEventListener("DOMContentLoaded", function () {

	// створити функцію яка буде додавати картки і брати зображення з імг + додати, що при ховер бере датасед з номером і міняє зображення

	let collectionGoods = document.querySelector(".collection-goods .row");
	for (let i = 1; i <= 17; i++) {
		let card = document.createElement("div");

		card.classList.add("card");
		card.classList.add("col-6");
		card.classList.add("col-md-3");
		card.innerHTML = '<img src="image/collection/1.jpg" class="card-img-top"><div class="card-body"><h6 class="card-subtitle">ПЛАТТЯ</h6><h2 class="card-title">Ллянна сукня</h2></div>'
		card.querySelector("img").src = `image/collection/${i}.jpg`;
		card.dataset.num = i;
		collectionGoods.append(card);
	}
	let cards = collectionGoods.querySelectorAll(".card");
	for (let card of cards) {
		card.addEventListener("mouseover", hoverImgCollection);
		card.addEventListener("mouseleave", unhoverImgCollection);
	}



	function hoverImgCollection(event) {
		let target = event.target;
		let block = target.closest(".card");
		if (target.tagName == "IMG") {
			target.src = `image/collection/${block.dataset.num}-1.jpg`;
		} else {
			let img = block.querySelector("img");
			img.src = `image/collection/${block.dataset.num}-1.jpg`;
		}
	}
	function unhoverImgCollection(event) {
		let target = event.target;
		let block = target.closest(".card");
		if (target.tagName == "IMG") {
			target.src = `image/collection/${block.dataset.num}.jpg`;
		}
		else {
			let img = block.querySelector("img");
			img.src = `image/collection/${block.dataset.num}.jpg`;
		}
	}


});