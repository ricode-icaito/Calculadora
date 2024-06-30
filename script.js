document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let firstOperand = '';
    let secondOperand = '';
    let operator = '';
    let shouldResetScreen = false;

    document.querySelectorAll('.number').forEach(number => {
        number.addEventListener('click', function() {
            if (display.textContent === '0' || shouldResetScreen) resetScreen();
            display.textContent += this.textContent;
        });
    });

    document.querySelectorAll('.operator').forEach(operatorButton => {
        operatorButton.addEventListener('click', function() {
            if (operator) calculate();
            firstOperand = display.textContent;
            operator = this.textContent;
            shouldResetScreen = true;
        });
    });

    document.getElementById('equals').addEventListener('click', function() {
        calculate();
        operator = '';
    });

    document.getElementById('clear').addEventListener('click', resetCalculator);

    function resetScreen() {
        display.textContent = '';
        shouldResetScreen = false;
    }

    function resetCalculator() {
        display.textContent = '0';
        firstOperand = '';
        secondOperand = '';
        operator = '';
        shouldResetScreen = false;
    }

    function calculate() {
        if (operator === '/' && display.textContent === '0') {
            alert("Can't divide by 0!");
            resetCalculator();
            return;
        }
        secondOperand = display.textContent;
        display.textContent = operate(operator, firstOperand, secondOperand);
        firstOperand = display.textContent;
        shouldResetScreen = true;
    }

    function operate(operator, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch(operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                if (b === 0) return "Error";
                else return (a / b).toString();
            default:
                return "Error";
        }
    }
});
