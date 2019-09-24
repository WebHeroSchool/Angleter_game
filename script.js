const menu = document.getElementsByClassName("menu");
const simpleButton = document.getElementById("simple");
const middleButton = document.getElementById("middle");
const hardButton = document.getElementById("hard");
const startButton = document.getElementById("start");
const menuScreen = document.getElementById("menuScreen");
const allButtonList = document.querySelectorAll(".menu__item");

const chooseLevel = (elem) => {
    allButtonList.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
}

allButtonList.forEach((item) => item.addEventListener("click", chooseLevel));




//simpleButton.addEventListener("click", chooseLevel);
//middleButton.addEventListener("click", chooseLevel);
//hardButton.addEventListener("click", chooseLevel);