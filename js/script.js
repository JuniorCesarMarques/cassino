
class Bita {
    constructor() {
        this.discountValue = document.querySelector("#discount");
        this.winValue = document.querySelector("#win");
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
        this.valorFormatado;
        this.randomNumber; /*Não sei se é necessario */
        this.pressedButton = "black";
        this.blackValue = 0;
        this.redValue = 0;
        this.whiteValue = 0;
        this.whiteCardDrawn = false;
        this.incrementor = 0;




        /*Logica dos seletores normal e auto */
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

        /*Seletor dos botões vermelho, preto e branco */
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
                    this.betButtons[2].classList.remove("selected_button");
                }
        
            })
        });
            
             
        this.playButton.addEventListener("click", () => {

            this.formatDecimalNumber();
            let resultValue = this.valorFormatado - this.inputValue.value;
            this.quantia = this.inputValue.value;

            this.betRegister();
            let enabledButton = this.playButton.innerText !== "Esperando...";


            if (this.inputValue.value > 0 && resultValue >= 0 && enabledButton) {

                    this.discountValue.style.animation = "discount-animation 2s";
                    this.discountValue.innerText = "-" + this.quantia;
                    
                    setTimeout(() => {
                        this.discountValue.style.animation = "";
                        this.discountValue.innerText = "";
                    }, 1000)

                this.valorFormatado -= this.quantia;
                this.totalBanca.innerText = this.valorFormatado.toFixed(2);

            } else if (this.inputValue.value === 0 || this.inputValue.value === "") {
                this.inputValue.style.border = "1px solid red";
                this.inputValue.placeholder = "Por favor digite uma valor!"
                this.inputValue.style.transition = "0.5s";

                setTimeout(() => {
                    this.inputValue.style.border = "none";
                }, 1000)
            }

        });

    };

    betRegister() {
        this.chosenCards = [];
        switch(this.pressedButton) {
            case "black":
                this.blackValue += Number(this.inputValue.value);
                this.chosenCards.push("black");
                break;
            case "red":
                this.redValue += Number(this.inputValue.value);
                this.chosenCards.push("red");
                break;
            default:
                this.whiteValue += Number(this.inputValue.value);
                this.chosenCards.push("white");
        }

        this.valuesHasBeenRegistered = true;
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

    resetAndCall() {
        /*Animation discount */
        this.whiteCardDrawn = false;
        this.blackValue = 0;
        this.redValue = 0;
        this.whiteValue = 0;
        this.valuesHasBeenRegistered = false;
        this.playButton.style.backgroundColor = "#F12C4C";
        this.inputValue.placeholder = "Quantia";
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

        if(this.randomNumber === 0) {
            this.previousCardsContainer.appendChild(redCard);

        } else if (this.randomNumber === 1) {
            this.previousCardsContainer.appendChild(blackCard);
        } else {

        }
 
    }

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
    };

    whiteCardLogic() {

        if (this.randomNumber === 1) {

            this.incrementor++
            console.log("incrementor" + this.incrementor);

            if (this.incrementor === 2) {
                this.incrementor = 0;
                this.randomNumber = 2;
                this.whiteCardDrawn = true;

            }

        }


        
    };

    randomNumberGenerator() {

        this.randomNumber = Number(Math.random().toFixed(1)[2]);
        console.log(this.randomNumber);

        this.whiteCardLogic();

        if (this.randomNumber <= 4 && this.whiteCardDrawn === false) {

            this.randomNumber = 1
        } else if (this.randomNumber > 4 && this.whiteCardDrawn === false) {

            this.randomNumber = 0;
        } 

    };

    win() {

        if (this.valuesHasBeenRegistered && this.chosenCards.includes(this.drawnCard)) {
            switch(this.drawnCard) {
                case "black":
                    this.valorFormatado += this.blackValue * 2;
                    this.totalBanca.innerText = this.valorFormatado.toFixed(2);
    
                    this.winValue.style.animation = "win-animation 2s";
                    this.winValue.innerText = "+" + this.blackValue * 2;
                    break;
                case "red":
                    this.valorFormatado += this.redValue * 2;
                    this.totalBanca.innerText = this.valorFormatado.toFixed(2);
    
                    this.winValue.style.animation = "win-animation 2s";
                    this.winValue.innerText = "+" + this.redValue * 2;
                    break;
                  default:
                    this.valorFormatado += this.whiteValue * 14;
                    this.totalBanca.innerText = this.valorFormatado.toFixed(2);
    
                    this.winValue.style.animation = "win-animation 2s";
                    this.winValue.innerText = "+" + this.whiteValue * 14;
            }
    
            setTimeout(() => {
                this.winValue.style.animation = "";
                this.winValue.innerText = "";
            }, 1000)
        }
    }

    carrocelAnimation() {

        this.randomNumberGenerator();
        if(this.randomNumber === 0) {
            this.cards.style.animation = "carrocel-red 10s";
            this.drawnCard = "red";
        } else if (this.randomNumber === 1) {
            this.cards.style.animation = "carrocel 10s";
            this.drawnCard = "black";
        } else {
            this.cards.style.animation = "carrocel-white 10s";
            this.drawnCard = "white";
            console.log(this.randomNumber)
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
            }, 2000);

            this.win();

        }, 7000)
    };
 
};

const bita = new Bita();

bita.startGame();
bita.changeBet();
