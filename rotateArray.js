const rotatedArray = (array) => array.map((element, index) => array[array.length-index-1]);

const rotateArray = (array, n) => {
    if(!n || n % 2 == 0) {
        return array;
    }
    return rotatedArray(array);
}

console.log(rotateArray([4,8,9,7,1]));
console.log(rotateArray([4,8,9,7,1], 3));
