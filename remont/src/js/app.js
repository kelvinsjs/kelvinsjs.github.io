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

$(document).ready(function() {
    if($(window).width() < 769) {
        $(".re-header__list").addClass("invisible");
    }
});

const calculatePadding = '0 ' + (document.body.clientWidth - 1200) / 2 + 'px';

$(window).scroll(function(){
    if($(window).scrollTop() > $(".re-header").height()){
        $(`#navigation`).css('position','fixed').css('top','0').css('z-index','88917196').css("background", "#ffffff");
        $('#navigation').css('box-shadow','0px 6px 24px -3px rgba(34, 60, 80, 0.2)')
        if($(window).width() < 769) {
            $(".re-header__list").css('top','50px');
        } else {
            $(".re-header__link").css("color", "#222222").css("font-weight", "500");
            $(".re-header__logo").css('padding-bottom', "15px").css("background-color", "transparent").css("color", "#fff");
            $(".re-header__list").css('position','relative').css('top','0');
            $('#navigation').css('left','50%').css("transform", "translateX(-50%)").css("max-width", "100%").css('padding', calculatePadding);
            $('#navigation').css('background',"#fff url('./img/menubg.png') no-repeat");
        }

    } else {
        $('#navigation').css('position','static').css("display", "flex").css("background", "transparent");
        if($(window).width() < 769) {
            $(".re-header__list").css('top','120px');
        } else {
            $(".re-header__link").css("color", "#f0f0f0").css("font-weight", "400");
            $(".re-header__logo").css('padding-bottom', "40px").css("background-color", "#f0f0f0").css("color", "#222222");
            $(".re-header__list").css('position','inherit').css('top','auto');
            $('#navigation').css('left','auto').css("transform", "none").css("max-width", "1200px").css("padding", "0px").css('background-image',"none");
        }
    }
});