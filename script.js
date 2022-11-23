function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp) === true){
      return obj[checkProp];
    } else{
      return "Not Found";
    }
    
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));