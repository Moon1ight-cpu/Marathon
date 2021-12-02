import { output } from './view.js';
import { backspace } from './view.js';
import { clear } from './view.js';
import { numbers } from './view.js';
import { operators } from './view.js';
import { equals } from './view.js';

let operand1;
let operator;
let operand2;

let operatorIsActive = false;

const DEFAULT_FONT_SIZE = 'font-size: 96px';
const SMALL_FONT_SIZE = 'font-size: 64px';

backspace.addEventListener('click', function () {
	if (output.textContent.length === 1) {
		output.textContent = 0;
	} else {
		output.textContent = output.textContent.slice(0, output.textContent.length - 1);
	}
}); //backspace

clear.addEventListener('click', function () {
	output.textContent = 0;
	operand1 = null;
	operand2 = null;
	operator = null;
});

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function () {
		if (output.textContent === '0') output.textContent = '';

		if (operatorIsActive) {
			operatorIsActive = false;
			output.textContent = numbers[i].textContent;
		} else {
			output.textContent += numbers[i].textContent;
		}

		if (output.textContent.length > 9)
			output.textContent = output.textContent.slice(0, 9);

		if (output.textContent.length > 6) {
			output.style.cssText = SMALL_FONT_SIZE;
		} else {
			output.style.cssText = DEFAULT_FONT_SIZE;
		}
	});
}

for (let j = 0; j < operators.length; j++) {
	operators[j].addEventListener('click', function (i) {
		operand1 = +output.textContent;
		operator = operators[j].value;

		operatorIsActive = true;
		// output.textContent = 0;
	});
}

equals.addEventListener('click', function () {
	operand2 = +output.textContent;

	switch (operator) {
		case '+':
			output.textContent = operand1 + operand2;
			break;
		case '-':
			output.textContent = operand1 - operand2;
			break;
		case '*':
			output.textContent = operand1 * operand2;
			break;
		case '/':
			if (operand2 === 0) {
				output.textContent = 'Error';
				break;
			}
			output.textContent = operand1 / operand2;
			break;
	}
});
