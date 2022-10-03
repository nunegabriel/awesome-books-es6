import Book from './Book.js';

class Books {
  constructor() {
    this.books = [];
  }

  add(title, author) {
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

  remove(obj) {
    let localBooks = JSON.parse(localStorage.getItem('books'));
    localBooks = localBooks.filter((b) => b.title !== obj.title || b.author !== obj.author);
    localStorage.setItem('books', JSON.stringify(localBooks));
    this.books = localBooks;
    return this.books;
  }
}

const bookContainer = document.querySelector('.book-container');
const addBtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const bk = new Books();

if (localStorage.getItem('books') === null) {
  bk.assignBook = [];
} else {
  bk.assignBook = JSON.parse(localStorage.getItem('books'));
}

const books = bk.allBooks;

function displayBook(books) {
  books.forEach((book) => {
    const bookDiv = document.createElement('tr');
    bookDiv.className = 'book';
    const bookInfo = document.createElement('td');
    const removeBtn = document.createElement('button');
    bookInfo.className = 'book-info';
    removeBtn.className = 'remove-btn';
    bookInfo.innerHTML = `"<strong class = "book-title">${book.title}</strong>" by <strong class = "book-author">${book.author}</strong>`;
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(removeBtn);
    bookContainer.appendChild(bookDiv);
  });
}

addBtn.addEventListener('click', () => {
  bk.add(titleInput.value, authorInput.value);
  const booksStr = JSON.stringify(books);
  localStorage.setItem('books', booksStr);
  window.location.reload();
});

displayBook(books);

const removeButton = document.querySelectorAll('.remove-btn');

removeButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    const bookTitle = btn.previousElementSibling.firstElementChild;
    const author = bookTitle.nextElementSibling;
    const obj = {
      title: bookTitle.textContent,
      author: author.textContent,
    };
    bk.assignBook = bk.remove(obj);
    const parent = btn.parentElement;
    parent.remove();
    window.location.reload();
  });
});

const theDate = new Date().toUTCString();

const dateDiv = document.querySelector('.date');
dateDiv.innerHTML = theDate;

const listLink = document.getElementById('list-link');
const listNew = document.getElementById('list-new');
const listContact = document.getElementById('list-contact');
const bookList = document.querySelector('.book-list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  bookList.className = 'show';
  addNew.className = 'hide';
  contact.className = 'hide';
});

listNew.addEventListener('click', () => {
  bookList.className = 'hide';
  addNew.className = 'show';
  contact.className = 'hide';
});

listContact.addEventListener('click', () => {
  bookList.className = 'hide';
  addNew.className = 'hide';
  contact.className = 'show';
});
