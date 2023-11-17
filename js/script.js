
class Bita {
    constructor() {
        this.discountValue = document.querySelector("#discount");
        this.previousCardsContainer = document.querySelector("#previous_cards_container");
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
            let resultValue = this.valorFormatado - this.inputValue.value;
            let quantia = this.inputValue.value;
            let enabledButton = this.playButton.innerText !== "Esperando...";

            if (this.inputValue.value > 0 && resultValue >= 0 && enabledButton) {

                    this.discountValue.style.animation = "discount-animation 2s";
                    this.discountValue.innerText = "-" + quantia;
                    
                    setTimeout(() => {
                        this.discountValue.style.animation = "";
                        this.discountValue.innerText = "";
                    }, 1000)

                this.valorFormatado -= quantia;
                this.totalBanca.innerText = this.valorFormatado.toFixed(2);
            } 

        });
    };

    betValue() {
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
        /*Animation discount */
        this.playButton.style.backgroundColor = "#F12C4C";
        this.playButton.innerText = "Começar o jogo"
        this.playButton.style.color = "white";
        this.playButton.style.cursor = "pointer";
        bita.timerStart = 15;
        bita.timer.innerText = "Girando em " + bita.timerStart;
        bita.cards.style.animation = "none";
        bita.girandoText.style.display = "none"
        bita.containerBarProgress.style.display = "flex";
        this.startGame();
    };

    addPreviousCards() {

        let redCard = document.createElement("div");
        let blackCard = document.createElement("div");
        redCard.classList.add("red_card");
        blackCard.classList.add("black_card");

        if(this.pressedButton === "black") {
            this.previousCardsContainer.appendChild(redCard);

        } else {
            this.previousCardsContainer.appendChild(blackCard);
        }

        
        
    }

    startGame() {
        this.intervalBar = setInterval(() => {
            if(this.timerStart >= 0) {
                this.timer.innerText = "Girando em " + this.timerStart--;
                this.barraDeProgresso.style.animation = "animationBar 15s linear";
            } else {
                clearInterval(this.intervalBar);

                this.containerBarProgress.style.display = "none";
                this.girandoText.style.display = "block"
                this.girandoText.innerText = "Girando...";
                this.carrocelAnimation();
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
        /* LOGICA PROVISÓRIA */
        if(this.pressedButton === "black") {
            this.cards.style.animation = "carrocel-red 10s";
        } else if (this.pressedButton === "red") {
            this.cards.style.animation = "carrocel 10s";
        } else {
            this.cards.style.animation = "carrocel 10s";
        }
            /*Estilos dinamicos do playbutton */
        this.playButton.style.color = "#ffffff7c";
        this.playButton.style.cursor = "not-allowed";
        this.playButton.style.backgroundColor = "#f12c4d59";
        this.playButton.innerText = "Esperando..."

        setTimeout(() => {
            bita.girandoText.innerText = "A Bitabet girou!";
            bita.addPreviousCards();
            setTimeout(() => {
                bita.resetAndCall();
            }, 2000)
        }, 7000)
    };
    
    
};

const bita = new Bita();

bita.startGame();
bita.addBet();
bita.betValue();
bita.changeBet();





// /*Animation discount*/
// if(this.discountValue.style.display === "block") {

//     this.discountValue.style.display = "none";
//     this.discountValue.style.animation = "none"

//     this.discountValue.innerText = "-";

//     this.discountValue2.style.display = "block";
//     this.discountValue2.style.animation = "discount-animation 2s linear";

//     this.discountValue2.innerText += quantia;

//     console.log(this.discountValue.style.display)

    


// } else {
//     this.discountValue2.display = "none";
//     this.discountValue2.style.animation = "none"

//     this.discountValue2.innerText = "-";

//     this.discountValue.style.display = "block";
//     this.discountValue.style.animation = "discount-animation 2s linear";

//     this.discountValue.innerText += quantia;

//     console.log(this.discountValue2.style.display);

// }