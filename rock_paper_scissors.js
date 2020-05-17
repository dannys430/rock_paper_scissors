// choices
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    const options = ['rock', 'paper', 'scissors', 'bomb'];
    if (options.includes(userInput)) {
        return userInput;
    } else {
        console.log(`please enter either 'rock', 'paper', or 'scissors'`)
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const options = ['rock', 'paper', 'scissors'];
    return (options[randomNumber]);
}

// winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'the game was a tie';

    if (userChoice === 'rock') {
        return (computerChoice === 'paper' ? 'computer won!' : 'user won!');
    }

    if (userChoice === 'paper') {
        return (computerChoice === 'rock' ? 'user won!' : 'computer won!');
    }

    if (userChoice === 'scissors') {
        return (computerChoice === 'rock' ? 'computer won!' : 'user won!');
    }

    if (userChoice === 'bomb') return 'user won!';
}

// play
function playGame(choice) {
    let userChoice = getUserChoice(choice);
    console.log(`User: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer: ${computerChoice}`);
    console.log()
    console.log(determineWinner(userChoice, computerChoice));
}

// playGame('bomb');