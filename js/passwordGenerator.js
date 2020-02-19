var size = document.getElementById('lengthPswd')
var char = document.getElementsByClassName('char')

document.querySelector('form').addEventListener('submit', function() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var alphabet = [a, z, e, r, t, y, u, i, o, p, q, s, d, f, g, h, j, k, l, m, w, x, c, v, b, n]
    var speChar = ['&', '~', '{', '[', '(', '-', '|', '`', '\\', '_', '^', '@', ')', ']', '=', '}', '+', ',', '?', ';', '.', ':', '!', '§', '%', 'µ', '*', '£', '$']

    generate(numbers, alphabet, speChar)
})

function generate(numbers, alphabet, speChar) {

}

generate(numbers, alphabet, speChar)