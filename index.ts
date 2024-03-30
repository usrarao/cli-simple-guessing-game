#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tCLI-Simple-GuessinG-Game\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 6):",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guess a right number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
