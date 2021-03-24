//Pages
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('screen2')

//Actions
const toggleScreen1 = () => {
    screen1.classList.remove('inactive')
    screen2.classList.add('inactive')
    return
}

const toggleScreen2 = () => {
    screen1.classList.add('inactive')
    screen2.classList.remove('inactive')
    return
}

const listAll = document.querySelector('#listAll')
listAll.addEventListener('click', () => {
    toggleScreen1()
})

const addNew = document.querySelector('#addNew')
addNew.addEventListener('click', () => {
    toggleScreen2()
})