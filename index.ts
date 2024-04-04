#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
  {
    message: "Enter First Number",
    type: "number",
    name: "firstNum",
  },
  {
    message: "Enter Second Number",
    type: "number",
    name: "secondNum",
  },
  {
    message:"Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statement 
if (answer.operator === "Addition"){
  console.log(answer.firstNum + answer.secondNum );
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNum - answer.secondNum );
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNum * answer.secondNum );
} else if (answer.operator === "Division") {
  console.log(answer.firstNum / answer.secondNum );
} else {
  console.log("Please select a valid operator")
}