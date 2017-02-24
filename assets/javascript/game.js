// Global variables
// ==========================================================
// Arrays and variables
var wordOptions = ["matt", "kim", "tom", "travis", "chino", "davey"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions
// ==========================================================
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
	lettersinWord = selectedWord.split("")
	numBlanks = lettersinWord.length;

	// Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with right number of blanks
	for (var i = 0; i<numBlanks; i++) {
		blanksAndSuccesses.push("_")
		}

	// Change HTML to reflect game conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	// testing/debugging
	console.log(selectedWord);
	console.log(lettersinWord)
	console.log(numBlanks)
	console.log(blanksAndSuccesses)
}	

function checkLetters (letter) {
	// check if letter is in code
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
			alert ("letter found!")
		}
	}

// check where in the word the letter exits
	for (var i = 0; i<numBlanks; i++){
		if (selectedWord[i] == letter){
			blanksAndSuccesses[i] = letter;
		}

		// letter wasn't found
	else {
		wrongLetters.push(letter);
		guessesLeft--;
		console.log(blanksAndSuccesses)
}
}


}
function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft)
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.toString;
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join (" ")
}

// Check if user won
if (lettersinWord.toString() == blanksAndSuccesses.toString()){
	winCounter++;
	alert("Win!");

// Update counter in HTML
	document.getElementById("winCounter").innerHTML = winCount
	startGame();
}
else if (guessesLeft=0){
	lossCount++;
	alert("lost!");

// Update HTML
	document.getElementById("lossCounter").innerHTML = lossCount;

}
// Check if user lost


// Main Process
// ==========================================================
// initiates code the first time

startGame();

// keyclicks
document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	
	// Testing/debugging
	console.log(letterGuessed)
}























