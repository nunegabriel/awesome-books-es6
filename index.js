import displayBook from './modules/displayBook.js';
import Books from './modules/Books.js';
import { DateTime } from './modules/luxon.js';

const bk = new Books();

displayBook();

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

const theDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

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
