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

const uppercase2 = string1 => string1.split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

const titleCased = () => tutorials.map(s => uppercase2(s))

//console.log(titleCased(tutorials));