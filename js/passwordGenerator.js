var char = document.getElementsByName('char')
var count = document.getElementById('lengthPswd').value
var psw = []

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']
var alphabetUpper = alphabet.map(function(x) {
    return x.toUpperCase()
})
var speChar = ['&', '~', '{', '[', '(', '-', '|', '`', "\\", '_', '^', '@', ')', ']', '=', '}', '+', ',', '?', ';', '.', ':', '!', '§', '%', 'µ', '*', '£', '$']

document.querySelector('form').addEventListener('submit', function(e, numbers, alphabet, speChar) {
    e.preventDefault()
    for (var i = 0; i < Number(count); i++) {
        generate(numbers, alphabet, speChar, psw)
    }
})

function generate() {
    if (char[0].checked) {
        var randSpeChar = Math.random() * speChar.length
        psw.push(speChar[Math.round(randSpeChar)])
    }
    if (char[1].checked) {
        var randAlphabet = Math.random() * alphabet.length
        psw.push(alphabet[Math.round(randAlphabet)])
    }
    if (char[2].checked) {
        var randAlphabet = Math.random() * alphabetUpper.length
        var letter = alphabetUpper[Math.round(randAlphabet)]
        psw.push(letter)
    }
    if (char[3].checked) {
        var randNum = Math.random() * numbers.length
        psw.push(numbers[Math.round(randNum)])
    }
}

generate(numbers, alphabet, speChar)