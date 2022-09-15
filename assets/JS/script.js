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

function cancelDisplay() {
    document.getElementById('display').value = ''
}

function addVirgola(aggiugoVirgola) {
    document.getElementById('display').value += aggiugoVirgola
}

