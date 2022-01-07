// require external module
const fs = require('fs'); 
const inquirer = require('inquirer');
const util = require('util')
// require internal module
const generateMarkdown = require('./util/generateMarkdown.js');


// user question for readme file input


const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: "What's the project title?",
        // validate property to check that the user provide value
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter your title");
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'description',
        message: "What's the description of your project?",
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter your description");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is your Github name?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter your github name");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter your email");
                return false;
                }
        }
        },
        {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this project: ',
        choices:[
            "Apache",
            "Acedemic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please choose a license");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter install steps");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter usage");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'test',
        message: 'How users test your application?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter test");
                return false;
                }
        }
        },
        {
        type: 'input',
        name: 'contributor',
        message: 'What does user need to know about contributing to the repo?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter install steps");
                return false;
                }
        }
        },
    ]);
};

  // write README file 
const writeFile = data => {
fs.writeFile('README.md', data, err => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("README file has been succesfully created!")
    }
})
}
  
  // initialize the program

questions()
.then(answers => {
    return generateMarkdown(answers);
    })
.then(data => {
    return writeFile(data);
    })
.catch(err => {
    console.log(err)
    })

//   const init =() => {
//     questions()
//     .then(answers => fs.writeFile("README.md", generateMarkdown(answers)))
//     .then(() => console.log("Succesfully created README file!"))
//     .catch(err => console.log(err));
//   };

//   init()