
function getComputerChoice() {
    const choice=["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];
}


function getHumanChoice() {
     const choice = prompt ("Input your choice: ");
     return choice;
}

function playGame() {

    console.log("Selamat datang ke permainan batu gunting kertas");

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

        if (human === computer) {
            console.log(`Ini seri! kekduanya memilih ${human}`)
        }

        else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            humanScore++;
            console.log(`Kamu menang! ${human} ngalahin ${computer}`);
        }
        else {
            computerScore++;
            console.log(`Kamu kalah! ${computer} ngalahin ${human}` );
        }

    }

    for(let i  = 1; i <= 5; i ++) {

        console.log(`---ROUND SAAT INI ${i}---`)

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`skor saat sementara kamu: ${humanScore} | komputer; ${computerScore}`);

    }

    console.log("===============================");
    if (humanScore > computerScore) {
        console.log("SELAMAT! KAMU MEMENANGKAN GAME INI!");
    } else if (computerScore > humanScore) {
        console.log("YAHH! KOMPUTER MENANG. COBA LAGI!");
    } else {
        console.log("GAME BERAKHIR SERI!");
    }

}

playGame();
