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