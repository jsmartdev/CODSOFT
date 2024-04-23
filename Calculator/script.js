const topScreen = document.getElementById("top-screen");
const bottomScreen = document.getElementById("bottom-screen")
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const negative = document.getElementById("negative");
const decimal = document.getElementById("decimal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".button");
let previousNumber = "";
let currentNumber = "";
let currentOperator = "";
let currentWritable = true;


// Utility Functions

let display = (screen, input) => {
  screen.innerText = input;      
}

let refresh = (...screen) => {
  screen.forEach((field) => (field.innerText = ""));
}

let endsWithNumber = (string) => {
  return /[0-9]+$/.test(string);
}

// Event Handlers

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if(currentWritable == true) {
      currentNumber += event.target.innerText;
      display(bottomScreen, currentNumber);
    }
  });  
})

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    if(currentOperator.length == 0 && endsWithNumber(currentNumber)) {
      currentOperator = event.target.innerText;  
      previousNumber = currentNumber;
      currentNumber = "";
      refresh(bottomScreen);
      display(topScreen, `${previousNumber} ${currentOperator}`);
      currentWritable = true;
    } 
  })
});

decimal.addEventListener("click", (event) => {
  if(!currentNumber.includes(".")) {
    currentNumber += event.target.innerText;
    display(bottomScreen, currentNumber);
  }
});

negative.addEventListener("click", (event) => {
  if(currentNumber.length == 0) {
    currentNumber += "-";
    display(bottomScreen, currentNumber);
  }
});

backspace.addEventListener("click", (event) => {
  if (currentWritable == true) {
    currentNumber = currentNumber.slice(0, -1);
  display(bottomScreen, currentNumber);  
  }
});

clear.addEventListener("click", (event) => {
  refresh(topScreen, bottomScreen);
  currentNumber = "";
  previousNumber = "";
  currentOperator = "";
  currentWritable = true;
});

equals.addEventListener("click", (event) => {
  if(currentOperator.length > 0 && endsWithNumber(currentNumber)) {
    display(topScreen, `${previousNumber} ${currentOperator} ${currentNumber}`);
    refresh(bottomScreen);
    switch (currentOperator) {
      case "+": 
        currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case "-":
        currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case "x":
        currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
        case "÷":
        currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      case "%":
          currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber / 100);
          break;
    }
    display(bottomScreen, currentNumber);
    currentOperator = "";
    currentWritable = false;
  }
});