const navButtons = document.querySelectorAll(".nav_button");
navButtons[0].style.backgroundColor = "var(--cor-primaria)";
const barraDeProgresso = document.querySelector("#barra_progresso");
const timer = document.querySelector("#timer");
const containerBarProgress = document.querySelector("#contagem_regressiva");
const girandoText = document.querySelector("#girando_text");
const cards = document.querySelector("#cards");
let timerStart = "15";



 let intervalId = setInterval(function timerAnimation() {
    timer.innerText = "Girando em " + timerStart--;
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    containerBarProgress.style.display = "none";
    girandoText.style.display = "block";
    girandoText.innerText = "Girando...";
    cards.style.animation = "carrocel 5s"
}, 17000);



function animationBar() {
    barraDeProgresso.style.animation = "animationBar 15s";

};

animationBar();




navButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            navButtons[0].style.backgroundColor = "var(--cor-primaria)";
            navButtons[1].style.backgroundColor = "var(--cor-secundaria)";
        } else {
            navButtons[1].style.backgroundColor = "var(--cor-primaria)";
            navButtons[0].style.backgroundColor = "var(--cor-secundaria)";
        }

    })
})




