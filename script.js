function oddNumbers(start, end) {
    var startNum = start? start :0;
    var endNum = end ? end: 10;
    var oddArr = [];
    for(; startNum <= endNum; startNum++){
        if(startNum % 2 === 1) {
            oddArr.push(startNum);
        }
    } 
return oddArr;
}
