let formFiller = [
    {
        value: "Тип об'єкту",
        desc: ""
    },
    {
        value: "Тип роботи",
        desc: ""
    },
    {
        value: "Телефон",
        desc: ""
    }
];

console.log(formFiller);

function changeDesc(value, desc) {
    for (let i in formFiller) {
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
callButton.addEventListener("click", () => {
    document.querySelector(".re-modal").classList.toggle("so-invisible");
    document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
    document.querySelector(".re-modal__quiz").classList.add("so-invisible");
    document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
});

const closeFormButton = document.querySelector(".close-form");
closeFormButton.addEventListener("click", closeModal);

const getFormSubmitButton = document.querySelector(".re-modal__form");
const a = document.querySelectorAll('[name="inputField"]');
getFormSubmitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < a.length; i++) {
        changeDesc(formFiller[(i * 1) + 1].value, a[i].value);
    }
    console.log(formFiller)
})

const getQuiz = document.querySelectorAll(".re-modal__quiz-quiz");
const getPrev = document.querySelector(".prev");
const getNext = document.querySelector(".next");
const endButton = document.querySelector(".end");
let coordinaleQuiz = 0;
getPrev.addEventListener("click", () => {
    if (coordinaleQuiz === 0) {
        console.log("zero element, cant make")
    } else {
        getQuiz[coordinaleQuiz].classList.add("so-invisible");
        coordinaleQuiz = coordinaleQuiz - 1;
        getQuiz[coordinaleQuiz].classList.remove("so-invisible");
        endButton.classList.add("so-invisible");
        getNext.classList.remove("so-invisible");
    }
});

getNext.addEventListener("click", () => {
    if (coordinaleQuiz >= getQuiz.length - 1) {
        console.log("its over, cant make");
        coordinaleQuiz = getQuiz.length - 1;
    } else {
        getQuiz[coordinaleQuiz].classList.add("so-invisible");
        coordinaleQuiz = coordinaleQuiz + 1;
        if (coordinaleQuiz >= getQuiz.length - 1) {
            getNext.classList.add("so-invisible");
            endButton.classList.remove("so-invisible");
        }
        getQuiz[coordinaleQuiz].classList.remove("so-invisible");
    }
})

document.querySelector(".re-header__cost").addEventListener("click", () => {
    document.querySelector(".re-modal").classList.toggle("so-invisible");
    document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
    document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
    document.querySelector(".re-modal__finalScreen").classList.add("so-invisible");
})

endButton.addEventListener("click", () => {
    document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
    document.querySelector(".re-modal__quiz").classList.add("so-invisible");
    document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
})

const getFirstQ = document.querySelectorAll('[name="first-q-radio"]');
getFirstQ.forEach((e) => {
    e.addEventListener("change", () => {
        if (e.checked) {
            changeDesc("Тип об'єкту", e.value)
            console.log(formFiller);
        }
    })
})

const getSecondQ = document.querySelectorAll('[name="second-q-radio"]');
getSecondQ.forEach((e) => {
    e.addEventListener("change", () => {
        if (e.checked) {
            changeDesc("Тип роботи", e.value)
            console.log(formFiller);
        }
    })
})