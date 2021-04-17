//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');



//an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a short description of the project',
        name: 'description'
    },
    {
        type: 'checkbox',
        message: 'What license is required for your project?',
        name: 'license',
        choices: ['MIT License', 'Boost Software License', 'Apache']
    },
    {
        type: 'input',
        message: 'What command is needed to install dependencies?',
        name: 'dependent',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What should the user know about using this repo?',
        name: 'knowledge'
    },
    {
        type: 'input',
        message: 'What should the user know about contributing to the repo?',
        name: 'contribute'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    console.log("==================", fileName, data);
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Congrats! Your readme is complete');
    })

}

// function to initialize app
function init() {
  const answers = inquirer.prompt(questions);
    answers.then((_ans) => {
       const str = generateMarkdown(_ans);
       writeToFile('README', str);
    });
} 

// Function call to initialize app
init();
