#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 10000;
let userAns = await inquirer.prompt([
    {
        name: "user",
        message: "Please Enter Your Pin",
        type: "number",
    },
]);
if (userAns.user === myPin) {
    console.log("Your pin code is correct");
    let operations = await inquirer.prompt([
        {
            name: "option",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw", "checkbalance"],
        },
    ]);
    if (operations.option === "withdraw") {
        let money = await inquirer.prompt([
            {
                name: "amountOpt",
                message: "How much money do you want to withdraw",
                type: "list",
                choices: ["2000", "5000", "8000", "10000"],
            },
        ]);
        if (money.amountOpt === "2000") {
            console.log("Your remaining amount is", myBalance - 2000);
        }
        else if (money.amountOpt === "4000") {
            console.log("Your remaining amount is", myBalance - 4000);
        }
        else if (money.amountOpt === "5000") {
            console.log("Your remaining amount is", myBalance - 5000);
        }
        else if (money.amountOpt === "8000") {
            console.log("Your remaining amount is", myBalance - 8000);
        }
        else if (money.amountOpt === "10000") {
            console.log("Your remaining amount is", myBalance - 10000);
        }
        else if (money.amountOpt > myBalance) {
            console.log("Enter a valid amount");
        }
    }
    else if (operations.option === "checkbalance") {
        console.log(myBalance);
    }
}
else {
    console.log("Invalid pin code");
}
