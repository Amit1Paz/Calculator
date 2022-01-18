let lastNum = false;
let answer = false;
let lastOperator = '';
let current;
const smallDigits = document.querySelector('.screen__small-digits');
const bigDigits = document.querySelector('.screen__digits');
const digitBtns = document.querySelectorAll('.btns__num');
const deleteBtn = document.querySelector('#del');
const operators = document.querySelectorAll('.btns__operators');
const resetBtn  = document.querySelector('#reset');
const sumBtn = document.querySelector('#equal');
 

digitBtns.forEach(btn => btn.addEventListener('click', clickOnNumber));
function clickOnNumber() {
    if (bigDigits.innerText.length < 15) {
        if (answer === true) {
            answer = false;
            resetCalculator();
        }
        if (this.innerText === '.' && bigDigits.innerText.includes('.') === true) {
            return;
        } else if (bigDigits.innerText === '0' && this.innerText !== '.') {
            bigDigits.innerText = this.innerText
        } else {
            bigDigits.innerText += this.innerText;
        }
    }
    if (bigDigits.innerText === '00') {
    bigDigits.innerText = '0'
    }
}

operators.forEach(operator => operator.addEventListener('click', calculate));
function calculate () {
    if (bigDigits.innerText.length > 0) {
        if (lastNum === false) {
            lastNum = parseFloat(bigDigits.innerText);
            lastOperator = this.innerText;
        } else if (answer === true) {
            answer = false;
            lastOperator = this.innerText; 
            lastNum = parseFloat(bigDigits.innerText);
        } else {
            current = parseFloat(bigDigits.innerText);
            switch (lastOperator) {
                case '+':
                    lastNum += current;
                    break;
                case '-':
                    lastNum -= current;
                    break;
                case '/': 
                    lastNum /= current;
                    break;
                case 'x':
                    lastNum *= current;
                    break;       
                }
            }
        lastOperator = this.innerText;
        bigDigits.innerText = '';
        smallDigits.innerText = lastNum;
        if (smallDigits.innerText === 'Infinity') {
            smallDigits.innerText = ''
            bigDigits.innerText = 'Error';
        }
    } else {
        lastOperator = this.innerText;
    }
}

deleteBtn.addEventListener('click', deleteDigit);
function deleteDigit() {
    if (answer === false) {       
        bigDigits.innerText = bigDigits.innerText.slice(0, -1);
    }
}

resetBtn.addEventListener('click', resetCalculator);
function resetCalculator() {
    bigDigits.innerText = '';
    smallDigits.innerText = '';
    lastNum = false;
    lastOperator = '';
}

sumBtn.addEventListener('click', sum);
function sum () {
    if (lastNum !== false) {
        current = parseFloat(bigDigits.innerText);
        switch (lastOperator) {
            case '+':
                lastNum += current;
                break;
            case '-':
                lastNum -= current;
                break;
            case '/': 
                lastNum /= current;
                break;
            case 'x':
                lastNum *= current;
                break;       
        }
        bigDigits.innerText = lastNum;
        if (bigDigits.innerText === 'Infinity') {
            bigDigits.innerText = 'Error';
        }
        smallDigits.innerText = '';
        lastOperator = '';
        answer = true;
    }
}

// keyboard
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
window.addEventListener('keydown', (key) => {
    switch (key.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            for (let i = 0; i < digitBtns.length; i++) {
                if (digitBtns[i].innerText === key.key) {
                    digitBtns[i].click();
                }
            }
            break;
        case '+':
        case '-':
        case '/':
            for (let i = 0; i < operators.length; i++) {
                if (operators[i].innerText === key.key) {
                    operators[i].click();
                }
            }
            break;
        case '*':
            operators[3].click();
            break;
        case 'Enter':
        case '=':
            sum();
            break;
        case 'Backspace':
        case 'Delete':
            deleteDigit();
            break;
        case 'Escape':
            resetCalculator();
            break;

    }

})

// themes
const toggleBtn = document.getElementById('toggle');
toggleBtn.addEventListener('click', toggle)
function toggle () {
    if(window.getComputedStyle(toggleBtn).justifyContent === 'flex-start') {
        toggleBtn.style.justifyContent = 'center'
        secondTheme();
    } else if (window.getComputedStyle(toggleBtn).justifyContent === 'center') {
        toggleBtn.style.justifyContent = 'flex-end';
        thirdTheme();
    } else {
        toggleBtn.style.justifyContent = 'flex-start'
        firstTheme();
    }
}

function firstTheme () {
    document.documentElement.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
    document.documentElement.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)');
    document.documentElement.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
    document.documentElement.style.setProperty('--key-background', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--small-digits', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--red-key-background-toogle', 'hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--dark-red-key-shadow', 'hsl(6, 70%, 34%)');
    document.documentElement.style.setProperty('--light-gray-key-background', 'hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--gray-orange-key-shadow', 'hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--text-dark-blue', 'hsl(221, 14%, 31%)');
    bigDigits.style.color = 'white'
}
function secondTheme () {
    document.documentElement.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
    document.documentElement.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)');
    document.documentElement.style.setProperty('--screen-background', 'hsl(0, 0%, 93%');
    document.documentElement.style.setProperty('--key-background', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--small-digits', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--red-key-background-toogle', 'hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--dark-red-key-shadow', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--light-gray-key-background', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--gray-orange-key-shadow', 'hsl(35, 11%, 61%)');
    document.documentElement.style.setProperty('--text-dark-blue', 'hsl(60, 10%, 19%)');
    bigDigits.style.color = 'black'
}
function thirdTheme () {
    document.documentElement.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
    document.documentElement.style.setProperty('--toggle-background', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--key-background', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--small-digits', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--red-key-background-toogle', 'hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--dark-red-key-shadow', 'hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--light-gray-key-background', 'hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--gray-orange-key-shadow', 'hsl(290, 70%, 36%)');
    document.documentElement.style.setProperty('--text-dark-blue', 'hsl(52, 100%, 62%)');
    bigDigits.style.color = 'hsl(52, 100%, 62%)'
}