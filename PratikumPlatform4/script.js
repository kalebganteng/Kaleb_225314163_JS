document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key)) {
        addToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        addToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Input tidak valid!');
    }
}

function squareRoot() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Input tidak valid!');
    }
}
