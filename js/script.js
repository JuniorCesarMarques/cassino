const navButtons = document.querySelectorAll(".nav_button");
navButtons[0].style.backgroundColor = "var(--cor-primaria)";
const barraDeProgresso = document.querySelector("#barra_progresso");
const timer = document.querySelector("#timer");
const containerBarProgress = document.querySelector("#contagem_regressiva");
const girandoText = document.querySelector("#girando_text");
let timerStart = "15";



 let intervalId = setInterval(function timerAnimation() {
    timer.innerText = "Girando em " + timerStart--;
}, 1000)

setTimeout(() => {
    clearInterval(intervalId);
    containerBarProgress.style.display = "none";
    girandoText.innerText = "Girando...";
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




