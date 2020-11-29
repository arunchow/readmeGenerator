const fs = require('fs');
  function generateMarkdown(userResponses) {

    // Generate Table of Contents conditionally based on userResponses
    // WHEN I am prompted for information about my application repository
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    
    
    let draftToC = `## Table of Contents`;
  
    if (userResponses.installation !== '') { draftToC += `
    * [Installation](#installation)` };
  
    if (userResponses.usage !== '') { draftToC += `
    * [Usage](#usage)` };
  
    if (userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };
  
  
    // Generate markdown for the top required portions of the README
    //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    let draftMarkdown = 
    `# <h1 align="center">${userResponses.projectTitle} 👋</h1>
    ![badge](<https://img.shields.io/badge/license-${userResponses.license}-brightgreen)
  
    
    Check out the badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description 
    
    *The what, why, and how:* 
    
    🔍${userResponses.description}
    `
  
    // Add Table of Contents to markdown
    draftMarkdown += draftToC;
   
    // Add License section since License is required to Table of Contents
    draftMarkdown += `
    * [License](#license)`;
    
  
    // Optional Installation section
    if (userResponses.installation !== '') {
    
    draftMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    💾${userResponses.installation}`
    };
    
  
    // Optional Usage section
    if (userResponses.usage !== '') {
    
    draftMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    💻${userResponses.usage}`
    };
    
    
    // Optional Contributing section
    if (userResponses.contributing !== '') {
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    👪${userResponses.contributing}`
    };
    
  
    // Optional Tests section
    if (userResponses.tests !== '') {
    
    draftMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ✏️${userResponses.tests}`
    };
  
  
    // License section is required
    draftMarkdown +=
    `
    
    ## License
    ![badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)
    <br />
    This application is covered by the ${userResponses.license} license
    `;
  
  
    // Questions / About Developer section
    //![Developer Profile Picture](${userInfo.avatar_url}) 
    //GitHub: [@${userInfo.login}](${userInfo.url})
    //let draftDev =
    draftMarkdown += 
    `
    ---
    
    ## Questions?
    
    For any questions, please contact me with the information below:
    
    GitHub: [@${userResponses.username}](<https://github.com/${userResponses.username}>)
    For any additional questions, please contact me with the email below:
    ${userResponses.repo}
    `;
    console.log('Draft Markdown :' + draftMarkdown)
    return draftMarkdown;
  }
  
  module.exports = generateMarkdown;