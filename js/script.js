const navButtons = document.querySelectorAll(".nav_button");
navButtons[0].style.backgroundColor = "var(--cor-primaria)";

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




