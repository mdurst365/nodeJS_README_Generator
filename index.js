const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [

  //Github User Name
  {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
      validate: (answer) => {
          if (answer !== ''){
              return true
          }   return "User name is required"
         
      },
  },     
  //Email Address
  {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      validate: (answer) => {
        if (answer !== ''){
            return true
        }   return "Email is required"  
    }, 
       
  },    
  //Project Title
  {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
      validate: (answer) => {
        if (answer !== ''){
            return true
        }   return "Title is required"
     },     
  }, 
  // Project Description
  {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
      validate: (answer) => {
        if (answer !== ''){
            return true
        }   return "Description is required"
    },   
  }, 
  // Installation
  {
      type: 'input',
      message: 'Please describe installation instructions',
      name: 'installation',
      validate: (answer) => {
        if (answer !== ''){
            return true
        }   return "Installation information is required"
    }, 
  }, 
  // Contribution Guidelines
  {
      type: 'input',
      message: 'Please describe any contribution guidelines',
      name: 'contribution',
      validate: (answer) => {
        if (answer !== ''){
            return true
        }   return "Contribution information is required"
    }, 
  }, 
  // List of licenses to choose from
  {
      type: 'list',
      message: 'What license will you use for your project?',
      name: 'license',
      choices: [{name:'MIT', value:'MIT'},{name:'Apache 2.0', value: 'Apache%202.0'},{name:'GPL', value: 'GPL'}]
    },   
  
  ];

// function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", generateMarkdown(data), (err) =>
  err ? console.log(err)
      : console.log("creating a readme.md file")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(writeToFile)
}

init();
