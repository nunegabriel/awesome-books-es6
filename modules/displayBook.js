import Books from './Books.js';

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

const displayBook = () => {
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
};

addBtn.addEventListener('click', () => {
  bk.add(titleInput.value, authorInput.value);
  const booksStr = JSON.stringify(books);
  localStorage.setItem('books', booksStr);
  window.location.reload();
});

export default displayBook;