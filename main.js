function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
        return userInput;
    } else {
        console.log('Please choose rock, paper, or scissors.');
    }
}
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    } else {
        console.log('ERROR');
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tied match';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'bomb')
    ) {
        return 'User wins';
    } else {
        return 'Computer wins';
    }
}
function playGame() {
    let userChoice = getUserChoice('bOmB');
    console.log(`User: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
