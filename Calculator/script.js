let currentInput = "";

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
