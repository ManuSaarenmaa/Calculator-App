let currentInput = "";
let operation = "";
let previousInput = "";
let actionHistory = [];

function appendNumber(number) {
    currentInput += number.toString();
    document.getElementById("input").value = currentInput;
    actionHistory.push({type: "number", value: number});
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
    actionHistory.push({type: "operation", value: op});
}

function calculateResult() {
    if(currentInput === "" || previousInput === "") return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":  
        result = prev - current;
        break;
      case "x":
        result = prev * current; 
        break;
      case "/":
        result = prev / current;
        break;
    default:
        return;
    }
    
    currentInput = result.toString();
    operation = "";
    previousInput = "";
    actionHistory.push({type: "result", value: result});
    document.getElementById("input").value = currentInput;
}


function clearScreen() {
    currentInput = "";
    previousInput = "";
    operation = "";
    actionHistory = [];
    document.getElementById("input").value = "";
}


function backspace() {
    if (actionHistory.length === 0) return;

    const lastAction = actionHistory.pop();

    if(lastAction.type === "number") {
        currentInput = currentInput.slice(0, -1);
        document.getElementById("input").value = currentInput;
    }else if (lastAction.type === "operation") {
        currentInput = previousInput;
        previousInput = "";
        operation = "";
        document.getElementById("input").value = currentInput;
    }else if (lastAction.type === "result") {
        currentInput = "";
        previousInput = "";
        operation = "";
        document.getElementById("input").value = "";
    }
}




const themeSlider = document.getElementById("themeSlider")
const themelink = document.getElementById("themeLink")

themeSlider.addEventListener("input", function() {
    const themeIndex = themeSlider.value;

    if(themeIndex == 0) {
        themelink.href = "/styles/mobileT1.css";
    }else if (themeIndex == 1) {
        themelink.href = "/styles/mobileT2.css";
    }else if (themeIndex == 2) {
        themelink.href = "/styles/mobileT3.css"
    }
});