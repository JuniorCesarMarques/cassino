
class Bita {
    constructor() {
        this.totalBanca = document.querySelector("#banca")
        this.changeBetButtons = document.querySelectorAll(".change_bet");
        this.playButton = document.querySelector("#play_button");
        this.betButtons = document.querySelectorAll(".button")
        this.inputValue = document.querySelector("#quantia");
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
        this.valorFormatado;


        
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
        this.playButton.addEventListener("click", () => {
            this.formatDecimalNumber();
            if (this.valorFormatado > 0) {
                this.valorFormatado -= this.inputValue.value;
                this.totalBanca.innerText = this.valorFormatado.toFixed(2);

            }
        });
    };

    bet() {
        this.betButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if(button.classList.contains("red_button")) {
                    this.pressedButton = "red";
                    button.classList.add("selected_button");
                    this.betButtons[1].classList.remove("selected_button");
                    this.betButtons[2].classList.remove("selected_button");
                }else if (button.classList.contains("black_button")) {
                    this.pressedButton = "black";
                    button.classList.add("selected_button");
                    this.betButtons[0].classList.remove("selected_button");
                    this.betButtons[1].classList.remove("selected_button");
                } else {
                    this.pressedButton = "white";
                    button.classList.add("selected_button");
                    this.betButtons[0].classList.remove("selected_button");
                    this.betButtons[3].classList.remove("selected_button");
                }
        
            })
        });
    }
    

    resetAndCall() {
        this.playButton.style.cursor = "pointer";
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
    formatDecimalNumber() {
        let valorNumerico = parseFloat(this.totalBanca.innerText.replace(",","."));
        this.valorFormatado = valorNumerico.toFixed(2);

    };

    changeBet() {
        this.changeBetButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (button.classList.contains("reduzir")) {
                    this.inputValue.value = this.inputValue.value / 2;
                } else {
                    this.inputValue.value = this.inputValue.value * 2;
                }
            })
        })
    }

    carrocelAnimation() {
        if(this.pressedButton === "black") {
            this.cards.style.animation = "carrocel-red 10s";
        } else if (this.pressedButton === "red") {
            this.cards.style.animation = "carrocel 10s";
        } else {
            this.cards.style.animation = "carrocel 10s";
        }

        this.playButton.style.cursor = "not-allowed";
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
bita.changeBet();






