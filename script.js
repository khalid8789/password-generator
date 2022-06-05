const password = document.querySelector('.password')
const button = document.querySelector('.generate-pass')
const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', '0', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
]
let pwrd = ''


for(let i = 0; i < characters.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    const randomChar = characters[randomIndex]
    pwrd = pwrd + randomChar
}

button.onclick = function() {
    password.innerHTML = pwrd
}