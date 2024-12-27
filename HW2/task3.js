let car1 = {
	brand: 'Porsche',
	model: 'Carrera GT',
	year: 2020
}

let car2 = {
	brand: 'Mercedes',
	model: 'SLK',
	owner: 2024,
}

let car3 = {...car1, ...car2}

console.log(car3)