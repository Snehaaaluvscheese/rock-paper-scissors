     





      // function by which computer selects randomly between rock, paper and scissors.
      function getComputerChoice() {
        const array = ['rock', 'paper', 'scissors'];
        const result = array[Math.floor(Math.random()*array.length)];
        return result;
       }    
       

       
      
      
        
      

      


       function playRound(playerSelection, computerSelection) {
       // your code here!
         
       // a single round of rock, paper, scissors

       if  (playerSelection === "rock" && computerSelection === "rock") {
        div.textContent = "It's a tie!";
      } 
       else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++
        div.textContent = "You win!! Rock beats scissors";
      } 
      else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        div.textContent = "You lose!! Paper beats rock";
      }
      else if (playerSelection === "paper" && computerSelection === "paper") {
        div.textContent = "It's a tie!";
      }
      else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++
        div.textContent = "You win!! Paper beats rock";
      }
      else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        div.textContent = "You lose!! Scissors beats paper";
      }
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
        div.textContent =  "It's a tie!";
      }
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        div.textContent = "You lose!! Rock beats scissors";
      }
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++
        div.textContent = "You win!! Scissors beats paper";
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

     
    

     

     const btn1 = document.querySelector('#btn1');
     btn1.addEventListener('click',  () => {
        let computerSelection = getComputerChoice();
        (playRound("rock", computerSelection));
      });

      const btn2 = document.querySelector('#btn2');
      btn2.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        (playRound("paper", computerSelection));
      });

      const btn3 = document.querySelector('#btn3');
      btn3.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        (playRound("scissors", computerSelection));
      });


      const container = document.querySelector('#container');
      const div = document.createElement('div');
  
     container.appendChild(div);
