"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function calculator() {
    const num1 = parseFloat(input('Enter first number: '));
    const num2 = parseFloat(input('Enter second number: '));
    const operator = input('Enter operator (+, -, *, /, %): ');
    let result;
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
