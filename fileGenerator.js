function fileGenerator(response) {
    var content = `# ${response.title}

#### ${response.title} [${response.userName}](${response.github})

#### README_Generator

### License Used
${response.license}

## Table of Contents:
* [Project Description](#project-description)
* [User Story](#username)
* [Credits](#credits)
* [Features](#features)
* [Contribution](#contribution)
* [GitHub Profile Link](#github-profile)
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

### Screenshots
![screenshots](${response.screenshots} "Project Screenshot")

### Links
${response.links}
`
return content;

};

exports.fileGenerator = fileGenerator;