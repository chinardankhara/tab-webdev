var randomNumber1 = 1 + Math.floor(Math.random() * 6)
var randomNumber2 = 1 + Math.floor(Math.random() * 6)

var randomImage1 = "images/dice" + randomNumber1 + ".png"
var randomImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelector("body .img1").src = randomImage1;
document.querySelector("body .img2").src = randomImage2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#x1F6A9; Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#x1F6A9;"
}