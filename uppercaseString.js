function convertUpperCase(arrayString) {
    var newArray = [];
    for(var i=0; i< arrayString.length; i++) {
        newArray.push(arrayString[i][0].toUpperCase() + arrayString[i].slice(1));
    }
  return newArray;
}

console.log(convertUpperCase(["test","usecase"]);
