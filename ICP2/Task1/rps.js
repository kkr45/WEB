//enter your choice
var youChoose = prompt("Do you choose rock or paper or scissors?");
if (! youChoose) {
    document.write("<p>worng choice is selected .</p>");
} else {
    document.write("<p>Player 1:" + " " + youChoose + "</p>");
}
var computer = Math.random();
if (computer < 0.33) {
    computer = "rock";
} else if(computer <= 0.66) {
    computer = "paper";
} else {
    computer = "scissors";
}
// Display computer choice
document.write("<p>Computer:" + " " + computer + "</p>");
var compare = function(c1,c2) {
    if (c1 === c2) {
        return "It's a tie!";
    }
    if (c1 === "rock") {
        if (c2 === "scissors") {
            return "You won!";
        } else {
            return "You lose!";
        }
    }
    if (c1 === "paper") {
        if (c2 === "rock") {
            // paper wins
            return "You won!";
        } else {
            // scissors wins
            return "You lose!";
        }
    }
    if (c1 === "scissors") {
        if (c2 === "rock") {
            // rock wins
            return "You lose!.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};
var results = compare(youChoose,computer);
//writing back to html
document.write("<br><br>" + results);