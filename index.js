const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let modifiedTutorials = tutorials.map(splitSentence)
  return modifiedTutorials
}

function splitSentence(sentence) {
  let split = sentence.split(" ") // gives you array of words ["what", "does"]
  let newArray = []
  for (let word of split) {
    let newWord = word.replace(word[0], word[0].toUpperCase()) // returns capitalized word
    newArray.push(newWord) //puts all the modified words inside a new array
  }
  let joinedArray = newArray.join(" ")
  return joinedArray
}
