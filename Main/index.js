// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a description of your project. For example, what was your motivation, why did you build this project, what problem does it solve, and what did you learn?',
    },
    {
      type: 'input',
      name: 'Installaton',
      message: 'Provide step by step installation instructions for this project:',
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
  ]);
};

 const generateReadMe = ({ Title, Description, Installation, License, Usage, Contributing, Tests }) =>
 `# ${Title}

 // badge placeholder ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

 
 ## Description
 
 ${Description}
 
 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Credits](#credits)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 
 ## Installation
 
 ${Installation}
 
 ## Usage
 
 ${Usage}
 
 // placeholder for video
 
 // placeholder for screenshots
 
     ![alt text](assets/images/screenshot.png)
 
 ## License
 
 ${License}
 
 Information about the specific license selected [shields.io](https://shields.io/).
 
 
 ## Credits
 
 The following documentation page was utilized to understand the various license types in GitHub: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
 
 The following tutorial was utilized as a starting place for a professional ReadMe: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
 
 
 ## Contributing
 
 ${Contributing}
 
 If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
 
 
 ## Tests
 
 ${Tests}`;


// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    promptUser()

    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
