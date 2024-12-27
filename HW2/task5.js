let users = [
	{ name: 'John', email: 'John@gmail.com', age: 25 },
	{ name: 'Jack', email: 'Jack@gmail.com', age: 30 },
	{ name: 'Charlie', email: 'Charlie@gmail.com', age: 35 },
]


for (const { name, email, age } of users) {
	console.log(`Name: ${name}, Email: ${email}, Age: ${age}`)
}
