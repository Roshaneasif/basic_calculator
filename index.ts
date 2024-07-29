import prompt from 'prompt-sync';
const input = prompt();
function calculator() {
  const num1 = parseFloat(input('Enter first number: '));
  const num2 = parseFloat(input('Enter second number: '));
  const operator = input('Enter operator (+, -, *, /, %): ');
  let result: number;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.error('Division by zero is not allowed.');
        return;
      }
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.error('Invalid operator');
      return;
  }
  console.log('Result:', result);
}
calculator();
