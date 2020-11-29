const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Your Project Title?',
    validate: ptitleInput => {
      if (ptitleInput) {
        return true;
      } else {
        console.log('Please enter your Project Title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description of the project',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter description of the project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'If applicable, describe the steps required to install your project for the Installation section.:',
    validate: instInput => {
      if (instInput) {
        return true;
      } else {
        console.log('Please enter Installation#!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples of your project in use for the Usage section.:',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter usage!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If applicable, provide guidelines on how other developers can contribute to your project.:',
    validate: contributingInput => {
      if (contributingInput) {
        return true;
      } else {
        console.log('Please enter contributing!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If applicable, provide any tests written for your application and provide examples on how to run them.:',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter tests!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter license#:',
    choices: ['Community', 'MIT', 'GNU GPLv3', "Academic",'Open']
  },
  {
    type: 'input',
    message: "What is your GitHub username? (No @ needed)",
    name: 'username',
    default: 'username',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "What is your emailid?",
    name: 'repo',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid emailid is required to contact you.");
      }
      return true;
    }
  },
];

// function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(`File write error: ${error}`);
    }

    console.log("✔️ Success! Your README.md file has been generated")
});
}

const fs = require('fs');

function init() {
  try {

    // Prompt Inquirer questions
    inquirer.prompt(questions)
      .then((data) => {
        //console.log('data ' + data);
        var userResponses = data;
        const markdown = generateMarkdown(userResponses);
        //console.log(JSON.stringify(markdown));
        return markdown;
      })
      .then((markdown) => {
        //console.log('markdown: ' + JSON.stringify(markdown));
        writeToFile('./dist/README.md', markdown);
      });
    
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();