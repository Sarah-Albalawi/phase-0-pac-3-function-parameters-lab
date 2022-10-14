function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  function introductionWithLanguage(name, language){
       return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguage(name, language= "Javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}