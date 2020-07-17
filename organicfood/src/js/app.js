//Для кнопки в header

const headerButton = document.querySelector(".of-header__button");
let clickCounter = 0;
headerButton.addEventListener('click', (event) => {
	event.preventDefault();
	clickCounter++;
	alert("Количество нажатий на эту кнопку: " + clickCounter);
})

headerButton.addEventListener('focus', (e) => {
	e.target.style.border = 'none'; 
})

//Для фона в products

const k = 1;
let g;

const productCards = document.querySelectorAll(".product-item");
console.log(productCards.length);
for (let i = 0; i < productCards.length; i++) {
	g = i+1;
	if (i === 3) {
		productCards[i].style.background = "none";
	} else {
		productCards[i].style.backgroundImage = "url('./img/img" + g + ".jpg')"; 
	}
}

//awesome анимация 
