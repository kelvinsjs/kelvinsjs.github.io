const hambButton = document.querySelector(".re-header__hamb");
hambButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".re-header__list").classList.toggle("invisible");
    document.querySelector(".fa-bars").classList.toggle("fa-times");
})

function closeModal() {
    document.querySelector(".re-modal").classList.toggle("so-invisible");
}

const callButton = document.querySelectorAll(".re-header__callButton");
callButton.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".re-modal").classList.toggle("so-invisible");
        document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
        document.querySelector(".re-modal__quiz").classList.add("so-invisible");
        document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
    });
})

const closeFormButton = document.querySelector(".close-form");
closeFormButton.addEventListener("click", closeModal);

const a = document.querySelectorAll('[name="inputField"]');
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

document.querySelectorAll(".re-header__cost").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".re-modal").classList.toggle("so-invisible");
        document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
        document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
        document.querySelector(".re-modal__finalScreen").classList.add("so-invisible");
    })
})

endButton.addEventListener("click", () => {
    document.querySelector(".re-modal__quiz").classList.remove("so-invisible");
    document.querySelector(".re-modal__quiz").classList.add("so-invisible");
    document.querySelector(".re-modal__finalScreen").classList.remove("so-invisible");
})
