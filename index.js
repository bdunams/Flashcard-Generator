// Basic Card Constructor
const BasicCard = require('./BasicCard');
// Cloze Card Constructor
const ClozeCard = require('./ClozeCard');
// Inquirer
const inquirer = require('inquirer');


// Function to create a new basic card
createBasicCard = () => {
  
  inquirer.prompt([
      {
        type: "input",
        message: 'What question would you like on the front?',
        name : "front"
      },
      {
        type: "input",
        message : "What answer would you like on the back?",
        name : "back"
      }
  ])
    .then((options)=>{
    
      let bCard = new BasicCard(options.front,options.back);
    
      console.log('\n\n-----New Card Created!-----');
      console.log('Front: '+bCard.front);
      console.log('Back: '+bCard.back);
      console.log('---------------------------\n\n');
    
      // Recursion
      createNewCard()
    })
}

// Function to create a new cloze card
createClozeCard = () => {
  
  inquirer.prompt([
      {
        type: "input",
        message: 'What is the full question?',
        name : "fullText"
      },
      {
        type: "input",
        message : "What part would you like to hide?",
        name : "cloze"
      }
  ])
  .then((options)=>{

    let cCard = new ClozeCard(options.fullText,options.cloze); 

    if(cCard.partial){
      console.log('\n\n-----New Card Created!-----');
      console.log(cCard.cloze);
      console.log(cCard.partial);
      console.log(cCard.fullText);
      console.log('---------------------------\n\n');
    }
    
    // Recursion
    createNewCard();
  })
}

// Function to get user input with inquirer an call 
//createBasicCard or call createClozeCard
(createNewCard = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "What kind of flash card would you like to make?",
      choices: ["Basic Card", "Cloze Card"],
      name: "choice",
      default: 'Basic Card'
    }
  ]).then((options)=>{
    
    switch(options.choice){
      case 'Basic Card':
        createBasicCard();
      break;
      case 'Cloze Card':
        createClozeCard();
      break;
    }
  })
})();
