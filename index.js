const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//-------------------------------------------------------------
//Data Capture Prompts
//-------------------------------------------------------------
const promptTeam = (teamData) => {

  if (!teamData) {
    teamData = [];
  }

  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do next?",
      name: "action",
      choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit"],
    },
    //Capture Name
    {
      type: "input",
      message: 'Please add Team Member\'s name.',
      name: "name",
      when: ({ action }) => action != "Exit",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log('Please enter a name.');
          return false;
        }
      }
    },
    //Capture ID
    {
      type: "input",
      message: 'Please add Team Member\'s ID.',
      name: "id",
      when: ({ action }) => action != "Exit",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log('Please enter an ID.');
          return false;
        }
      }
    },
    //Capture email
    {
      type: "input",
      message: 'Please add Team Member\'s email address.',
      name: "email",
      when: ({ action }) => action != "Exit",
      validate: email => {
        if (email) {
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
      when: ({ action }) => action === "Add Manager",
      validate: officeNum => {
        if (officeNum) {
          return true;
        } else {
          console.log('Please enter a valid office number.');
          return false;
        }
      }
    },
    {
      type: "input",
      message: 'Please add Engineer\'s GitHub username.',
      name: "gitHub",
      when: ({ action }) => action === "Add Engineer",
      validate: gitHub => {
        if (gitHub) {
          return true;
        } else {
          console.log('Please enter a valid username.');
          return false;
        }
      }
    },
    {
      type: "input",
      message: 'Please add Intern\'s school.',
      name: "school",
      when: ({ action }) => action === "Add Intern",
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log('Please enter a valid school name.');
          return false;
        }
      }
    }

  ])
    .then(memberData => {
      switch (memberData.action) {
        case "Exit":
          return teamData;
          break;
        case "Add Manager":
          teamData.push(new Manager(memberData.name, memberData.id, memberData.email, memberData.officeNum));
          break;
        case "Add Engineer":
          teamData.push(new Engineer(memberData.name, memberData.id, memberData.email, memberData.gitHub));
          break;
        case "Add Intern":
          teamData.push(new Intern(memberData.name, memberData.id, memberData.email, memberData.school));
          break;
      }
      console.log('Data available within function: ', teamData)
      if (memberData.action != 'Exit') {
        console.log(`
========================================
        `);
        return promptTeam(teamData);
      }
    });
}


//---------------------------------------------------------------
// Initialize the app
//---------------------------------------------------------------
promptTeam()
  // .then(promptMember)
  .then(teamData => {
    console.log('data from .then:', teamData)
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  // .then(markDownData => {
  //   // return generateMarkdown(promptQuestions);
  //   console.log(writeToFile(markDownData))
  // })
  // .catch(err => {
  //   console.log(err);
  // });