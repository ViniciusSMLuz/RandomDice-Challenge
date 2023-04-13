var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "/images" + randomDiceImage;

Document.querySelectorAll("img")[0];

image1.setAttribute("scr", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

Document.querySelectorAll("img")[1].setAttribute("scr", randomImageSource2);

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 ganhou!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1") = "Player2 ganhou!";
}else{
    document.querySelector("h1") = "É um impate!";
    }