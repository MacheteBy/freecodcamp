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

          