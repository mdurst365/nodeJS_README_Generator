// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Contact
If you have any questions please use the contact information below:
#### GitHub account: ${data.username}
#### Email address: ${data.email}

# Description
${data.description}

#Table of Contents
* [Project Description](#Description)
* [License](#License)
* [Installation](#installation)
* [Questions](#Questions)

# License
${data.license}
![License](https://img.shields.io/badge/license-${data.license}-blue)

# Installation
${data.installation}

# Contributing to repo
${data.contribution}

# Demo/Screenshot

`;
}

module.exports = generateMarkdown;