var words = ["leonardo", "raphael", "donatello", "michaelangelo", "splinter", "april oneal", "shredder", "pizza", "nyc", "footclan", "casey jones", "krang",]

var computerChoice = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 14;

function Game() {
    computerChoice = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = computerChoice.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
    console.log(computerChoice);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}
function reset() {
    guessesRemaining = 14;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (computerChoice[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (computerChoice[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    wrongGuess.push(letter);
    guessesRemaining--;
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/Foot-Clan.jpg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}
Game()
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}