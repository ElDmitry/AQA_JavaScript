let arr = [10, 20, 30, 40, 50];

function sumOfElements(arr){
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum;
}

console.log(sumOfElements(arr))