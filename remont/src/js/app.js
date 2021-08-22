let formFiller = [
    {
        value: "Тип роботи",
        desc: ""
    },
    {
        value: "Ім'я",
        desc: ""
    },
    {
        value: "Телефон",
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

function closeModal() {
    document.querySelector(".re-modal").classList.toggle("so-invisible");
}

const callButton = document.querySelector(".re-header__callButton");
callButton.addEventListener("click", closeModal);

const closeFormButton = document.querySelector(".close-form");
closeFormButton.addEventListener("click", closeModal);

const getFormSubmitButton = document.querySelector(".re-modal__form");
const a = document.querySelectorAll('[name="inputField"]');
getFormSubmitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    for(let i = 0; i < a.length; i++) {
        changeDesc(formFiller[(i*1)+1].value, a[i].value);
    }
    console.log(formFiller)
})
