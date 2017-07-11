// Cloze Flash Card Constructor
class ClozeCard{
  
  // Properties
  constructor(text, cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.getPartial();
  } 
  
  // Methods on prototype
  getPartial(){
      // If cloze can be found in fullText
      if(this.fullText.indexOf(this.cloze) > -1){
        // split fullText into an array
        let partial = this.fullText.split(' ');
        
        // loop through partial array and replace matching cloze
        partial.forEach( (word, index, textArray) => {
          if( this.cloze.indexOf(word) > -1 ){
            if(textArray[index - 1] != '...'){
              textArray[index] = '...';
            }
            else{
              textArray[index] = '';
            }
          }
        })
        
        this.partial = partial.join(' ');
        
        return this.partial;
      }
      // Else cloze could not be found in fullText
      else{
        console.log("\nError string couldn't be found in text.");
      }
    }
}

module.exports = ClozeCard;