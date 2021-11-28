const isPrime = number => {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number > 1;
}

function getPrime(arrayOfNumbers){
let primeNumbers = [];
  for(let i = 0; i < arrayOfNumbers.length; i++){
    if(isPrime(arrayOfNumbers[i])){
      primeNumbers.push(arrayOfNumbers[i]);
    }
  }
return primeNumbers;
}

getprimeNumbers([1,4,5,6,7,8,9,23,34,45,56])

