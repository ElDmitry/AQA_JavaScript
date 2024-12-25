let arr = [1, 2, 3, 4, 5];

function mutationArr(arr){
    let newArr = arr.map((number, index) => number * index)
    return newArr
}

console.log(mutationArr(arr))