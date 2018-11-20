var firstOperand = '0';
var operator = '+';
var waitingForSecondOperand = false;

function calc(g, v) {
  //console.log(g, v);
  var currentValue = document.querySelector('#currentValue');
  switch (g) {
    case 'num':
      if (waitingForSecondOperand) {
        currentValue.value = '';
        waitingForSecondOperand = false;
      }
      if (currentValue.value == '0')
        currentValue.value = '';
      currentValue.value += v;
      break;
    case 'dec':
      if (currentValue.value.indexOf('.') == -1)
        currentValue.value += '.';
      break;
    case 'op':
      calc('equal');
      firstOperand = currentValue.value;
      operator = v;
      waitingForSecondOperand = true;
      break;
    case 'equal':
      switch (operator) {
        case '+':
          currentValue.value = currentValue.value * 1 + parseFloat(firstOperand);
          break;
        case '-':
          currentValue.value = firstOperand - currentValue.value;
          break;
        case '/':
          currentValue.value = firstOperand / currentValue.value;
          break;
        case 'x':
          currentValue.value = firstOperand * currentValue.value;
          break;
        case '%':
          currentValue.value = (firstOperand / 100) * currentValue.value;
        break; 
      }
      break;
    case 'sp':
      if (v === 'ac')
        currentValue.value = '0';
      if (v === 'c') {
        currentValue.value =  currentValue.value.slice(0, currentValue.value.length-1);
        if (currentValue.value === '')
          currentValue.value = '0';
      }
      break;
  }
}