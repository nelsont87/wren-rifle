var userChoice = prompt("Guess the gender of the puppy! (m/f)");
var computerChoice = Math.random();
if (computerChoice < 0.51) {
  computerChoice = "s";
} else {
  computerChoice = "l";
} 
console.log("Computer: " + computerChoice);

var compare=function(choice1,choice2) {
    if (choice1===choice2) {
        return"The result is a tie!";
    }
    else if (choice1==="s") {
        if (choice2==="l") {
            return"s wins";
        }else {
            return"m wins";
        }
    }
    else if (choice1==="m") {
        if (choice2==="s") {
            return"m wins";
        } else {
            return"l wins";
        }
    }
    else {
        if (choice2==="s") {
            return"s wins";
        } else {
            return"l wins";
        }
    }
}
compare(userChoice,computerChoice)