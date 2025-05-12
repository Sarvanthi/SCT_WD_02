let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}

function sqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function square() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function cube() {
    display.value = Math.pow(parseFloat(display.value), 3);
}
function clearLast() {
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    display.value = "";
}