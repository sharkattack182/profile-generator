const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your first name?",
        name: "first"
    },
    {
        type: "input",
        message: "What is your last name?",
        name: "last"
    },
    {
        type: "input",
        message: "Provide a brief description of yourself",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your position at work?",
        name: "job"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "location"
    },
    {
        type: "input",
        message: "please provide an web based image source?",
        name: "img"
    },
    {
        type: "checkbox",
        message: "What programing languages do you know?",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Node.js"],
        name: "languages"
    },
]).then(function(response) {
    console.log(response)

    const { first, last, bio, job, location, img, languages } = response;

    const l = languages.toString().split(" ");

    const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>${first} ${last} Profile</title>
      </head>
      <body>
        <div class="jumbotron">
          <img
            src="${img}"
            alt="headshot"
          />
        </div>
    
        <div class="about-me">
          <h1>${first} ${last}</h1>
          <h2>${job}</h2>
          <div class="row">
            <div class="col-lg-8">
                <h3>About me</h3>
              <p>
                ${bio}
              </p>
            </div>
    
            <di class="col-lg-4">
              <h3>Languages</h3>
              <p>${l}</p>
            </di>
          </div>
        </div>
    
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `;

    fs.writeFile(first + "-" + last +".html", template, function(err) {
        if(err) {
            return err
        }
        console.log("success")
    })
})