const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "Provide a brief description of yourself",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your position at work?",
        name: "job"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "location"
    },
    {
        type: "input",
        message: "please provide an web based image source?",
        name: "img"
    },
    {
        type: "checkbox",
        message: "What programing languages do you know?",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Node.js"],
        name: "languages"
    },
]).then(response => console.log(response))