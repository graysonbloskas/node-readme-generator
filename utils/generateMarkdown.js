// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  ## Installation
  To install neccessary dependecies, run the following command:
  
      ${data.dependent}
  
  ## Usage
  ${data.knowledge}
  
  ## License
  This project is under the ${data.license}
  
  ## Tests
  Use the following command to run tests: 
  
      npm test
  
  ## Questions
  If you have any questions about this repo, you can contact me via email at ${data.email}. For more of my work, you can find my github page at ${data.github}

`;

}

module.exports = generateMarkdown;
