const numbers = [2, -5, 0, 7, -3, 0, 10, -8];



function countOfNumbers(arr){
    let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            positiveCount++;
        }
        else if (numbers[i] < 0) {
           negativeCount++
        } else {
           zeroCount++
        }
    }
console.log(`Кількість позитивних чисел: ${positiveCount++};
Кількість негативних чисел: ${negativeCount++};
Кількість нульових чисел: ${zeroCount++}`);

}
countOfNumbers(numbers)
