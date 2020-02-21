var char = document.getElementsByName('char')
var counter = 0
var characters = []
var psw = []

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']
var alphabetUpper = alphabet.map(function(x) {
    return x.toUpperCase()
})
var speChar = ['&', '~', '{', '[', '(', '-', '|', '`', "\\", '_', '^', '@', ')', ']', '=', '}', '+', ',', '?', ';', '.', ':', '!', '§', '%', 'µ', '*', '£', '$']
var dico = {
    0: function(speChar) {
        var randSpeChar = Math.random() * speChar.length
        return speChar[Math.round(randSpeChar)]
    },
    1: function(alphabet) {
        var randAlphabet = Math.random() * alphabet.length
        return alphabet[Math.round(randAlphabet)]
    },
    2: function(alphabetUpper) {
        var randAlphabet = Math.random() * alphabetUpper.length
        var letter = alphabetUpper[Math.round(randAlphabet)]
        return letter
    },
    3: function(numbers) {
        var randNum = Math.random() * numbers.length
        return numbers[Math.round(randNum)]
    }
}

function generate() {
    if (char[0].checked) {
        characters.push(dico[0](speChar))
        counter++
    }
    if (char[1].checked) {
        characters.push(dico[1](alphabet))
        counter++
    }
    if (char[2].checked) {
        characters.push(dico[2](alphabetUpper))
        counter++
    }
    if (char[3].checked) {
        characters.push(dico[3](numbers))
        counter++
    }

}

function funnel(characters, psw, count) {
    for (var i = 0; i < count; i++) {
        var rand = Math.random() * count
        psw.push(characters[Math.round(rand)])
        characters.reverse().pop()
    }
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    var count = document.getElementById('lengthPswd').value
    for (var i = 0; i < count; i++) {
        generate(numbers, alphabet, speChar, characters)
        if (i == counter) {
            break
        }
    }
    funnel(characters, psw, count)
    document.getElementById('finalPsw').value = psw.join('')
    console.log(psw.length)
    characters = []
    psw = []
})