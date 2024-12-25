let firstArray = [1, 2, 3, 4, 5];
let secondArray = ['cat', 'dog', 'bird', 'lion', 'tiger']

function concat(arr1, arr2){
    const concatArr = arr1.concat(arr2)
    return concatArr
}


console.log(concat(firstArray, secondArray))