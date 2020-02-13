var words = ["leonardo", "raphael", "donatello", "michaelangelo", "splinter", "april oneal", "shredder", "pizza", "nyc", "footclan", "casey jones", "krang","ooze"]

var computerChoice = "";
var letterChoice = []
var empty = 0;
var lettersCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var numberRemain = 14;

function Game() {
    computerChoice = words[Math.floor(Math.random() * words.length)];
    letterChoice = computerChoice.split("");
    empty = letterChoice.length;
    for (var i = 0; i < empty; i++) {
        lettersCorrect.push("_");
    }
    document.getElementById("wordGuess").textContent = "  " + lettersCorrect.join("  ");
    console.log(computerChoice);
    console.log(letterChoice)
    console.log(empty)
    console.log(lettersCorrect)
}
function reset() {
    numberRemain = 14;
    wrongGuess = [];
    lettersCorrect = [];
    Game()
}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < empty; i++) {
        if (computerChoice[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < empty; i++) {
            if (computerChoice[i] == letter) {
                lettersCorrect[i] = letter;
            }
        }
    }
    wrongGuess.push(letter);
    numberRemain--;
    console.log(lettersCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + numberRemain)
    if (letterChoice.toString() == lettersCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").textContent = " " + wins;
    } else if (numberRemain === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/Foot-Clan.jpg"
        document.getElementById("losestracker").textContent = " " + losses;
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
    document.getElementById("userguess").textContent = "  " + wrongGuess.join(" ");
}