let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function onlyEven(arr){
    const evenNumbers = arr.filter(number => number % 2 === 0)
    return evenNumbers;
}

console.log(onlyEven(arr))