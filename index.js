const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRenderer');

async function main() {
  const teamMembers = [];

  // Prompt for manager information
  // Add manager to teamMembers

  let isBuildingTeam = true;

  while (isBuildingTeam) {
    const { role } = await inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I am done building my team'],
      },
    ]);

    switch (role) {
      case 'Engineer':
        // Prompt for engineer information
        // Add engineer to teamMembers
        break;
      case 'Intern':
        // Prompt for intern information
        // Add intern to teamMembers
        break;
      default:
        isBuildingTeam = false;
        break;
    }
  }

  const outputPath = path.resolve(__dirname, 'output', 'team.html');
  const html = render(teamMembers);
  fs.writeFileSync(outputPath, html, 'utf8');
}

main();
