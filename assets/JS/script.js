function writeToDisplay(string) {
    document.getElementById('display').value += string
}

function showResult() {
    let result = eval(document.getElementById('display').value)

    document.getElementById('display').value = result
}

function operazione() {
    document.getElementById('display').value = eval(document.getElementById('display').value)
}

function cancellDisplay() {
    document.getElementById('display').value = ''
}