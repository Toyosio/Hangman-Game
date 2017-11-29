var gameOn = ['Long John Silver' , 'Blackbeard' , 'Jack Sparrow' , 'Captain Hook' , 'Calico Jack' , 'Captian Kidd' , 'Captain Morgan' , 'Madame Cheng' ];
var wins = 0;
var loss = 0;
var spaces= ""; //spaces in words and correct guess
var incorrectLetter = [];
var guessesLeft = 12; //guesses user has left
var correctGuess = []; //letter guessed correctly
var incorrectGuess = []; //letter guessed incorrectly
var counter; //keeps track of correct guesses
var wordToGuess =""; //word to guess
var lettersInWord = []; //letters in each word
var clue; //sentence that describes each words

//set elements to innerHTML
document.getElementById('currentWord').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('remainingGuesses').innerHTML = guessesLeft;
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('loss').innerHTML = loss;
	document.getElementById('UsersGuesses').innerHTML = incorrectGuess;

	//test
	console.log(gameOn);
	console.log(lettersInWord);
	console.log(spaces);
	console.log(correctGuess);

//resets game
function reset () {
wordToGuess = gameOn[Math.floor(Math.random() * gameOn.length)];
lettersInWord = wordToGuess.split('');
spaces = lettersInWord.length;

guessesLeft = 12;
incorrectGuess = 0;
correctGuess = 0;
startGame();
}

//Pick a random words
function startGame() {
  wordToGuess = gameOn[Math.floor(Math.random() * gameOn.length)];
  lettersInWord = wordToGuess.split('');
  spaces = lettersInWord.length;
  guessesLeft = 12;
  incorrectGuess = 0;
  correctGuess = 0;
  var wins = 0;
  var loss = 0;
}

//show blank spaces for words
for(var i = ; i< spaces; i++) {
  correctGuess.push('__');
  document.getElementById('currentWord').innerHTML = correctGuess;
}

//if player guesses correct letter, show letters in spaces and letters guessed
function playerGuesses(userKey) {

if(wordToGuess.index(userKey) > -1)
{
  for(var i = 0; i< spaces; i++)
  {
    if(lettersInWord[i] === userKey)
    {

    correctGuess++;
    spaces[i] = userKey;
    document.getElementById('currentWord').innerHTML = spaces.join(' ');
  }
}
console.log(spaces);
}

//if player guesses incorrect letter show letter in user guesses; for each letter guessed take decrease guesses left
else {
  incorrectLetter.push(userKey);
  guessesLeft--;
  document.getElementById('remainingGuesses').innerHTML = guessesLeft;
  document.getElementById('UsersGuesses').innerHTML = incorrectGuess;
}
}

//if player guesses word before player runs out of guesses add one wins play happy pirate music



//if player runs out of guesses before winning add one losses play dangerous pirate music



//when we run out of words alet
