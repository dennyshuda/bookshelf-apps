const inputBook = document.getElementById("inputBook");
const inputBookIsComplete = document.getElementById("inputBookIsComplete");
const inputBookTitle = document.getElementById("inputBookTitle");
const inputBookAuthor = document.getElementById("inputBookAuthor");
const inputBookYear = document.getElementById("inputBookYear");
const completeBookshelfList = document.getElementById("completeBookshelfList");
const incompleteBookshelfList = document.getElementById(
  "incompleteBookshelfList"
);
const searchBook = document.getElementById("searchBook");
const searchBookTitle = document.getElementById("searchBookTitle");

const completeBookList = [];
const incompleteBookList = [];

function displayCompleteBooks() {
  let htmlElement = "";
  for (let index = 0; index < completeBookList.length; index++) {
    const display = `<article class="book_item">
                          <h3>${completeBookList[index].title}</h3>
                          <p>Penulis: ${completeBookList[index].author}</p>
                          <p>Tahun: ${completeBookList[index].year}</p>
                        <div class="action">
                          <button onclick="addToIncompleteList(${index})" onclick="" class="green">Belum selesai di Baca</button>
                          <button onclick="removeCompleteBook(${index})" class="red">Hapus buku</button>
                        </div>
                      </article>`;
    htmlElement += display;
  }
  completeBookshelfList.innerHTML = htmlElement;
}

function displayIncompleteBooks() {
  let htmlElement = "";
  for (let index = 0; index < incompleteBookList.length; index++) {
    const display = `<article class="book_item">
                          <h3>${incompleteBookList[index].title}</h3>
                          <p>Penulis: ${incompleteBookList[index].author}</p>
                          <p>Tahun: ${incompleteBookList[index].year}</p>
                        <div class="action">
                          <button onclick="addToCompleteList(${index})" class="green">Belum selesai di Baca</button>
                          <button onclick="removeIncompleteBook(${index})" class="red">Hapus buku</button>
                        </div>
                      </article>`;
    htmlElement += display;
  }
  incompleteBookshelfList.innerHTML = htmlElement;
}

function addToCompleteList(index) {
  incompleteBookList[index].isComplete = true;
  completeBookList.push(incompleteBookList[index]);
  incompleteBookList.splice(index, 1);
  displayIncompleteBooks();
  displayCompleteBooks();
}

function addToIncompleteList(index) {
  completeBookList[index].isComplete = false;
  incompleteBookList.push(completeBookList[index]);
  completeBookList.splice(index, 1);
  displayIncompleteBooks();
  displayCompleteBooks();
}

function removeIncompleteBook(index) {
  incompleteBookList.splice(index, 1);
  displayIncompleteBooks();
}

function removeCompleteBook(index) {
  completeBookList.splice(index, 1);
  displayCompleteBooks();
}

function addBookData() {
  if (inputBookIsComplete.checked) {
    completeBookList.push({
      id: +new Date(),
      title: inputBookTitle.value,
      author: inputBookAuthor.value,
      year: Number(inputBookYear.value),
      isComplete: true,
    });
    displayCompleteBooks();
  } else {
    incompleteBookList.push({
      id: +new Date(),
      title: inputBookTitle.value,
      author: inputBookAuthor.value,
      year: Number(inputBookYear.value),
      isComplete: false,
    });
    displayIncompleteBooks();
  }
}

inputBook.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookData();
});
