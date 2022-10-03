import Book from './Book.js';

class Books {
  constructor() {
    this.books = [];
  }

   add = (title, author) => {
     const book = new Book(title, author);
     this.books.push(book);
     return book;
   }

   set assignBook(books) {
     this.books = books;
   }

   get allBooks() {
     return this.books;
   }

  remove = (obj) => {
    let localBooks = JSON.parse(localStorage.getItem('books'));
    localBooks = localBooks.filter((b) => b.title !== obj.title || b.author !== obj.author);
    localStorage.setItem('books', JSON.stringify(localBooks));
    this.books = localBooks;
    return this.books;
  }
}

export default Books;
