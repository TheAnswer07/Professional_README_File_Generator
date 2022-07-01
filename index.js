var fileGenerator = require("./fileGenerator.js");
var fs = require("fs");
var inquirer = require('inquirer');
// const process = require("process");

// Adding here the different questions to ask the User
//through an array of objects:

let questions = [
    {
        type: "input",
        message: "What's the name of your project?",
        name: "title"
    },{
        type: "input",
        message: "Table of contents",
        name: "table of contents"
    },{
        type: "input",
        message: "Project Description",
        name: "description"
    },{
        type: "input",
        message: "User Story",
        name: "usage"
    },{
        type: "input",
        message: "Credits",
        name: "credits"
    },{
        type: "input",
        message: "Features",
        name: "features"
    },{
        type: "input",
        message: "How to contribute to this project?",
        name: "contribution"
    },{
        type: "input",
        message: "What's your GitHub profile link?",
        name: "github"
    },{
        type: "list",
        name: "license",
        message: "Which license you'd like to use?",
        licenses: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "GNU AGPLv3",
        ],
    },{
        type: "input",
        message: "Screenshot1",
        name: "scriptjs"
    },{
        type: "input",
        message: "Screenshot2",
        name: "fileGenerator"
    },{
        type: "input",
        message: "Screenshot3",
        name: "ReadMe"
    },{
        type: "input",
        message: "Accomplishments",
        name: "accomplish"
    }
];

// Heere below is my README.md file function:

inquirer.prompt(questions).then(function(reponse) {
    console.log(reponse);

    var content = file.Generator(response);
    console.log(content);
    fs.writeFile("./ReadMe.md", content, function(err) {
        if (err) throw Error
        console.log("success");
    });
});