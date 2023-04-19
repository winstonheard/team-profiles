const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./src/htmlRenderer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const teamMembers = [];

function initApp() {
  console.log("Please build your team");
  addManager();
}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is your manager's office number?",
    }
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    addTeamMembers();
  });
}

function addTeamMembers() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members"
      ]
    }
  ]).then(userChoice => {
    switch (userChoice.memberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
    }
  });
}

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is your engineer's GitHub username?",
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamMembers.push(engineer);
    addTeamMembers();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is your intern's school?",
    }
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamMembers.push(intern);
    addTeamMembers();
  });
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
  }
  
  initApp();