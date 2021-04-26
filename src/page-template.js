
//Generate Icon based on role
const generateIcon = (role) => {
  let icon = 'coffee'

  if (role === 'Manager') {
    icon = 'coffee';
  }
  else if (role === 'Engineer') {
    icon = 'laptop-code';
  }
  if (role === 'Intern') {
    icon = 'graduation-cap';
  }
  return icon
}

//Generate card for each team member
const generateCards = (teamData) => {
  let cardHTML = '';



  for (let i = 0; i < teamData.length; i++) {

    cardHTML +=
      `
      <div class="card m-2 shadow-sm bg-light-gray" style="width: 18rem;">
          <div class="card-header text-white">
            <i class="fas fa-${generateIcon(teamData[i].role)}"></i><h2> ${teamData[i].name}</h2>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Role: ${teamData[i].role}</li>
              <li class="list-group-item">Id: ${teamData[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${teamData[i].email}">${teamData[i].email}</a></li>
              `
    if (teamData[i].role === 'Manager') {
      cardHTML += `<li class="list-group-item">Office Number: ${teamData[i].officeNumber}</li>`;
    }
    else if (teamData[i].role === 'Engineer') {
      cardHTML += `<li class="list-group-item">GitHub Username: <a href='https://github.com/${teamData[i].github}'>${teamData[i].github}</a></li>`
    }
    else {
      cardHTML += `<li class="list-group-item">School Name: ${teamData[i].school}</li>`
    }
    cardHTML +=
      `
            </ul>
          </div>
      `
  }
  return cardHTML
}

// export function to generate entire page
const generatePage = teamData => {

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="text-white bg-dark text-center p-4">
        <h1>My Team</h1>
      </div>
    
    </header>
    <main>
      <div class="d-flex justify-content-center">

        ${generateCards(teamData)}
          
      </div>
      
    </main>
  
  </body>
  </html>
  `;
};

module.exports = generatePage;
