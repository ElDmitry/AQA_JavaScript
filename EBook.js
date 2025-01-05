const Book = require('./Book')

class Ebook extends Book {
	constructor(name, author, year, formatFile) {
		super(name, author, year)
		this._formatFile = formatFile
	}
	get formatFile() {
		return this._formatFile
	}

	set formatFile(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Формат файлу не має бути порожнім рядком.')
		}
		this._formatFile = value
	}

	printInfo() {
		console.log(
			`The name of book: ${this._name}, Author: ${this._author}, The date of publication: ${this._year} year, Format file: ${this._formatFile}`
		)
	}
	static createFromBook(book, formatFile) {
		if (!(book instanceof Book)) {
			throw new Error('Аргумент має бути екземпляром класу Book.')
		}
		return new Ebook(book.name, book.author, book.year, formatFile)
	}
}

module.exports = Ebook;