// http://myapi-profstream.herokuapp.com/api/6e5dd1/books
// books of data

let booksID = null

const bookIndex = async () => {

// document.querySelector('.allBooks').classList.remove(‘hidden’)
// document.querySelector('.edits').classList.remove(‘hidden’)
// document.querySelector(‘#new’).classList.add(‘hidden’)
// document.querySelector(‘#edit’).classList.add(‘hidden’)

const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books`)
const data = await res.json()

document.querySelector(`#listall`).textContent = ‘’

for (book of data) {

	const bookDiv = document.createElement(`div`)
    bookDiv.classList.add(`single-book`)
    bookDiv.innerText = `${book.title}, from ${book.author}`
    bookDiv.id = 'book-` + book.id
    document.querySelector('#listall').append(bookDiv)

}
}


const goToShow = async (id) => {
    const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`)
    const data = await res.json()
    document.createElement(`div`)
    document.classList.add(`show-name`)
    document.classList.add(`show-book-author`)
    document.classList.add(`show-release`)
    document.classList.add(`show-cover`)
    document.querySelector(`.show-name`).innerText = data.name
    document.querySelector(`.show-book-author`).innerText = `${data.author}`
    document.querySelector(`.show-title`).innerText = data.title
    document.querySelector(`.show-release`).innerText = data.release_year
    document.querySelector(`.show-cover`).src = data.image

    document.querySelector('#new').classList.add('hidden')
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
