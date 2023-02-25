     





      // function by which computer selects randomly between rock, paper and scissors.
      function getComputerChoice() {
        const array = ['rock', 'paper', 'scissors'];
        const result = array[Math.floor(Math.random()*array.length)];
        return result;
       }    
       

       
      
       function playerInput() {
        let choice = prompt("Please enter rock, paper or scissors (open the console to see results)");
       // where user inputs their choice
        let playerSelect = choice.toLowerCase();
       // converted user choice into all lowercase letters
       return playerSelect;
      }
        
      

      


       function playRound(playerSelection, computerSelection) {
       // your code here!
         
       // a single round of rock, paper, scissors

       if  (playerSelection === "rock" && computerSelection === "rock") {
        return ("It's a tie!");
      } 
       else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++
        return ("You win!! Rock beats scissors");
      } 
      else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You lose!! Paper beats rock");
      }
      else if (playerSelection === "paper" && computerSelection === "paper") {
        return ("It's a tie!");
      }
      else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++
        return ("You win!! Paper beats rock");
      }
      else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("You lose!! Scissors beats paper");
      }
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return ("It's a tie!");
      }
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You lose!! Rock beats scissors");
      }
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++
        return ("You win!! Scissors beats paper");
      }
    }
      let userScore = 0;
      let computerScore = 0;

      function game() {
      let playerSelection = playerInput();
      console.log("You: " + playerSelection);

      let computerSelection = getComputerChoice();
      console.log("Computer: " + computerSelection);

      console.log (playRound(playerSelection, computerSelection));
      console.log ("Your score: " + userScore);
      console.log ("Computer score: " + computerScore);

     }
     // function game in which player choice and computer choice is defined and logged as well as the score,
     // while calling the playRound function and consoole logging it

     
    

     if (userScore > computerScore) {console.log("You win the game! c:");}
     else if (computerScore > userScore) {console.log("You lose the game! :c");}
     else if (userScore === computerScore) {console.log("OH! It is a tie. :0");}
     // final result after the 5 rounds are over

     const btn1 = document.querySelector('#btn1');
     btn1.addEventListener('click',  () => {
        let computerSelection = getComputerChoice();
       console.log(playRound("rock", computerSelection));
      });

      const btn2 = document.querySelector('#btn2');
      btn2.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
       console.log(playRound("paper", computerSelection));
      });

      const btn3 = document.querySelector('#btn3');
      btn3.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
       console.log(playRound("scissors", computerSelection));
      });
