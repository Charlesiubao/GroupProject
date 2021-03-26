let bookId = null

//PagesGlobal
const frontPage = document.querySelector('.frontPage')
const allBooks = document.querySelector('.screen1')
const edits = document.querySelector('.screen2')
const newAddition = document.querySelector('.screen3')
const view = document.querySelector('.screen4')



//API

const showAllBooks = async () => {
    allBooks.classList.remove('inactive')
    edits.classList.add('inactive')
    newAddition.classList.add('inactive')
    frontPage.classList.add('inactive')
    view.classList.add('inactive')

    const res = await fetch('http://myapi-profstream.herokuapp.com/api/6e5dd1/books')
    const data = await res.json()

    listAll.textContent = ''

        for (book of data) {
            const bookDiv = document.createElement('div')
            bookDiv.classList.add('single-book')
            bookDiv.innerText = `${book.title}, from ${book.author}`
            bookDiv.src = `${book.image}`
            bookDiv.id = 'book-' + book.id
            document.querySelector('#allBooks').append(bookDiv)
    }
}

document.querySelector('#listAll').addEventListener('click', () => {
    allBooks.classList.add('inactive')
    edits.classList.add('inactive')
    newAddition.classList.remove('inactive')
    frontPage.classList.add('inactive')
    view.classList.add('inactive')
})

//addBooks

const addBooks = () => {
    allBooks.classList.add('inactive')
    edits.classList.add('inactive')
    newAddition.classList.remove('inactive')
    frontPage.classList.add('inactive')
    view.classList.add('inactive')
    return
}

const toggleView = async (id) => {
    const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`)
    const data = await res.json()
    console.log(data);

    document.querySelector('#viewTitle').innerText = data.title
    document.querySelector('#viewAuthor').innerText = data.author
    document.querySelector('#viewReleaseDate').innerText = data.release_date
    document.querySelector('#viewImage').src = data.image

    allBooks.classList.add('inactive')
    edits.classList.add('inactive')
    newAddition.classList.add('inactive')
    frontPage.classList.add('inactive')
    view.classList.remove('inactive')

}




//Actions
const toggleFrontPage = () => {
    frontPage.classList.remove('inactive')
    allBooks.classList.add('inactive')
    edits.classList.add('inactive')
    newAddition.classList.add('inactive')
    view.classList.add('inactive')
    return
}

//delete
document.querySelector('#deleteBook').addEventListener('click', async () => {
    await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${bookId}`, {
        method: 'DELETE'
    })
    showAllBooks()
})

//Edit
document.querySelector('#editBook').addEventListener('click', (event) => {
    // edit(bookId)
    console.log("edit")
})

const edit = async (id) => {

    const res = await fetch(`http://myapi-profstream.herokuapp.com/api/6e5dd1/books/${id}`)
    const book = await res.json()

    document.querySelector('#editBook').value = book.title
    document.querySelector('#editAuthor').value = book.author
    document.querySelector('#editReleaseDate').value = book.release_date

    allBooks.classList.add('inactive')
    edits.classList.remove('inactive')
    newAddition.classList.add('inactive')
    frontPage.classList.add('inactive')
    view.classList.add('inactive')
    return
}

document.addEventListener('click', async (event) => {
    if (event.target.matches('.single-book')) {
        bookId = event.target.id.replace('book-', '')
        toggleView(bookId)
    }
})




document.querySelector("#newBookForm").addEventListener('submit', async (event) => {
    event.preventDefault()

    const title = document.querySelector('#nameOfBook').value
    const author = document.querySelector('#newAuthor').value
    const release_date = document.querySelector('#releaseDate').value
    const image = ""

    const body = JSON.stringify({
        title,
        author,
        release_date,
        image,
    })

    const res = await fetch('http://myapi-profstream.herokuapp.com/api/6e5dd1/books/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })

    const data = await res.json()
    toggleView(data.id)
})

// const res = await




const listAll = document.querySelector('#listAll')
listAll.addEventListener('click', () => {
    showAllBooks()

    pageTurn.play()
    // console.log('listAll')
})

const addNew = document.querySelector('#addNew')
addNew.addEventListener('click', () => {
    addBooks()
    pageTurn.play()
    // console.log('addNew')
})

const goBack = document.querySelector('.goBack')
goBack.addEventListener('click', () => {
    pageTurn.play()
    // toggleFrontPage()
    location.reload();
})

//soundEffects
let pageTurn = new Audio('assets/pageTurn.mp3')
pageTurn.volume = 0.8;
