#! /usr/bin/env node
import inquirer from "inquirer"

// Step:1 Computer will generate a random number

const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);

console.log(answers);

// Step:2 User input for guessing number

// Step:3 Compare user input with computer generated number and show result
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
    
}else{
    console.log("You guessed wrong number.");
    
}



