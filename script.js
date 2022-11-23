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