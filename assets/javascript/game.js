var words = ["leonardo", "raphael", "donatello", "michaelangelo", "splinter", "april oneal", "shredder", "pizza", "nyc", "footclan", "casey jones", "krang","ooze"]
var computerChoice = "";
var userGuess = [];
var wins = 0;
var losses = 0;
var numberRemain = 14;
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
    numberRemain = 14;
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
        restart()
        document.getElementById("winingtracker").textContent = " " + wins;
    } else if (numberRemain === 0) {
        losses++;
        restart()
        document.getElementById("image").src = "./assets/images/Foot-Clan.jpg"
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