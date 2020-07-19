//Для кнопки в header

const headerButton = document.querySelector(".of-header__button");
let clickCounter = 0;
headerButton.addEventListener('click', (event) => {
	event.preventDefault();
	clickCounter++;
	alert("Количество нажатий на кнопки: " + clickCounter);
	localStorage.setItem("counter", clickCounter);
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

$(".bottom-side__left").mouseenter(function(event) {
	$(this).addClass("back-text");
	setTimeout(function(){
		$(".bottom-side__left").removeClass("back-text");
	}, 5999);
})

$(".bottom-side__left").mouseleave(function(event) {
	$(this).removeClass("back-text");
})

//случайный цвет для текста в слогане
const sloganText = "Quality food is the most important thing in our life";
const sloganArray = sloganText.split( "\n" ).join( " " ).split( " " );
const colorArray = ["pink", "green", "orange", "blue", "yellow"];
let randomColorArray = [];
for (let i = 0; i<sloganArray.length; i++) {
	randomColorArray[i] = colorArray[Math.floor(Math.random() * Math.floor(5))];
}

let finalText = "";

for (let k = 0; k<sloganArray.length; k++) {
	finalText = finalText + '<span class="' + randomColorArray[k] + '">' + sloganArray[k] + ' </span>';
}

$(".of-slogan__text-text").append(finalText);

//для кнопки в perfect 

$(".of-perfect__button").click(function(e) {
	e.preventDefault();
	clickCounter++;
	alert("Количество нажатий на кнопки: " + clickCounter);
	localStorage.setItem("counter", clickCounter);
})

//localStorage save

document.addEventListener("DOMContentLoaded", () => {
	clickCounter = localStorage.getItem("counter");
})

//добавление картики в about 

const aboutBlocks = document.querySelectorAll(".of-about__item");
console.log(aboutBlocks);
let aboutArray = [];
for (let i = 0; i < aboutBlocks.length; i++) {
	if (aboutBlocks[i].innerHTML == "") {
		aboutArray.push(aboutBlocks[i]);
	}
}

let numberForAbout;

for (let i = 0; i < aboutArray.length; i++) {
	numberForAbout = i+1;
	// aboutArray[i].style.backgroundImage = "url('./img/p" + numberForAbout + ".jpg')";
	var aboutimg = document.createElement("img");
	aboutimg.src = './img/p' + numberForAbout + '.jpg';
	aboutimg.alt = "party4everybody";
	aboutArray[i].appendChild(aboutimg);
	aboutArray[i].classList.add("aboutimgwr");
}

//gallery img width 

const imageWidth = (document.documentElement.clientWidth) / 4;
console.log(imageWidth);
const photoArray = document.querySelectorAll(".of-gallery__item");
photoArray.forEach((element) => {
	element.style.maxWidth = imageWidth + "px";
	element.style.paddingTop = imageWidth + "px";
})

//gallery name position

const nameArray = document.querySelectorAll(".of-gallery__name");
const widthArray = [];
nameArray.forEach((element) => {
	widthArray.push(element.offsetWidth);
});

for (let i = 0; i < nameArray.length; i++) {
	nameArray[i].style.transform = 'translate(' + (imageWidth*0.5 - widthArray[i]*0.5) +'px, -' + (imageWidth*0.5 - 9) + 'px)';
}


//blog bg photos 

const blogItems = document.querySelectorAll(".of-blog__item");
let numforblog;
for (let i = 0; i<blogItems.length; i++) {
	numforblog = i+1;
	blogItems[i].style.backgroundImage = 'url("../img/b' + numforblog + '.jpg")';
}