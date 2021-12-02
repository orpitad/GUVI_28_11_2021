const median = (array1, array2) => {
    const finalArray = [...array1, ...array2].sort((a,b) => a-b);

    const midpoint = (finalArray.length/2) | 0;

    if(finalArray.length % 2 == 1) {
        return finalArray[midpoint];
    } else {
        return (finalArray[midpoint] + finalArray[midpoint - 1] ) / 2 ;
    }
}

const arr1 = [1, 10, 13, 20, 30];
const arr2 = [2, 12, 17, 23, 45, 47];
console.log(median(arr1, arr2));
