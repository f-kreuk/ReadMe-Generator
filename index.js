// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// let LicenseObject = License.find(o => o.license === License);
// console.log(LicenseObject);

//function getLicenseWebsite (License) {
 // licenses.license.find(License) =>
  //return website;
  
  //take the license that is passed in and search array of objects for object's index, then you return license[0].badge and license[0].website
//}


// function getLicenseBadge (License) {
//   licenses.license.find(License) =>
//   return badge;

//   //take the license that is passed in and search array of objects for object's index, then you return license[0].badge and license[0].website
// }


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

// Below is the array of objects that stores information about each license selection

const licenses = [
  {
    "license": "Apache license 2.0",
    "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "website": "https://opensource.org/licenses/Apache-2.0",
  },
  {
    "license": "Artistic license 2.0",
    "badge": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "website": "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    "license": "Boost Software License 1.0",
    "badge": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "website": "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    "license": "BSD 2-clause 'Simplified' license",
    "badge": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "website": "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    "license": "BSD 3-clause 'New' or 'Revised' license",
    "badge": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "website": "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    "license": "Creative Commons license family",
    "badge": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "website": "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    "license": "Creative Commons Zero v1.0 Universal",
    "badge": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "website": "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    "license": "Creative Commons Attribution 4.0",
    "badge": "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",
    "website": "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    "license": "Creative Commons Attribution Share Alike 4.0",
    "badge": "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)",
    "website": "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    "license": "Do What The F*ck You Want To Public License",
    "badge": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    "website": "http://www.wtfpl.net/about/",
  },
  {
    "license": "Eclipse Public License 1.0",
    "badge": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "website": "https://opensource.org/licenses/EPL-1.0",
  },
  {
    "license": "GNU Affero General Public License v3.0",
    "badge": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "website": "https://www.gnu.org/licenses/agpl-3.0",
  },
  {
    "license": "GNU General Public License v2.0",
    "badge": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    "website": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    "license": "GNU General Public License v3.0",
    "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "website": "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    "license": "GNU Lesser General Public License v3.0",
    "badge": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "website": "https://www.gnu.org/licenses/lgpl-3.0",
  },
  {
    "license": "ISC",
    "badge": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "website": "https://opensource.org/licenses/ISC",
  },
  {
    "license": "MIT",
    "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "website": "https://opensource.org/licenses/MIT",
  },
  {
    "license": "Mozilla Public License 2.0",
    "badge": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "website": "https://opensource.org/licenses/MPL-2.0",
  },
  {
    "license": "SIL Open Font License 1.1",
    "badge": "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "website": "https://opensource.org/licenses/OFL-1.1",
  },
  {
    "license": "The Unlicense",
    "badge": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "website": "http://unlicense.org/",
  },
  {
    "license": "zLib License",
    "badge": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    "website": "https://opensource.org/licenses/Zlib",
  },
  {
    "license": "Other",
    "badge": "",
    "website": "",
  },
]

// ${getLicenseWebsite(License)}

 const generateReadMe = ({ Title, Description, Installation, License, Usage, Contributing, Tests, GitHub, Email }) => 

 `# ${Title}

 BADGE PLACEHOLDER

 
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
 

 
 Licensed under ${License} (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at: 
 
   WEBSITE PLACEHOLDER
 
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License."
 
 
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

 To visit my GitHub profile, simply navigate using the following link: [GitHub](https://github.com/${GitHub}).`;

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
