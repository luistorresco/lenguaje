const langSec = document.querySelector(".languageSelector");
const buttons = document.querySelectorAll("a");
const textTitle = document.querySelector(".title");
const textDesc = document.querySelector(".description");

buttons.forEach(button => {
    button.addEventListener("click", function () {
            langSec.querySelector(".active").classList.remove("active");
            button.classList.add("active");

            const attr = button.getAttribute("language");

            textTitle.textContent = data[attr].title;
            textDesc.textContent = data[attr].description;
        });
});


const data = {
    "ingles":
    {
        "title": "hello word!",
        "description": "hi my pussy this is a example."
    },
    "español":
    {
        "title": "hola mundo",
        "description": "hola mis perritas esto es una prueba"
    }
}