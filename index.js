const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');

//Add Manager information
const promptManager = () => {
  return inquirer.prompt([
    //name
    {
      type: "input",
      message: 'Please add Team Manager\'s name.',
      name: "mgrName",
      validate: mgrName => {
        if (mgrName) {
          return true;
        } else {
          console.log('Please enter a name.');
          return false;
        }
      }
    },
    //ID
    {
      type: "input",
      message: 'Please add manager\'s ID.',
      name: "mgrId",
      validate: mgrId => {
        if (mgrId) {
          return true;
        } else {
          console.log('Please enter an ID.');
          return false;
        }
      }
    },
    //email
    {
      type: "input",
      message: 'Please add manager\'s email address.',
      name: "mgrEmail",
      validate: mgrEmail => {
        if (mgrEmail) {
          return true;
        } else {
          console.log('Please enter a valid email.');
          return false;
        }
      }
    },
    //office #
    {
      type: "input",
      message: 'Please add manager\'s office nuber.',
      name: "officeNum",
      validate: officeNum => {
        if (officeNum) {
          return true;
        } else {
          console.log('Please enter a valid office number.');
          return false;
        }
      }
    }
  ])
}

const promptMember = teamData => {
  console.log(`
=====================
Add a New Team Member
=====================
`);

  // If no members
  if (!teamData.member) {
    teamData.member = [];
  }

  return inquirer
    .prompt([
      //name
      {
        type: "input",
        message: 'Please add Team Member\'s name.',
        name: "name",
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please enter a name.');
            return false;
          }
        }
      },
      //ID
      {
        type: "input",
        message: 'Please add team member\'s ID.',
        name: "id",
        validate: id => {
          if (id) {
            return true;
          } else {
            console.log('Please enter an ID.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to enter another team member?',
        default: false
      }
    ])
    .then(memberData => {
      teamData.member.push(memberData);
      if (memberData.confirmAddMember) {
        return promptMember(teamData);
      } else {
        return teamData;
      }
    });
}
// Initialize the app
promptManager()
  .then(promptMember)
  .then(teamData => {
    // return generatePage(promptQuestions);
    console.log(teamData)
    // console.log(generatePage(promptQuestions))
  })
  // .then(markDownData => {
  //   // return generateMarkdown(promptQuestions);
  //   console.log(writeToFile(markDownData))
  // })
  .catch(err => {
    console.log(err);
  });