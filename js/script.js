
class Bita {
    constructor() {
        this.playButton = document.querySelector("#play_button");
        this.betButtons = document.querySelectorAll(".button")
        this.inputValue = document.querySelector("#quantia");
        this.totalValue = document.querySelector("#value");
        this.navButtons = document.querySelectorAll(".nav_button");
        this.navButtons[0].style.backgroundColor = "var(--cor-primaria)";
        this.barraDeProgresso = document.querySelector("#barra_progresso");
        this.timer = document.querySelector("#timer");
        this.containerBarProgress = document.querySelector("#contagem_regressiva");
        this.girandoText = document.querySelector("#girando_text");
        this.cards = document.querySelector("#cards");
        this.containerCards = document.querySelector("#cards");
        this.timerStart = 15;
        this.numeroDeJogadores = 0;
        this.pressedButton = "";

        
        this.navButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                if (index === 0) {
                    this.navButtons[0].style.backgroundColor = "var(--cor-primaria)";
                    this.navButtons[1].style.backgroundColor = "var(--cor-secundaria)";
                } else {
                    this.navButtons[1].style.backgroundColor = "var(--cor-primaria)";
                    this.navButtons[0].style.backgroundColor = "var(--cor-secundaria)";
                }
        
            });
        });

    }
    addBet() {
        bita.playButton.addEventListener("click", () => {
            bita.totalValue.innerText -= Number(bita.inputValue.value);
        });
    };

    bet() {
        this.betButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if(button.classList.contains("red_button")) {
                    this.pressedButton = "red";
                }else if (button.classList.contains("black_button")) {
                    this.pressedButton = "black";
                } else {
                    this.pressedButton = "white";
                }
        
            })
        });
    }

    resetAndCall() {
        bita.timerStart = 15;
        bita.timer.innerText = "Girando em " + bita.timerStart;
        bita.cards.style.animation = "none";
        bita.girandoText.style.display = "none"
        bita.containerBarProgress.style.display = "flex";
        this.startGame();
    };

    startGame() {
        this.intervalBar = setInterval(() => {
            if(bita.timerStart >= 0) {
                bita.timer.innerText = "Girando em " + bita.timerStart--;
                bita.barraDeProgresso.style.animation = "animationBar 15s linear";
            } else {
                clearInterval(bita.intervalBar);
                bita.containerBarProgress.style.display = "none";
                bita.girandoText.style.display = "block"
                bita.girandoText.innerText = "Girando...";
                bita.carrocelAnimation();
            }
        }, 1000)
    };
    carrocelAnimation() {
        if(this.pressedButton === "black") {
            this.cards.style.animation = "carrocel-red 10s";
        } else if (this.pressedButton === "red") {
            this.cards.style.animation = "carrocel 10s";
        } else {

        }
        setTimeout(() => {
            bita.girandoText.innerText = "A Bitabet girou!";
            setTimeout(() => {
                bita.resetAndCall();
            }, 2000)
        }, 7000)
    };
    
    
};

const bita = new Bita();

bita.startGame();
bita.addBet();
bita.bet();





