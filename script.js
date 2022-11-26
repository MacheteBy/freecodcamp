//freecodecamp js task

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp) === true){
      return obj[checkProp];
    } else{
      return "Not Found";
    }
    
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

  //freecodecamp js task

  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ]
    }
  ];

    //freecodecamp js task


    const myStorage = {
        "car": {
          "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
           },
          "outside": {
            "trunk": "jack"
          }
        }
      };
      
      const gloveBoxContents = myStorage.car.inside["glove box"];

      console.log(gloveBoxContents);

          //freecodecamp js task


          const myPlants = [
            {
              type: "flowers",
              list: [
                "rose",
                "tulip",
                "dandelion"
              ]
            },
            {
              type: "trees",
              list: [
                "fir",
                "pine",
                "birch"
              ]
            }
          ];
          
          const secondTree = myPlants[1].list[1];

          console.log(secondTree);

          //freecodecamp js task


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== ""){
        records[id][prop] = value;
    }   else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
        records[id][prop] = [value];
    } else if (prop == "tracks" && value !== ""){
        records[id][prop].push(value);
    }   else if(value === ""){
        delete records[id][prop];
    }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//freecodecamp js task

const myArray = [];
let i = 5;
while(i >= 0){
myArray.push(i);
  i--;
}

console.log(myArray);

//freecodecamp js task

const myArray = [];

for(let i = 1; i <= 5; i++){
    myArray.push(i);
}

console.log(myArray);

//freecodecamp js task

const myArray = [];

for(let i = 1; i <= 9; i+=2){
    myArray.push(i);
}
console.log(myArray);

//freecodecamp js task

const myArray = [];

for(let i = 9; i >= 1; i-=2){
    myArray.push(i);
}
console.log(myArray);

//freecodecamp js task

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for(let i = 0; i < myArr.length; i++){
    total +=myArr[i];
}

console.log(total);

//freecodecamp js task

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr[i].length; k++){
            product *= arr[i][k];
        }
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));

  //freecodecamp js task

  // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do{
    myArray.push(i);
    i++;
} while (i < 11);

console.log(myArray);

//freecodecamp js task

function sum(arr, n) {
  if(n <= 0){
    return 0;
  } else{
    return sum(arr, n - 1) + arr[n - 1];
  }
  }

  console.log(sum([2, 3, 4], 1));

  //freecodecamp js task

  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName == name){
        if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        }else{
            return "No such property";
        }
    }
}
return "No such contact";
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likes"));




  //freecodecamp js task


  function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

 //freecodecamp js task

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }


   //freecodecamp js task

   function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  console.log(randomRange(2, 5));

     //freecodecamp js task

     function convertToInteger(str) {
        return parseInt(str);
    }
    
    convertToInteger("56");

//freecodecamp js task

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");

//freecodecamp js task

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

//freecodecamp js task

function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
  }

  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

//freecodecamp js task

function rangeOfNumbers(startNum, endNum) {
    return endNum < startNum
      ? []
      : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
  }


//freecodecamp js task


function checkScope() {
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i = 'function scope';
}

console.log(checkScope());

//freecodecamp js task

let s = [5, 7, 2];
function editInPlace(s) {
 s = s.sort();
 return s;
}
console.log(editInPlace(s));

//freecodecamp js task

const sum = (...arg) => arg.reduce((a, b) => a + b, 0);

console.log(sum(1,2,3,4));

//freecodecamp js task

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line

const half = ({max, min}) => (max + min) / 2.0;

console.log(half);

//freecodecamp js task

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: `${name}`,
    age: `${age}`,
    gender: `${gender}`
  };
  // Only change code above this line
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));



//freecodecamp js task

// Only change code below this line
class Vegetable  {
  constructor(target){
    this.target = target;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


//freecodecamp js task

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

//freecodecamp js task

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//freecodecamp js task

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = vowelRegex; // Change this line

//freecodecamp js task

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//freecodecamp js task
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//freecodecamp js task
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//freecodecamp js task
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);

//freecodecamp js task
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

//freecodecamp js task
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);

//freecodecamp js task
let reCriminals = /C+/; // Change this line

//freecodecamp js task
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//freecodecamp js task
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//freecodecamp js task
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//freecodecamp js task
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//freecodecamp js task
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//freecodecamp js task
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//freecodecamp js task
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

//freecodecamp js task
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//freecodecamp js task
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


//freecodecamp js task
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

//freecodecamp js task
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

//freecodecamp js task
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


//freecodecamp js task
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//freecodecamp js task
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//freecodecamp js task
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//freecodecamp js task
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);

//freecodecamp js task
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

//freecodecamp js task
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

//freecodecamp js task
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

//freecodecamp js task
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();

//freecodecamp js task
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line


console.log(typeof(seven));
console.log(typeof(three));


//freecodecamp js task
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//freecodecamp js task
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//freecodecamp js task
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);


//freecodecamp js task
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);


//freecodecamp js task
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

//freecodecamp js task
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//freecodecamp js task
