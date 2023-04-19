function createEmployeeCard(employee) {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();
    let extraInfo = '';
  
    if (role === 'Manager') {
      extraInfo = `Office number: ${employee.getOfficeNumber()}`;
    } else if (role === 'Engineer') {
      extraInfo = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
    } else if (role === 'Intern') {
      extraInfo = `School: ${employee.getSchool()}`;
    }
  
    return `
      <div class="employee-card">
        <h2>${name}</h2>
        <h3>${role}</h3>
        <p>ID: ${id}</p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>${extraInfo}</p>
      </div>
    `;
  }
  
  function render(teamMembers) {
    const employeeCards = teamMembers.map(createEmployeeCard).join('\n');
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Summary</title>
        <link rel="stylesheet" href="assets/styles/style.css">
      </head>
      <body>
        <header>
          <h1>Team Summary</h1>
        </header>
        <main>
          ${employeeCards}
        </main>
      </body>
      </html>
    `;
  
    return html;
  }
  
  module.exports = render;
  