const menu = document.getElementsByClassName("menu");
const simpleButton = document.getElementById("simple");
const middleButton = document.getElementById("middle");
const hardButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const mainContainer = document.querySelector(".container-background");
const allButtonList = document.querySelectorAll(".menu__item");
// создаем внутренние элементы карты
//const baseField = document.querySelector(".container-for-cards");
const baseField = document.createElement("div");
baseField.classList.add(".container-for-cards");

const card = (level) => {
    const newCard = document.createElement("div");
    const flipCardInner = document.createElement("div");
    const flipCardFront = document.createElement("div");
    const flipCardBack = document.createElement("div");
    const imgValue = document.createElement("img");
    const imgFront = document.createElement("img");
    newCard.classList.add("card");
    flipCardInner.classList.add("flip-card-inner");
    flipCardFront.classList.add("flip-card-front");
    flipCardBack.classList.add("flip-card-back");
    imgValue.setAttribute("src", "card_gameover.png");
    imgFront.setAttribute("src", "card_back.png");
    baseField.appendChild(newCard);
    newCard.appendChild(flipCardInner);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCardFront.appendChild(imgFront);
    flipCardBack.appendChild(imgValue);
    flipCardInner.addEventListener("click", () => {
        flipCardInner.classList.toggle("transform");
        flipCardInner.addEventListener("click", () => {
            mainContainer.appendChild(menuScreen);
            baseField.innerHTML = '';
            baseField.remove()
            });
        });
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
    mainContainer.appendChild(baseField);

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