let person = {
	firstName: 'John',
	lastName: 'Snow',
	age: 21
}

person.email = 'mail@gmail.com';
delete person.age;

console.log(person)