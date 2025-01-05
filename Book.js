class Book {
	constructor(name, author, year) {
		this._name = name, 
        this._author = author,
        this._year = year
	}

	get name() {
		return this._name
	}
	get author() {
		return this._author
	}
	get year() {
		return this._year
	}

	set name(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Назва книги не має бути порожнім рядком.')
		}
		this._name = value
	}
	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Автор не має бути порожнім рядком.')
		}
		this._author = value
	}
	set year(value) {
		if (!Number.isInteger(value) || value <= 0) {
		    throw new Error('Рік видання має бути позитивним цілим числом.')
		}
		this._year = value
	}

	printInfo() {
		console.log(
			`The name of book: ${this.name}, Author: ${this.author}, The date of publication: ${this.year} year`)
	}
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Додайте масив книг.");
        }
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}

module.exports = Book