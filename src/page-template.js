// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const myData = templateData;

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

        <div class="card m-2 shadow-sm bg-light-gray" style="width: 18rem;">
          <div class="card-header text-white">
            <i class="fas fa-coffee"></i><h2> Justin Puzey</h2>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Role: Engineer</li>
              <li class="list-group-item">Id: 3245345</li>
              <li class="list-group-item">Email: <a href="mailto:webmaster@example.com">jpuzey@email.com</a></li>
              <li class="list-group-item">GitHub Username: <a href='https://github.com/justpuzey'>justpuzey</a></li>
            </ul>
          </div>
          
          <div class="card m-2 shadow-sm bg-light-gray" style="width: 18rem;">
            <div class="card-header text-white">
              <i class="fas fa-coffee"></i><h2> Justin Puzey</h2>
            </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Role: Engineer</li>
                <li class="list-group-item">Id: 3245345</li>
                <li class="list-group-item">Email: <a href="mailto:webmaster@example.com">jpuzey@email.com</a></li>
                <li class="list-group-item">GitHub Username: <a href='https://github.com/justpuzey'>justpuzey</a></li>
              </ul>
            </div>
          
      </div>
      
    </main>
  
  </body>
  </html>
  `;
};
