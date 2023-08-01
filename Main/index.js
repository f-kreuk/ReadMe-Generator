// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'Installaton',
      message: 'Provide installation instructions for this project:',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Provide the license type for this project:',
      },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide usage information for this project:',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Provide the contribution guidelines for this project:',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Provide the test instructions for this project:',
    },
  ])
 // .then((answers) => {
 //   const htmlPageContent = generateHTML(answers);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
