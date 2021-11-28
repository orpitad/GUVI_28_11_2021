const isPalindrome = (string) => {
    let testString = "";
    for(let i = string.length -1; i >= 0;i--){
        testString += string[i];
    }

    return(string == testString);
}

function getPalindromes(arrayOfStrings){
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(!isPalindrome(arrayOfStrings[i])) {arrayOfStrings.splice(i, 1);}
    }
    return arrayOfStrings;
}

getPalindromes(["oppo", "madam", "test"])
