// the game logic

const choices = ["rock", "paper", "scissors"];

const playerScore = document.getElementById("player_choice")
const computerScore = document.getElementById("computer_choice")
const result = document.getElementById("score")
const body = document.body
const scoreBoard = document.getElementById("scoreDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScoreCount = 0
let computerScoreCount = 0


const playgame = (player_choice) => {
    const computer_choice = choices[Math.floor(Math.random() * choices.length)]
    body.classList.remove("greenBackground", "redBackground", "brownBackground")
    
    let score = ""

    if(player_choice === computer_choice){
        score = "It's a tie!"
    }
    else{
        switch(player_choice){
            case "rock":
                score = computer_choice === "scissors" ? "You win!" : "You lose!"
                break
            case "paper":
                score = computer_choice === "rock" ? "You win!" : "You lose!"
                break
            case "scissors":
                score = computer_choice === "paper" ? "You win!" : "You lose!"
                break
        }
    }

    playerScore.textContent = `Player: ${player_choice}`;
    computerScore.textContent = `Computer: ${computer_choice}`;
    result.textContent = score

    switch(score){
        case "You win!":
            body.classList.add("greenBackground") 
            playerScoreCount++
            playerScoreDisplay.textContent = playerScoreCount
            break
        case "You lose!":
            body.classList.add("redBackground")
            computerScoreCount++
            computerScoreDisplay.textContent = computerScoreCount
            break
        case "It's a tie!":
            body.classList.add("brownBackground")
            break
                
            
    }
}

window.playgame = playgame;
