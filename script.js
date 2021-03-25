
//API




//Pages
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const screen3 = document.querySelector('.screen3')

//Actions
const toggleScreen1 = () => {
    screen1.classList.remove('inactive')
    screen2.classList.add('inactive')
    screen3.classList.add('inactive')
    return
}

const toggleScreen2 = () => {
    screen1.classList.add('inactive')
    screen2.classList.remove('inactive')
    screen3.classList.add('inactive')
    return
}

const toggleScreen3 = () => {
    screen1.classList.add('inactive')
    screen2.classList.add('inactive')
    screen3.classList.remove('inactive')
    return
}



const listAll = document.querySelector('#listAll')
listAll.addEventListener('click', () => {
    toggleScreen1()
    buttonSound.play()
    // console.log('listAll')
})

const addNew = document.querySelector('#addNew')
addNew.addEventListener('click', () => {
    toggleScreen2()
    buttonSound.play()
    // console.log('addNew')
})

const goBack = document.querySelector('.goBack')
goBack.addEventListener('click', () => {
    location.reload()
})

//Audio
let buttonSound = new Audio('assets/pageTurn.mp3')
buttonSound.volume = 0.5;

let sound = document.querySelectorAll('.sound')
sound.forEach(button => {
    button.addEventListener('click', () => {
        buttonSound.play()
    })
})