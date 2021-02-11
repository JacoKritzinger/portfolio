// var Button = document.getElementById("Button");
// Button.addEventListener('click', startGame);



// function startGame(answer) {
//     if (secret > 7) {
//         theOutput += "<p>try Incorrect, too high”!</p>";
//     } else if (secret < 7) {
//         theOutput += "<p>try Incorrect, too low!</p>";
//     } else {
//         theOutput += "<p>Correct!</p>";
//     }
// }

var secret = Math.floor(Math.random() * 10) + 1;

var Button = document.getElementById("StartButton");
Button.addEventListener("click", Guessthenumber);

function Guessthenumber() {
    var guess = parseInt(prompt("Guess a number from 1 to 10."));
    checkAnswer(guess);
}

function checkAnswer(guess) {
    var active = true;
    while (active) {
        if (guess > secret) {
            alert("it is wrong the guess is to high!");
            Guessthenumber();
        } else if (guess < secret) {
            alert("it is wrong the quess is to low!");
            guessthenumber();
        } else if (guess === secret) {
            alert("Correct! your guess " + guess + " is correct.");
            active = false
                // document.getElementById("myTxt").innerHTML = "YOU WONNN!!";
        } else {
            alert("invalid input!");
            Guessthenumber();

        }

    }
}