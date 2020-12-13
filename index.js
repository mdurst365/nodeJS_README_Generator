const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    //Github User Name
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
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
  name: 'projectTitle',
}, 
// Project Description
{
  type: 'input',
  message: 'Please describe your project.',
  name: 'description',
}, 
// Installation
{
  type: 'input',
  message: 'Please describe any installation instructions',
  name: 'installation',
}, 
// Contribution Guidelines
{
  type: 'input',
  message: 'Please describe any contribution guidelines',
  name: 'contribution',
}, 
// List of licenses to choose from
{
  type: 'input',
  message: 'What license will you use for your project?',
  name: 'license',
},  
]);
};

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>README</title>
</head>
<body>
    <p>My GitHub username is ${answers.username}</p>
    <p>My email is ${answers.email}.</p>
    <p>The name of my project is ${answers.projectTitle}.</p>
    Project Description: ${answers.description}.</p>
    <p>Installation instructions: ${answers.installation}.</p>
    <p>Contribution Guidelines: ${answers.contribution}.</p>
    <p>Project license: ${answers.license}.
</body>
</html>`;

// Bonus using async/await and try/catch
const init = async () => {
  console.log('Hello! Please answer a few questions for your README file');
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync('index.html', html);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
};

init();
