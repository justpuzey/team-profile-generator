# Team Profile Generator
  
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description 
  The Team Pofile Generator uses command-line prompts to allow you to enter basic information about members of your team including role, email address and Git Hub username. This information is used to dynamically the CSS and HTML for a website

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  <p><i>Steps required to install application, dependencies and configure the environment:</i></p>

1. Navigate to the root folder
2. Use the command prompt to enter command: `npm install` to install dependencies (Enquirer, and Jest )

## Usage
<p><i>Instructions for application usage including examples:</i></p>
  
* After following the instructions to install, navigate to the root folder and use command prompt to enter command: `node index.js` to begin the app.
* In the terminal window, you will be asked what action you would like to perform (Add Manager, Add Engineer, Add Intern, Exit).
* Use the arrow keys to navigate to the type of team member you wish to add and `select Return`
* You will be prompted to add information related to the team member you are adding
* Once the team member's information has been added, you will again be prompted to perform another action
* Continue to add team members as needed
* Once complete, `select Exit`
* The app will use the information provided to generate an HTML file displaying full team
* Completed HTML file will be located in the `dist` folder

Command-Prompt

![Image Site](utils/images/terminal-screenshot.PNG)

Distributed Web App

![Image Site](utils/images/web-screenshot.PNG)

  ## Contributing
  <p><i>Guidelines for contributing to the project, including contributor covenant:</i></p>

  To begin contributing to the project, contact Admin (contact info listed below)

  ## Tests
  <p><i>Below are examples of current application tests and instructions on how to run them:</i></p>

  * Tests are performed using Jest
  * Tests are contained in the __tests__ folder
  * To run test suite, navigate to root folder and enter command: `npm run test`
  * To run specific test file such as Employee, enter command: `npm run test Employee`

  ## Questions
  If you have any questions, please contact:</br>
  (GitHub User):[`justpuzey`](github.com/justpuzey)</br>
  email: justpuzey@gmail.com

  ## License
  The MIT License
  
  