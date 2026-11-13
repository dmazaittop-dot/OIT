const userName = prompt("как вас зовут");
const newParagraphHTML =
    `<p class = "sovok par">привет, ${userName}!</p>`;
firstPar.insertAdjacentHTML('beforebegin', newParagraphHTML)
