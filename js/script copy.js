const navButtons = document.querySelectorAll(".nav_button");
navButtons[0].style.backgroundColor = "var(--cor-primaria)";
const barraDeProgresso = document.querySelector("#barra_progresso");
const timer = document.querySelector("#timer");
const containerBarProgress = document.querySelector("#contagem_regressiva");
const girandoText = document.querySelector("#girando_text");
const cards = document.querySelector("#cards");
let timerStart = "15";
let numeroDeJogadores = 0;
const self = this;

animationBar(() => {
    barraDeProgresso.style.animation = "animationBar 18s";
});

let intervalId = setInterval(timerAnimation(() => {
    timer.innerText = "Girando em " + timerStart--;
    animationBar();
}, 1000));


setInterval(() => {
    console.log('rodar')
    clearInterval(intervalId);
    containerBarProgress.style.display = "none";
    girandoText.style.display = "block";
    girandoText.innerText = "Girando...";
    cards.style.animation = "carrocel 5s";
    self.timerAnimation();
}, 17000);


setTimeout(() => {
    girandoText.innerText = "A Bita girou!";
}, 22000)




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




