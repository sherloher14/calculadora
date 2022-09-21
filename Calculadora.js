function limpiar() {
    var resultadoElement = document.getElementById("resultado");
    var op1Element = document.getElementById("op1");
    var op2Element = document.getElementById("op2");

    resultadoElement.textContent = "";
    op1Element.value = "";
    op2Element.value = "";
}

function calcular() {
    var resultadoElement = document.getElementById("resultado");
    var op1Element = document.getElementById("op1");
    var listElement = document.getElementById("operands");
    var op2Element = document.getElementById("op2");

    resultadoElement.textContent = evaluar(op1Element.value, op2Element.value, listElement.value);
}

function evaluar(op1, op2, simbol){
    switch(simbol){
        case"^": return Math.pow(parseFloat(op1),parseFloat(op2));  
        case"/": return parseFloat(op1) / parseFloat(op2);
        case"*": return parseFloat(op1) * parseFloat(op2);
        case"+": return parseFloat(op1) + parseFloat(op2);
        case"-": return parseFloat(op1) - parseFloat(op2);
        default: return op1;
    }
}