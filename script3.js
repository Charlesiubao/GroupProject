// http://myapi-profstream.herokuapp.com/api/6e5dd1/books
// books of data

let booksID = null
(list all, add new)

const bookIndex = async ()
 => {

document.querySelector(#list-all).classList.remove(‘hidden’)
document.querySelector(#add-new).classList.remove(‘hidden’)
document.querySelector(‘#new’).classList.add(‘hidden’)
document.querySelector(‘#edit’).classList.add(‘hidden’)

const res = await fetch(‘http://myapi-profstream.herokuapp.com/api/6e5dd1/books')
const data = await res.json()

document.querySelector(‘#list-all’).textContent = ‘’

for (books of data) {

	const
