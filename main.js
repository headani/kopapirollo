class Game
{
    constructor(chosen) {
        this.#userInput(chosen);
    } 

    #win()
    {
        document.getElementById("winner").innerText = "Nyertél!";
        document.getElementById("your-score").innerText = parseInt(document.getElementById("your-score").innerText) + 1;
    }
    
    #draw()
    {
        document.getElementById("winner").innerText = "Döntetlen!";
    }

    #lose()
    {
        document.getElementById("winner").innerText = "Vesztettél!";
        document.getElementById("computer-score").innerText = parseInt(document.getElementById("computer-score").innerText) + 1;
    }

    #rockPaperScissors() {
        const chosen = Math.floor(Math.random() * 3 + 1);
        if (chosen == 1) {
            document.getElementById("computer-chose").innerText = "A gép Követ mutatott!";
            return "Rock";
        } 
        else if (chosen == 2) {
            document.getElementById("computer-chose").innerText = "A gép Papírt mutatott!";
            return "Paper";
        } 
        else if (chosen == 3) {
            document.getElementById("computer-chose").innerText = "A gép Ollót mutatott!";
            return "Scissors";
        }
    }

    #userInput(input) {
        const chosen = this.#rockPaperScissors();

        if (input == "Rock") {
            document.getElementById("you-chose").innerText = "Követ mutattál.";
            if (chosen == "Rock") {
                this.#draw();
            } 
            else if (chosen == "Paper") {
                this.#lose();
            } 
            else if (chosen == "Scissors") {
                this.#win();
            }
        }
        else if (input == "Paper") {
            document.getElementById("you-chose").innerText = "Papírt mutattál.";
            if (chosen == "Rock") {
                this.#win();
            } 
            else if (chosen == "Paper") {
                this.#draw();
            } 
            else if (chosen == "Scissors") {
                this.#lose();
            }
        } 
        else if (input == "Scissors") {
            document.getElementById("you-chose").innerText = "Ollót mutattál.";
            if (chosen == "Rock") {
                this.#lose();
            } 
            else if (chosen == "Paper") {
                this.#win();
            } 
            else if (chosen == "Scissors") {
                this.#draw();
            }
        } 
    }
}
