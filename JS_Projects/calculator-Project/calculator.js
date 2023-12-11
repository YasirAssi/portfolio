const check = document.getElementById('check');
const next = document.getElementById('next');
const calc = document.getElementById('calc');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const message = document.getElementById('message');
let operationSelect = document.getElementById('operationSelector');

let operation = operationSelect.value;

check.addEventListener('click', () => checkAnswer());
next.addEventListener('click', () => resetPage());

function getNumbers() {
    return Math.floor(Math.random() * 10 + 1);
}

function checkAnswer() {
    operation = operationSelect.value;
    let exAnswer;
    switch(operation){
        case '-':
                exAnswer = parseInt(num1.innerHTML) - parseInt(num2.innerHTML);
                break;
            case '*':
                exAnswer = parseInt(num1.innerHTML) * parseInt(num2.innerHTML);
                break;
            case '/':
                    exAnswer = Number(parseInt(num1.innerHTML) / parseInt(num2.innerHTML)).toFixed(2);
                break;
            case '+':
            default:
            exAnswer = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    }
    
    let userAnswer = +(calc.value);

    if (userAnswer === exAnswer) {
        message.innerHTML = 'Good Work! go to next exc.';
        check.style.backgroundColor = 'green';
        next.style.backgroundColor = 'aqua';
        next.style.animation = 'mymove 2s';
        calc.style.backgroundColor = 'orange';
    } else {
        message.innerHTML = 'Not a big deal! Try Again!';
        check.style.backgroundColor = 'red';
        next.style.backgroundColor = 'orange';
        next.textContent = 'Try Another One';
        
    }
}

function resetPage() {
    num1.innerHTML = getNumbers();
    num2.innerHTML = getNumbers();
    calc.value = '';
    message.innerHTML = '';
    check.style.backgroundColor = '';
    next.style.animation = '';
    next.style.backgroundColor = '';
    next.textContent = 'Next Exercise';
    calc.style.backgroundColor = '';
}
resetPage();


