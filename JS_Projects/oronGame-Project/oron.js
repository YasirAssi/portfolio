const check = document.getElementById('check');
const next = document.getElementById('next');
const sum = document.getElementById('sum');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const message = document.getElementById('message');

check.addEventListener('click', () => checkAnswer());
next.addEventListener('click', () => resetPage());

function getNumbers() {
    return Math.floor(Math.random() * 10 + 1);
}

function checkAnswer() {
    let answerEx = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    let answerUser = parseInt(sum.value);

    if (answerUser === answerEx) {
        message.innerHTML = 'Good Work! go to next exc.';
    } else {
        message.innerHTML = 'Not a big deal! Try Again!';
    }
}

function resetPage() {
    num1.innerHTML = getNumbers();
    num2.innerHTML = getNumbers();
    sum.value = '';
    message.innerHTML = '';
}
resetPage();

