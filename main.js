"use strict";

const submit = document.getElementById("inputBook");
const bookTitle = document.getElementById("inputBookTitle");
const bookAuthor = document.getElementById("inputBookAuthor");
const bookYear = document.getElementById("inputBookYear");

const isComplete = document.getElementById("inputBookIsComplete");

const completeBooks = document.getElementById("completeBookshelfList");
const incompleteBooks = document.getElementById("incompleteBookshelfList");

const bookCompleteList = [];
const bookIncompleteList = [];

function generateBooksToObjects(title, author, year) {
  return {
    title,
    author,
    year,
  };
}

function displayCompleteBooks() {
  const display = bookCompleteList.map((book) => {
    return `<article class="book_item">
              <h3>Buku: ${book.title}</h3>
              <p>Penulis: ${book.author}</p>
              <p>Tahun: ${book.year}</p>
            <div class="action">
              <button class="green">Belum selesai di Baca</button>
              <button class="red">Hapus buku</button>
            </div>
            </article>`;
  });
  completeBooks.innerHTML = display;
}

function displayIncompleteBooks() {
  const display = bookIncompleteList.map((book) => {
    return `<article class="book_item">
              <h3>Buku: ${book.title}</h3>
              <p>Penulis: ${book.author}</p>
              <p>Tahun: ${book.year}</p>
            <div class="action">
              <button onclick="completeReadBook()" class="green">Selesai dibaca</button>
              <button class="red">Hapus buku</button>
            </div>
            </article>`;
  });
  incompleteBooks.innerHTML = display;
}

function addBookComplete() {
  const newObjects = generateBooksToObjects(
    bookTitle.value,
    bookAuthor.value,
    bookYear.value
  );
  bookCompleteList.push(newObjects);
  displayCompleteBooks();
}

function addBookIncomplete() {
  const newObjects = generateBooksToObjects(
    bookTitle.value,
    bookAuthor.value,
    bookYear.value
  );
  bookIncompleteList.push(newObjects);
  displayIncompleteBooks();
}

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isComplete.checked) {
    addBookComplete();
    console.log("work");
  } else {
    addBookIncomplete();
    console.log("not work");
  }
  console.log(bookCompleteList);
  console.log(bookIncompleteList);
});
