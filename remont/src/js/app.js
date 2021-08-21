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
