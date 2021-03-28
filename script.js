let bookId = null;

//PagesGlobal
const frontPage = document.querySelector(".frontPage");
const allBooks = document.querySelector(".screen1");
const edits = document.querySelector(".screen2");
const newAddition = document.querySelector(".screen3");
const view = document.querySelector(".screen4");

//Actions
const toggleFrontPage = () => {
  frontPage.classList.remove("inactive");
  allBooks.classList.add("inactive");
  edits.classList.add("inactive");
  newAddition.classList.add("inactive");
  view.classList.add("inactive");
  return;
};


const showAllBooks = async () => {
  allBooks.classList.remove("inactive");
  edits.classList.add("inactive");
  newAddition.classList.add("inactive");
  frontPage.classList.add("inactive");
  view.classList.add("inactive");

  const res = await fetch("http://myapi-profstream.herokuapp.com/api/6e5dd1/books");
  const data = await res.json();

  document.querySelector('#allBooks').textContent = "";

  for (book of data) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("single-book");
    bookDiv.innerText = `${book.title}, from ${book.author}`;
    bookDiv.src = `${book.image}`;
    bookDiv.id = "book-" + book.id;
    document.querySelector("#allBooks").append(bookDiv);
  }
};

document.querySelector("#listAll").addEventListener("click", () => {
  pageTurn.play()
  showAllBooks()
})

const toggleView = async (id) => {
  const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`);
  const data = await res.json();

  document.querySelector("#viewTitle").innerText = data.title;
  document.querySelector("#viewAuthor").innerText = data.author;
  document.querySelector("#viewReleaseDate").innerText = data.release_date;
  document.querySelector("#viewImage").src = data.image;

  allBooks.classList.add("inactive");
  edits.classList.add("inactive");
  newAddition.classList.add("inactive");
  frontPage.classList.add("inactive");
  view.classList.remove("inactive");
};

//Adding new book
document.querySelector("#addNew").addEventListener("click", () => {
  allBooks.classList.add("inactive");
  edits.classList.add("inactive");
  newAddition.classList.remove("inactive");
  frontPage.classList.add("inactive");
  view.classList.add("inactive");
});



document.addEventListener("click", async (event) => {
  if (event.target.matches(".single-book")) {
    bookId = event.target.id.replace("book-", "");
    toggleView(bookId);
    pageTurn.play();
  }
});

document.querySelector("#newBookForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    pageTurn.play();

    const title = document.querySelector("#nameOfBook").value;
    const author = document.querySelector("#newAuthor").value;
    const release_date = document.querySelector("#releaseDate").value;

    const body = JSON.stringify({
      title,
      author,
      release_date,
    });

    const res = await fetch("http://myapi-profstream.herokuapp.com/api/6e5dd1/books/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    const data = await res.json();
    toggleView(data.id);
  });

//Deleting book
document.querySelector("#deleteBook").addEventListener("click", async () => {
  await fetch(
    `http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${bookId}`,
    {
      method: "DELETE",
    }
  );
  showAllBooks();
  pageTurn.play();
});

//Editing book
document.querySelector("#editBook").addEventListener("click", (event) => {
  edit(bookId);
  pageTurn.play();
});

const edit = async (id) => {
  const res = await fetch(
    `http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`
  );
  const book = await res.json();

  document.querySelector("#editNameOfBook").value = book.title;
  document.querySelector("#editNewAuthor").value = book.author;
  document.querySelector("#editReleaseDate").value = book.release_date;

  allBooks.classList.add("inactive");
  edits.classList.remove("inactive");
  newAddition.classList.add("inactive");
  frontPage.classList.add("inactive");
  view.classList.add("inactive");

};

document.querySelector("#editBookForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    pageTurn.play();

    const title = document.querySelector("#editNameOfBook").value;
    const author = document.querySelector("#editNewAuthor").value;
    const release_date = document.querySelector("#editReleaseDate").value;

    const body = JSON.stringify({
      title,
      author,
      release_date,
    });

    const res = await fetch(
      `http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${bookId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
    toggleView(bookId);
  });


const addNew = document.querySelector("#addNew");
addNew.addEventListener("click", () => {
  pageTurn.play();
});

const goBack = document.querySelector(".goBack");
goBack.addEventListener("click", () => {
  pageTurn.play();
  toggleFrontPage()
});

//soundEffects
let pageTurn = new Audio("assets/pageTurn.mp3");
pageTurn.volume = 0.6;

let background = new Audio("assets/libraryBackground.mp3")
background.volume = 0.4;
background.autoplay = true;
background.loop = true;

// let mute = document.querySelector("#mute")
// mute.addEventListener("click", () => {
//   if (background.autoplay = true) {
//     background.pause()
//   }
//   console.log('did it work')
// })

function toggleSound() {
  return background.paused ? background.play() : background.pause()
}