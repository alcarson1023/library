const books = document.querySelector("#books");
const page = document.querySelector("#page");
const message = document.querySelector("#message");
const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const pagesInput = document.querySelector("#pagesInput");
const submit = document.querySelector("#submit");

let myLibrary = [
  { title: "Lord of the Rings", author: "J.R.R. Tolkein", pages: 344 },
  { title: "Lord of the Flies", author: "I.D.K. Mann", pages: 123 },
];

// This is the constructor
function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
  console.log(title, author, pages);
}

submit.addEventListener("click", function () {
  if (titleInput.value.length === 0) {
    message.textContent = "Please enter a title!";
  } else if (authorInput.value.length === 0) {
    message.textContent = "Please enter an author!";
  } else if (pagesInput.value.length === 0) {
    message.textContent = "Please enter a page number!";
  } else {
    message.textContent = titleInput.text;
    books.innerHTML = ``;
    let newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value
    );
    console.log(newBook);
    myLibrary.push(newBook);
    showBooks();
  }
});

// Takes user input and stores the new book in myLibrary
function addBookToLibrary() {
  book = "";
  myLibrary.push(book);
}

function clearList() {
  books.innerHTML = ``;
}

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "singleBook");
    div.innerHTML = `<div style='text-align: center'><p>${myLibrary[i].title}</p><p>by ${myLibrary[i].author},</p><p>${myLibrary[i].pages} pages!</p></div>`;
    books.appendChild(div);
  }
}
showBooks();
