function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp) === true){
      return checkProp;
    } else{
      return "Not Found";
    }
    
  }