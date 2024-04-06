let choices = document.querySelectorAll(".choice")
let displayMessege = document.querySelector("#msg")
let displayPlayerScore = document.querySelector("#your-score")
let displayComputerScore = document.querySelector("#computer-score")
let displayComputerChoice = document.querySelector("#computer-choice")

const choiceArray = ["Rock", "Paper", "Scissor"]

let playerScore = 0
let computerScore = 0
let computerChoice

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        computerChoice = parseInt(Math.random() * 3 + 1)
        const choiceId = choice.getAttribute("id")
        let result 
        if (choiceId === "rock") {
            result = playGame(1)
        }
        else if (choiceId === "paper") {
            result = playGame(2)
        }
        else {
            result = playGame(3)
        }

        compChoose(choiceArray[computerChoice-1])
        displayResult(result)
        console.log(choiceArray[computerChoice-1])
        console.log(choiceId)
        

    })
})

const compChoose = (value) => {
    if (value === "Rock") {
        displayComputerChoice.innerText = "Computer Choose: Rock"
        displayComputerChoice.style.backgroundColor = "pink"
    }
    else if (value === "Paper") {
        displayComputerChoice.innerText = "Computer Choose: Paper"
        displayComputerChoice.style.backgroundColor = "blueviolet"
    }
    else {
        displayComputerChoice.innerText = "Computer Choose: Scissor"
        displayComputerChoice.style.backgroundColor = "rgb(4, 135, 249)"
    }
}


const playGame = (userChoice) => {
    if (userChoice === 1 ) {
        if (computerChoice === 1) return 0
        else if (computerChoice === 2) return -1
        else return 1
    }
    else if (userChoice === 2) {
        if (computerChoice === 1) return 1
        else if (computerChoice === 2) return 0
        else return -1
    }
    else {
        if (computerChoice === 1) return -1
        else if (computerChoice === 2) return 1
        return 0
    }
}


const displayResult = (result) => {
    if (result === 1) {
        displayMessege.innerText = "Your Win , Play again"
        displayMessege.style.backgroundColor = "green"
        playerScore++
        displayPlayerScore.innerText = playerScore
    }
    else if (result === -1) {
        displayMessege.innerText = "Your loss, Play again"
        displayMessege.style.backgroundColor = "red"
        computerScore++
        displayComputerScore.innerText = computerScore
    }
    else {
        displayMessege.innerText = "Draw, Play again"
        displayMessege.style.backgroundColor = "grey"

    }
}

