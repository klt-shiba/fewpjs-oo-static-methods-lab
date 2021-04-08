class Formatter {
  //add static methods here
  static capitalize(a) {
    let string = a.charAt(0).toUpperCase() + a.slice(1);
    return string;
  }
  static sanitize(a) {
    // Removes non-alphanumeric characters except for dash, single quote and space
    let string = a.replace(/[^-' A-Za-z0-9\s]+/g, '')
    return string;
  }
  static titleize(a) {

    let arrayOfWords = a.split(" ");

    let capitalizedWord = arrayOfWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    let arrayOfUndesiredWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', "from"];

    let capitalizeString = arrayOfWords.map((word) => {

      if (!arrayOfUndesiredWords.includes(word)) {
        let titleCased = word.charAt(0).toUpperCase() + word.slice(1);
        return titleCased
      } else {
        return word
      }
    })

    let joinArray = capitalizeString.join(" ")


    return (joinArray.charAt(0).toUpperCase() + joinArray.slice(1))

    console.log(capitalizeString);
    

    // let filteredWords = arrayOfWords.filter((word) => {
    //   if  (arrayOfUndesiredWords.includes(word)) {
    //     return false
    //   } return true;}).map(word => word.charAt(0).toUpperCase() + word.slice(1));

      // let filteredWords = arrayOfWords.reduce((total, element) => {
        
      //   let newArray = []
        
      //   if  (!arrayOfUndesiredWords.includes(element)) {
      //       let newCapitalWord = element.charAt(0).toUpperCase() + element.slice(1);
      //       return newArray.push(newCapitalWord);

      //       // return newArray.push(newWord);
            
      //   } else if  (arrayOfUndesiredWords.includes(element)) {
          
      //     let normalWord = element
          
      //     return newArray.push(normalWord)

      //   } return newArray
      //     // return newArray.push(newWord);

      // }, 0)


  }
}

Formatter.capitalize("James");
console.log(Formatter.titleize("how to remove the word but from array in js"));

    // for (let word of arrayOfWords) {
    //   return word.charAt(0).toUpperCase() + word.slice(1);
    // }
    // let capitalizeFirstLetter = arrayOfWords.map((el) => {
    //     return el.charAt(0).toUpperCase() + el.slice(1);
    // }).filter((el) => {
    //   return el === 
    // })

    // let functionSomething = capitalizeFirstLetter.map((word) => {

    //   let removeCapitalOnWords = capitalizeFirstLetter.filter((el) => {
    //       let arrayOfUndesiredWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by'];
    //       return !arrayOfUndesiredWords.includes(el)
    //   })
      
    //   return functionSomething
    // }

    // console.log(removeCapitalOnWords);
    // let arrayOfFilteredCapitalizedWords = capitalizedWords.map((el)  => {
    //   if (arrayOfUndesiredWords.includes(el)) {}
    //   return el.charAt(0).toUpperCase() + el.slice(1);
    // //  return el !== arrayOfUndesiredWords
    // })
    // let arrayOfFilteredCapitalizedWords = arrayOfFilteredWords.map((el) => {
    //  return el.charAt(0).toUpperCase() + el.slice(1);
    // })

    // console.log(capitalizeFirstLetter.join(" "))

    
    // }

    // break down the sentence into an array of words
    // filter the array for the words listed and remove them and update
    // return a new array with the filtered out words
    // capitalize the remaining words