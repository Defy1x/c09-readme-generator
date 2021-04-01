const fs = require("fs");
const questions = require("./questions.js");
const inquirer = require("inquirer");
const licenseText = require("./license.js")
const badgeIcon = require("./badges.js")
let badge;

const generateHTML = (answers) =>
`# Table of Contents:
* [Title](#Title)
* [Description](#Description)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Github](#Github)
* [Email](#Email)

# Title:
# ${answers.title}

# Owned By:
${answers.name}

## Description:
${answers.description}

#Usage
${answers.usage}

#Contribution Guidelines
${answers.contribution}

#Tests
Some of the tests that I ran for this project are: ${answers.tests}.

#License
${answers.license}

#Github
Please visit my ${answers.github} to visit my work.

#Email
My Email is ${answers.email}. Feel free to reach me here.`;

inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `Sample-README.md`;

        fs.writeFile(filename, generateHTML(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
