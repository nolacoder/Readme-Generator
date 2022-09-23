// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What would you like your README description to be?",
    },
    {
        type: 'input',
        name: 'install',
        message: "What are the installation instructions for your README?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information for your README?",
    },
    {
        type: 'input',
        name: 'license',
        message: "What type of license is applicable for your README?",
    },
    {
        type: 'input',
        name: 'contrib',
        message: "Please provide guidelines for developers who may wish to contribute:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please explain any test related information associated with your application:",
    },
    {
        type: 'input',
        name: 'quest_git',
        message: "Please enter your Github username so that users can reach you with questions:",
    },
    {
        type: 'input',
        name: 'quest_email',
        message: "Please enter your email so that users can reach you with questions:",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => generateMarkdown(answers))
        .then((data) => writeToFile("test.md", data))
}

// Function call to initialize app
init();
