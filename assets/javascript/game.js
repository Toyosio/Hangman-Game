//Set Variables
var gameOn = ['long john silver', 'blackbeard', 'jack sparrow', 'captain hook', 'calico jack', 'captain kidd', 'captain morgan', 'madame ching'];
var wordToGuess = ""; //word to guess
var lettersInWord = []; //letters in each word
var correctGuess = []; //letter guessed correctly
var incorrectGuess = []; //letter guessed incorrectly
var wins = 0;
var loss = 0;
var spaces = 0; //spaces in words
var guessesLeft = 12; //guesses user has left
//var clue = ['long john silver clue', 'blackbeard clue', 'jack sparrow clue', 'captain hook clue', 'calico jack clue', 'captain kidd clue', 'captain morgan clue', 'madame cheng clue'];
var clue = ['Pegleg pirate with a parrot', 'Known for long dark beard', 'Fictional character in The Pirates of the Caribbean', 'Fictional character in Peter Pan', 'Known for his brightly colored clothing and creating the flag that became most recognized flags for all pirates', 'Privateer turned pirate who was publicly hanged for piracy', 'RUM', 'The pirate Queen of China']; //sentence that describes each words
var clueToGuess = ""; //clue associated with wordToGuess

//start/reset Game
function PickWord() {
  guessesLeft = 12;
  wordToGuess = gameOn[Math.floor(Math.random() * gameOn.length)];
  lettersInWord = wordToGuess.split("");
  spaces = lettersInWord.length;
  console.log(wordToGuess);
  incorrectGuess = [];
  correctGuess = [];

  //show blank spaces for words
  for (var i = 0; i < spaces; i++) {
    correctGuess.push("_");
  }
  console.log(correctGuess);
  document.getElementById('remainingGuesses').innerHTML = ("GUESSES LEFT: " + guessesLeft);
  document.getElementById('currentWord').innerHTML = ("CURRENT WORD: " + correctGuess);
  document.getElementById('UsersGuesses').innerHTML = ("LETTERS GUESSED: " + incorrectGuess);
}

//gives user a hint that is assigned to each wordToGuess; make hint change as wordToGuess changes
function showHint() {
  clueToGuess = clue[Math.floor(Math.random() * clue.length)];
 for (var i = 0; i < clue; i++) {
   if (correctGuess === wordToGuess) {
      clue++;
    }
   clueToGuess.push(" ");
  }
  document.getElementById("hint").innerHTML = ("HINT: " + clueToGuess);
};
console.log(clueToGuess);

//if player guesses correct letter, show letters in spaces and letters guessed
function playerGuesses(letter) {
  var lettersInWord = false;
  for (var i = 0; i < spaces; i++) {
    if (wordToGuess[i] === letter) {
      lettersInWord = true;
    }
  }
  if (lettersInWord) {
    for (var t = 0; t < spaces; t++) {
      if (wordToGuess[t] === letter) {
        correctGuess[t] = letter;
      }
    }
    //if guess is incorrect decrease guessesLeft
  } else {
    incorrectGuess.push(letter);
    guessesLeft--;
  }
}

//if player guesses word before player runs out of guesses add one wins play happy pirate music
function calculate() {
  document.getElementById('remainingGuesses').innerHTML = ("GUESSES LEFT: " + guessesLeft);
  document.getElementById('UsersGuesses').innerHTML = ("LETTERS GUESSED: " + incorrectGuess.join(" "));
  document.getElementById('currentWord').innerHTML = ("CURRENT WORD: " + correctGuess.join(" "));
  if (lettersInWord.toString() === correctGuess.toString()) {
    wins++;
    document.getElementById('wins').innerHTML = ("WINS: " + wins);
    alert('YO HO HO!!!');
    PickWord();
    showHint();
  }
  //if player runs out of guesses before winning add one losses play dangerous pirate music
  else if (guessesLeft === 0) {
    loss++;
    document.getElementById('loss').innerHTML = ("LOSSES: " + loss);
    alert('ARGHHH Hang im from the yard arm');
    PickWord();
    showHint();
  }
}

//call functions
PickWord();
showHint();

//initiate game
document.onkeydown = function(event) {
  var chosenLetter = String.fromCharCode(event.keyCode).toLowerCase();
  playerGuesses(chosenLetter);
  calculate();
};
