var words = ["leonardo", "raphael", "donatello", "michaelangelo", "splinter", "april", "shredder", "pizza", "footclan", "casey","ooze"]
var computerChoice = "";
var userGuess = [];
var wins = 0;
var losses = 0;
var numberRemain = 10;
var letterChoice = []
var lettersCorrect = [];
var play = 0;

function Game() {
    computerChoice = words[Math.floor(Math.random() * words.length)];
    letterChoice = computerChoice.split("");
    play = letterChoice.length;
    for (var i = 0; i < play; i++) {
        lettersCorrect.push("_");
    }
    document.getElementById("wordGuess").textContent = "  " + lettersCorrect.join("  ");
    console.log(computerChoice);
    console.log(letterChoice)
    console.log(play)
    console.log(lettersCorrect)
}
function restart() {
    numberRemain = 10;
    userGuess = [];
    lettersCorrect = [];
    Game()
}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < play; i++) {
        if (computerChoice[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < play; i++) {
            if (computerChoice[i] == letter) {
                lettersCorrect[i] = letter;
            }
        }
    }
    userGuess.push(letter);
    numberRemain--;
    console.log(lettersCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + numberRemain)
    if (letterChoice.toString() == lettersCorrect.toString()) {
        wins++;
        audio()
        restart()
        document.getElementById("winingtracker").textContent = " " + wins;
    } else if (numberRemain === 0) {
        losses++;
        restart()
        document.getElementById("image").src = "./assets/images/Foot-Clan.jpg";
        document.getElementById("losingtracker").textContent = " " + losses;
    }
    document.getElementById("wordGuess").textContent = "  " + lettersCorrect.join(" ");
    document.getElementById("numberRemain").textContent = " " + numberRemain;
}
Game()
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("userguess").textContent = "  " + userGuess.join(" ");
}
// BONUS Audio 
var leo = document.getElementById("leonardo");
var raph = document.getElementById("raphael");
var don = document.getElementById("donatello");
var mikey = document.getElementById("michaelangelo");
var rat = document.getElementById("splinter");
var april = document.getElementById("april");
var loser = document.getElementById("shredder");
var pizza = document.getElementById("pizza");
var casey = document.getElementById("casey");
var foot = document.getElementById("footclan");
var ooze = document.getElementById("ooze");

function audio() {
    if (computerChoice === words[0]) {
        leo.play();
        document.getElementById("image").src = "./assets/images/Leonardo.jpg";
    }
    else if (computerChoice === words[1]){
        raph.play();
        document.getElementById("image").src = "./assets/images/raphael.jpg";
    }
    else if (computerChoice === words[2]){
        don.play();
        document.getElementById("image").src = "./assets/images/donatello.jpg";
    }
    else if (computerChoice === words[3]){
        mikey.play();
        document.getElementById("image").src = "./assets/images/Mickey.png";
    }
    else if (computerChoice === words[4]){
        rat.play();
        document.getElementById("image").src = "./assets/images/Splinter.jpg";
    }
    else if (computerChoice === words[5]){
        april.play();
        document.getElementById("image").src = "./assets/images/April.jpg";
    }
    else if (computerChoice === words[6]){
        loser.play();
        document.getElementById("image").src = "./assets/images/shredder.png";
    }
    else if (computerChoice === words[7]){
        pizza.play();
        document.getElementById("image").src = "./assets/images/pizza.gif";
    }
    else if (computerChoice === words[9]){
        casey.play();
        document.getElementById("image").src = "./assets/images/Casey.jpg";
    }
    else if (computerChoice === words[8]){
        foot.play();
        document.getElementById("image").src = "./assets/images/foot.jpg";
    }
    else if (computerChoice === words[10]){
        ooze.play();
        document.getElementById("image").src = "./assets/images/ooze.jpg";
    }
} 

