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

