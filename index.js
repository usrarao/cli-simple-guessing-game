#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("\n\tWellcome to codewithamber - CLI Number Guessing Game\n");
var randomNumber = Math.floor(Math.random() * 6 + 1);
var answers = await inquirer_1.default.prompt([
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
