const menu = document.getElementsByClassName("menu");
const simpleButton = document.getElementById("simple");
const middleButton = document.getElementById("middle");
const hardButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const baseField = document.querySelector(".container-background");
const allButtonList = document.querySelectorAll(".menu__item");
//const newCard = document.createElement('div')
//const card 

const card = () => {
    const newCard = document.createElement('div');
    //console.log(baseField);
    newCard.classList.add("card");
    baseField.appendChild(newCard);
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
    //console.log(currentLevel);
    function createField (level) {
        //console.log(currentLevel);//функция по запуску поля с картами
        if (level == "simple") {
            card();
            card();
            card();
        }
        else if (level == "middle") {
            card();
            card();
            card();
            card();
            card();
            card();
        }
        else if (level == "hard") {
            card();
            card();
            card();
            card();
            card();
            card();
            card();
            card();
            card();
        }
    };

createField(currentLevel);
}

startButton.addEventListener("click", startGame);