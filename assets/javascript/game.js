var gameOn = ['Long John Silver' , 'Blackbeard' , 'Jack Sparrow' , 'Captain Hook' , 'Calico Jack' , 'Captian Kidd' , 'Captain Morgan' , 'Madame Cheng' ];
var wins; //words user guessed correctly
var spaces= ""; // spaces in words
var totalGuesses=0;
var guessesLeft = 0; //guesses user has left
var lettersGuessed=null; // stores letters user guessed
var correctLetter;//letter guessed correctly
var counter; //keeps track of correct GUESSES
var wordToGuess; //word to guess
var lettersInWord; //letters in each word
var clue; //sentence that describes each words

//set elements
var showGuessesLeft = document.getElementById('#remainingGuesses');
var showClue = document.getElementById('#hint')
var showSpaces = document.getElementById('#space')

//begin game
window.onload = function startGame () {
//load each word
//function startGame()

   //return gameOn[Math.floor(Math.random() * gameOn.length)];
   //}
//function showSpaces() {
   //var spaces="";
   //for (var i = 0; i < gameOn.length; i++) {
      //gameOn += '__';
//   }
}
