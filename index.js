var gen = require("./fileGenerator.js");
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
        message: "What's your username?",
        name: "userName"
    },{
        type: "input",
        message: "What's your email address?",
        name: "email"
    },{
        type: "input",
        message: "Project Description",
        name: "description"
    },{
        type: "input",
        message: "User Story",
        name: "userStory"
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
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "GNU AGPLv3",
            "None"
        ],
    },{
        type: "input",
        message: "Screenshots",
        name: "screenshots"
    },{
        type: "input",
        message: "Links",
        name: "links"
    }
];

// Heere below is my README.md file function:

inquirer.prompt(questions).then(function(response) {

    var content = gen.fileGenerator(response);
    fs.writeFile("./README.md", content, function(err) {
        if (err) throw Error
        console.log("success");
    });
});