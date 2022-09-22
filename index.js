// TODO: Include packages needed for this application
const fs = require("fs");


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
        message: "What kind of license is applicable for your README?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What contributing tests are applicable for your README?",
    },
    {
        type: 'input',
        name: 'questions',
        message: "Are there any questions you would like to include on your README?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
