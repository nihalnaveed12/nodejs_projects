#! /usr/bin/env/ node
import inquirer from "inquirer";
export const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operator",
    },
]);
let state = "Your value is";
if (answer.operator === "Addition") {
    console.log(state, answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(state, answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(state, answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(state, answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid operator");
}
