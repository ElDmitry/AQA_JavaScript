const Book = require('./Book')
const EBook = require('./EBook')

const book1 = new Book('Kobzar', 'T.Shevchenko', 1840)
const book2 = new Book('Rich dad, poor dad', 'R. Kiosaki', 1997)
const book3 = new Book('The richest man in Babylon', 'George S. Clason', 1926)

book1.printInfo()
book2.printInfo()
book3.printInfo()

const ebook1 = new EBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997,	"PDF")

ebook1.printInfo()

const books = [book1, book2, ebook1]
const oldestBook = Book.findOldestBook(books)
console.log('Найдавніша книга:')
oldestBook.printInfo()


const ebook2 = EBook.createFromBook(book2, 'PDF')
console.log('Створено EBook з Book:')
ebook2.printInfo()
