// Characters in 4 differents arrays
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']
var alphabetUpper = alphabet.map(function(x) {
    return x.toUpperCase()
})
var speChar = ['&', '~', '#', '{', '[', '(', '-', '|', '`', "\\", '_', '^', '@', ')', ']', '=', '}', '+', ',', '?', ';', '.', ':', '!', '§', '%', 'µ', '*', '£', '$']

function generate(numbers, alphabet, speChar, count, char) {
    // Empty array (contains characters arrays after if checked)
    var characters = []
    var items = ''
    var psw = ''
        // Control if a type of character is check into the form and 
        // add the following list into the characters type list
        // otherwise remove into the characters type list
    if (char[0].checked) {
        characters.push(speChar)
    } else {
        characters.splice(0, 1)
    }
    if (char[1].checked) {
        characters.push(alphabet)
    } else {
        characters.splice(1, 1)
    }
    if (char[2].checked) {
        characters.push(alphabetUpper)
    } else {
        characters.splice(2, 1)
    }
    if (char[3].checked) {
        characters.push(numbers)
    } else {
        characters.splice(3, 1)
    }
    // Put characters inside a single string
    for (var i = 0; i < characters.length; i++) {
        for (j = 0; j < characters[i].length; j++) {
            items += characters[i][j]
        }
    }
    // Build the password
    for (var i = 0; i < count; i++) {
        items.split("").reverse().join("") // reverse to limit double characters
        psw += items[Math.round(Math.random() * items.length)]
    }
    return psw
}
// Trigged by a click
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
        // Select the length setted into the form
    var count = document.getElementById('lengthPswd').value
    var char = document.getElementsByName('char') // select checkboxes
        // Generate the password and verify if 'undefined' characters aren't 
        // into the generated password
    var pswFinal = generate(numbers, alphabet, speChar, count, char)
    if (!pswFinal.includes('undefined')) {
        document.getElementById('finalPsw').value = pswFinal
        console.log(pswFinal.length)
    }
})