const removeDuplicates = (array) => {
    return array.filter((item,index) => array.indexOf(item) == index)
}

console.log(removeDuplicates([1,"1",3,5,"p", "p", 1]));
