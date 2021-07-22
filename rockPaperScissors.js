const isValidInput = userInput => {
  let isValid = userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors' || userInput.toLowerCase() === 'bomb';

  return isValid ? true : false ;
} ;

const getUserChoice = userInput => {
 if (isValidInput(userInput)) {
   return userInput.toLowerCase();
 } else {
   console.log('Error!');
 }
};

const getComputerChoice = () => {
  // get random number between 0 and 2
  let choice = Math.floor(Math.random() * 3);
  // base on the number make a choice
  if(choice === 0){
    return 'rock';
  } else if (choice === 1){
    return 'paper';
  } else{
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb'){
    return 'User Won! explosive';
  }
  if (userChoice === computerChoice){
    return 'The game is a tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'User Lost!';
    } else{
      return 'User won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'User Lost!';
    } else{
      return 'User won';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'User Lost!';
    } else{
      return 'User won';
    }
  }
} 
// 

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  
  console.log(`user choice: ${userChoice}, computer choice: ${computerChoice}`);

  console.log(determineWinner(userChoice,computerChoice));
}

playGame();