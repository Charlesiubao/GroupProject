// http://myapi-profstream.herokuapp.com/api/6e5dd1/books
// books of data

document.createElement('div');
innerDiv.className = 'allBooks'

var bookList = document.createElement('div');
bookList.id = 'bookList';
document.getElementById('allBooks').appendChild(bookList);

var innerDiv = document.createElement('div');
innerDiv.className = 'singleBook';

bookList.appendChild(innerDiv);
/////
let booksID = null
document.


 =  document.createElement('div class=myDiv');
let div = document.createElement('div class=myDiv');
let div = document.createElement('div class=myDiv');
let div = document.createElement('div class=myDiv');
let div = document.createElement('div class=myDiv');
let div = document.createElement('div class=myDiv');

// const titlemain=document.classList.add('#edit-title')
// const authormain=document.querySelector('#edit-author')
// const releaseyearmain=document.querySelector('#edit-releaseyear')
document.createElement('div')

const bookIndex = async () => {

// document.querySelector('.allBooks').classList.remove(‘hidden’)
// document.querySelector('.edits').classList.remove(‘hidden’)
// document.querySelector(‘#new’).classList.add(‘hidden’)
// document.querySelector(‘#edit’).classList.add(‘hidden’)

const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books`)
const data = await res.json()

// classList.add('#listall');
// document.querySelector(`#listall`).textContent = ‘’;

for (book of data) {

    //creates a div and class of single-book that shows a the books
	const bookDiv = document.createElement(`div`)
    bookDiv.classList.add(`single-book`)
    bookDiv.innerText = `${book.title}, from ${book.author}`
    // bookDiv.id = 'book-` + books.ID
    document.querySelector('#listall').append(bookDiv)

}
}



//
const goToShow = async (id) => {
    const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`)
    const data = await res.json()
    document.createElement(`div`)
    document.classList.add(`show-title`)
    document.classList.add(`show-book-author`)
    document.classList.add(`show-release`)
    document.classList.add(`show-cover`)
    document.querySelector(`.show-title`).innerText = data.title
    document.querySelector(`.show-book-author`).innerText = `${data.author}`
    document.querySelector(`.show-release`).innerText = data.release_year
    document.querySelector(`.show-cover`).src = data.image

    document.querySelector(`#new`).classList.add('hidden')
    document.querySelector('#edit').classList.add('hidden')
    document.querySelector('#listall').classList.remove('hidden')
    document.querySelector('#addnew').classList.add('hidden')


    document.querySelector('#listall').addEventListener('click', goToShow)

    document.querySelector('#new-book').addEventListener('click', () => {
    document.querySelector('#new').classList.remove('hidden')
    // document.querySelector('#edit').classList.add('hidden')
    // document.querySelector('#show').classList.add('hidden')
    // document.querySelector('#listall').classList.add('hidden')
})

}


////////

document.addEventListener('click', async (event) => {
    if (event.target.matches('.single-book')) {
      booksID = event.target.id.replace('book-', '')
      goToShow(booksID)
    }
})



// document.querySelector('#new-book-form').addEventListener('submit', async (event) => {
    // event.preventDefault()

    //may have to review newbook
    // const title = document.querySelector('#newbook').value
    const title = "Power of Now"
    const author = "Eckhart Tolle"
    const release_year = '1970'
    const picture = 'picture'


    const body = JSON.stringify({ title, author, release_year, picture})

    // const res = await fetch('http://myapi-profstream.herokuapp.com/api/6e5dd1/books', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body
    // })

//     const data = await res.json()
//     goToShow(data.id)
//   })

//   document.querySelector('#delete-book').addEventListener('click', async () => {
//     await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${wineId}`, { method: 'DELETE' })
//     goToIndex()
// //   })

//   document.querySelector('#edit-book').addEventListener('click', (event) => {
//     goToEdit(bookId)
//   })

  const goToEdit = async (id) => {
    const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`)
    const book = await res.json()


    document.querySelector('#edit-title').value = book.title
    document.querySelector('#edit-author').value = book.author
    document.querySelector('#edit-releaseyear').value = book.releaseyear

    document.querySelector('#new').classList.add('hidden')
    document.querySelector('#edit').classList.remove('hidden')
    document.querySelector('#show').classList.add('hidden')
    document.querySelector('#listall').classList.add('hidden')
  }

//   document.querySelector('#edit-book-form').addEventListener('submit', async (event) => {
//     event.preventDefault()

    // const title = document.querySelector('#edit-title').value
    // const author = document.querySelector('#edit-author').value
    // const releaseyear = document.querySelector('#edit-release-year').value

    // const author = "Eckhart Tolle"
    // const release_year = '1970'


//     const body = JSON.stringify({title, author, releaseyear, picture })

//     const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${booksID}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body
//     })

//     goToShow(booksID)
//   })
