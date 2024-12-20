function devide(numerator, denominator) {
	try {
		if (denominator === 0) {
			throw new Error('На нуль ділити не можна')
		} else if (
			typeof numerator !== 'number' || typeof denominator !== 'number') {
			    throw new Error('Помилка вводу. Введіть числа')
		}
		return numerator / denominator
	} catch (error) {
		console.error('Упс...', error.message)
		return;
	} finally {
		console.log('Робота завершена.')
	}
}

console.log(devide(5, 5)) 
console.log(devide(5, 0)) 
console.log(devide(5, 'a')) 
