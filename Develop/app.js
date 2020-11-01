const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questionsEmployeeType = [

    {
        type: "list",
        message: "Choose employee role.",
        name: "employeetype",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more Employees"
        ]
        },
]

const questionsEmployee = [
    {
        type: "input",
        name: "id",
        message: "Enter Employee id."
    },
    
    {
        type: "input",
        name: "name",
        message: "Enter Employee name.",  
    },

    {
        type: "input",
        name: "email",
        message: "Enter Employee email."
    },

]

const questionsManager = [
    {
        type: "input",
        name: "office",
        message: "Enter office number."
    }

]

const questionsEngineer = [
    {
        type: "input",
        name: "github",
        message: "Enter github."
    }

]

const questionsIntern = [
    {
        type: "input",
        name: "school",
        message: "Enter school."
    }

]

//Employee counter
//let i = 0;    


let staffArray = [];



function createEmployee(){
    inquirer.prompt(questionsEmployee)
    .then(function(data){
        createManager(data);   
    });   
};

function createManager(data){
    inquirer.prompt(questionsManager)
    .then(function(response){
        let m = new Manager(data.id, data.name, data.email, response.office,);
        staffArray.push(m);
        console.log(staffArray);
    })
    };

     
        
     
         

createEmployee();

 //console.log(staffArray);
    
 

/* addStaff(); */
 
/* function createEmployee(){
    inquirer.prompt(questionsEmployeeType)
    .then(function(data){
        let employeetype = data.employeetype;
    })
    while(employeetype !=="No more Employees"){
        
    }
    if(employeetype ==="Manager"){
        inquirer.prompt(questionsEmployee)
        .then(function(data){
        let name = data.name;
        let email = data.email;
        let id = data.id;
    })
    }
} */

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
