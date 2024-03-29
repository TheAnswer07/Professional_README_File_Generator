function fileGenerator(response) {
    var content = `# ${response.title}

#### ${response.title} [${response.userName}](${response.github})

#### README_Generator

### License Used
<img src="https://img.shields.io/badge/${response.license}-blue.svg">

## Table of Contents:
* [Project Description](#description)
* [User Story](#username)
* [Credits](#credits)
* [Features](#features)
* [Contribution](#contribution)
* [GitHub Profile Link](#github)
* [Walkthrough Video Link](#video)
* [Screenshots](#screenshots)
* [Links](#links)
  
### Project Description
${response.description}

### User Story
${response.userStory}

### Credits
${response.credits}

### Features
${response.features}

### Contribution
${response.contribution}

### GitHub Profile Link
[GitHub](${response.github})

### Walkthrough Video Link
[Walkthrough Video Link](${response.video})

### Screenshots
![screenshots](${response.screenshots} "Project Screenshot")

### Links
${response.links}
`
return content;

};

exports.fileGenerator = fileGenerator;