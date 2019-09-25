const menu = document.getElementsByClassName("menu");
const simpleButton = document.getElementById("simple");
const middleButton = document.getElementById("middle");
const hardButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const baseField = document.querySelector(".container-for-cards");
const allButtonList = document.querySelectorAll(".menu__item");

const card = (level) => {
    const newCard = document.createElement('div');
    newCard.classList.add("card");
    baseField.appendChild(newCard);
    //функция, генерирующая обратную сторону карты Math.random
}

const chooseLevel = (elem) => { 
    allButtonList.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
}

allButtonList.forEach((item) => item.addEventListener("click", chooseLevel));



/////////////////////



function startGame () {
    let currentLevel = document.querySelector(".checked").getAttribute("id");
    menuScreen.remove();

    function createField (level) {
        baseField.classList.add("centered")
        switch (level) {
            case "simple":
                baseField.classList.add("centeredFor3");
                for(let i = 3; i-- ;) {
                    card(currentLevel);
                }
                break;
            case "middle":
                baseField.classList.add("centeredFor6");
                for(let i = 6; i-- ;) {
                    card(currentLevel);
                }
                break;
            case "hard":
                baseField.classList.add("centeredFor10");
                for(let i = 10; i-- ;) {
                    card(currentLevel);
                }
                break;
        } 
    }
createField(currentLevel);
};

startButton.addEventListener("click", startGame);