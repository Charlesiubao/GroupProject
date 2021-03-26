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
            bookDiv.innerText = `${book.name}, from ${book.author}`
            bookDiv.id = 'book-' + book.id
            document.querySelector('#allBooks').append(bookDiv)
    }
}



//addBooks 

document.querySelector("#newBookForm").addEventListener('submit', async (event) => {
    event.preventDefault()

    const title = document.querySelector('#nameOfBook').value
    const author = document.querySelector('#newAuthor').value

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





//Actions
const toggleFrontPage = () => {
    frontPage.classList.remove('inactive')
    allBooks.classList.add('inactive')
    edits.classList.add('inactive')
    newAddition.classList.add('inactive')
    view.classList.add('inactive')
    return
}

//Edit
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

