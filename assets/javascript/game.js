var game= ["two","Siriba","Jared","Coding", "Minnesota","Bootcamp", "Super","Orange","County"].map(game => game.toLowerCase());
var currentWord = game[Math.floor(Math.random() * game.length)];
var dispalyCurrentWord = [currentWord.length];
var Wins = 0; 
var currentWordCharacters = currentWord.split(''); // an array of the characters of the randomly selected word 
var attemptsLeft = 15;
var blankDashes =""; // to display the blank and dashes
var guessedLetter ="";
var winCounter = currentWord.length;
var guessedLettersArray = [];

console.log(game);
console.log('current word:',currentWord);
console.log('display currentword: ',dispalyCurrentWord);

console.log("wins: ",Wins);
console.log('currnt word characters: ',currentWordCharacters);
console.log('attempts left: ',attemptsLeft);
console.log('blank dashes: ',blankDashes);
console.log('guessed letter: ',guessedLettersArray);


function resetGame(){
    game= ["two","Siriba","Jared","Coding", "Minnesota","Bootcamp", "Super","Orange","County"].map(game => game.toLowerCase());
    currentWord = game[Math.floor(Math.random() * game.length)];
    dispalyCurrentWord = [currentWord.length];
    currentWordCharacters = currentWord.split(''); // an array of the characters of the randomly selected word 
    attemptsLeft = 15;
    blankDashes =""; // to display the blank and dashes
    guessedLetter ="";
    winCounter = currentWord.length;
    guessedLettersArray = [];
    console.log(game);
    console.log('current word:',currentWord);
    console.log('display currentword: ',dispalyCurrentWord);
    console.log("wins: ",Wins);
    console.log('currnt word characters: ',currentWordCharacters);
    console.log('attempts left: ',attemptsLeft);
    document.getElementById("guessesRemaining").innerHTML = attemptsLeft;
    console.log('blank dashes: ',blankDashes);
    console.log('guessed letter: ',guessedLettersArray);
    document.getElementById("letterGuessed").innerHTML = guessedLettersArray;


    for (let i=0; i<currentWord.length; i++){
        dispalyCurrentWord[i]= "_ ";
        blankDashes = blankDashes + dispalyCurrentWord[i];
        
    }
    console.log("the random word is : ",blankDashes);
    document.getElementById("currentWord").innerHTML= blankDashes;

}
document.body.onload = resetGame();


function checkGuessedLetter(key) {
    if (guessedLettersArray.length >0) {
        for (let index = 0; index < guessedLettersArray.length; index++) {
            if (guessedLettersArray[index] === key) {
                return 1;
            } else {
                return 0;
            }
        }
    }

}

// code the keyhandler here :loop the random word character array to compare the key with the current letter in that array
const keyHandler = function (event) {
    blankDashes = "";
    const key = event.key;
    // check if the pressed key is alreadby been guessed

    for (let j = 0; j < currentWord.length; j++) {
        if (key === currentWordCharacters[j]) {
            dispalyCurrentWord[j] = key;
            winCounter--;
        }
        blankDashes = blankDashes + dispalyCurrentWord[j];

    }
    guessedLettersArray.push(key);
    attemptsLeft--;
    console.log("New output display with guessed letters : ", blankDashes);
    document.getElementById("currentWord").innerHTML= blankDashes;
    console.log("attempts left:", attemptsLeft);
    document.getElementById("guessesRemaining").innerHTML = attemptsLeft;
    console.log("win counter", winCounter);
    console.log("The guessed letters:", guessedLettersArray);
    // document.getElementById("letterGuessed").innerHTML = guessedLettersArray;
    document.getElementById("letterGuessed").append(" ",key);
    // check if all letters guessed right.  
    if (attemptsLeft < 1 && winCounter > 0) {
        console.log("you loose the game");
        resetGame();
    } else if (winCounter < 1 && attemptsLeft > 0) {
        Wins++;
        // play sound when win occurs 
        var audio = new Audio('assets/images/Wingame.m4a');
        audio.play();
        console.log("You win : ", Wins);
        document.getElementById("Wins").innerHTML = Wins;
        resetGame();
    }else{
        "You loose the game";
    }
    
}




// play the game
document.onkeyup = keyHandler;
