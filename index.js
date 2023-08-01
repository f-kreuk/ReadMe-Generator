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
      name: 'Installation',
      message: 'Provide step by step installation instructions for this project:',
    },
    // Below the list type is utilized for picklist values rather than text inputs
    {
      type: 'list',
      name: 'License',
      message: 'Provide the license type for this project:',
      choices: [
                "Apache license 2.0", 
                "Artistic license 2.0", 
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' license",
                "BSD 3-clause 'New' or 'Revised' license",
                "Creative Commons license family",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License",
                "Eclipse Public License 1.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU General Public License v3.0",
                "GNU Lesser General Public License v3.0",
                "ISC",
                "MIT",
                "Mozilla Public License 2.0",
                "SIL Open Font License 1.1",
                "The Unlicense",
                "zLib License",
                "Other"
        ]
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
    {
      type: 'input',
      name: 'GitHub',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your email address?',
    },
  ]);
};

 const generateReadMe = ({ Title, Description, Installation, License, Usage, Contributing, Tests, GitHub, Email }) =>
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
 
 [The following documentation page was utilized to understand the various license types in GitHub.](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
 
 [The following tutorial was utilized as a starting place for a professional ReadMe.](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

 [The following GitHub site was utilized for the license badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
 
 
 ## Contributing
 
 ${Contributing}
 
 If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
 
 
 ## Tests
 
 ${Tests}
 
 
 ## Questions

 To reach me with additional questions, please contact me at the following email address: ${Email}.

 To visit my GitHub profile, simply navigate using the following link: [GitHub](https://https://github.com/${GitHub}).`;


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
