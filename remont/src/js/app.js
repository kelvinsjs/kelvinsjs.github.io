let formFiller = [
    {
        value: "Тип роботи",
        desc: ""
    }
];

console.log(formFiller);

function changeDesc( value, desc ) {
    for (var i in formFiller) {
        if (formFiller[i].value == value) {
            formFiller[i].desc = desc;
            break;
        }
    }
}

const typeRadio = document.querySelectorAll('[name="type-radio"]');
typeRadio.forEach((e) => {
    e.addEventListener("change", () => {
        changeDesc("Тип роботи", e.value);
        console.log(formFiller);
    })
})

const form = document.querySelector(".re-test__form");
form.addEventListener("submit", (e) => {

})

const hambButton = document.querySelector(".re-header__hamb");
hambButton.addEventListener("click", (e) => {
    e.preventDefault();
document.querySelector(".re-header__list").classList.toggle("invisible");
document.querySelector(".fa-bars").classList.toggle("fa-times");
})