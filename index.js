const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = [

//Github User Name
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
},     
//Email Address
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},    
//Project Title
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'Title',
}, 
// Project Description
{
    type: 'input',
    message: 'Please describe your project.',
    name: 'Description',
}, 
// Installation
{
    type: 'input',
    message: 'Please describe installation instructions',
    name: 'Installation',
}, 
// Contribution Guidelines
{
    type: 'input',
    message: 'Please describe any contribution guidelines',
    name: 'contribution',
}, 
// List of licenses to choose from
{
    type: 'list',
    message: 'What license will you use for your project?',
    name: 'license',
},   

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
