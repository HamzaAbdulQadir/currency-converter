#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.82,
    INR: 74.5,
    PKR: 280.1
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "please enter from currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "please enter to currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "please enter amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertamount = toAmount * baseAmount;
console.log(convertamount);
