var sizeMin = document.getElementById('lengthPswd').getAttribute('min')
var sizeMax = document.getElementById('lengthPswd').getAttribute('max')
var char = document.getElementsByName('char')
var counter = 0
var psw = []

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']
var speChar = ['&', '~', '{', '[', '(', '-', '|', '`', '\\', '_', '^', '@', ')', ']', '=', '}', '+', ',', '?', ';', '.', ':', '!', '§', '%', 'µ', '*', '£', '$']

document.querySelector('form').addEventListener('submit', function(e, numbers, alphabet, speChar) {
    e.preventDefault()
    generate(numbers, alphabet, speChar, counter, psw)
})

function setRange(sizeMin) {
    document.getElementById("sizePsw").setAttribute('value', sizeMin + 1)
    console.log(sizeMin + 1)
}

setRange(sizeMin)

function generate() {
    if (char[0].checked) {
        var randSpeChar = Math.random() * Number(speChar.length)
        psw.push(speChar[Math.round(randSpeChar)])
        counter++
    }
    if (char[1].checked) {
        var randAlphabet = Math.random() * Number(alphabet.length)
        psw.push(alphabet[Math.round(randAlphabet)])
        counter++
    }
    if (char[2].checked) {
        var randAlphabet = Math.random() * Number(alphabet.length)
        psw.push(alphabet[Math.round(randAlphabet)].toUpperCase())
        counter++
    }
    if (char[3].checked) {
        var randNum = Math.random() * Number(numbers.length)
        psw.push(numbers[Math.round(randNum)])
        counter++
    }
    console.log(psw)
    console.log(counter)
}

generate(numbers, alphabet, speChar)