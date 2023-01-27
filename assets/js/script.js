/* jshint esversion: 11 */

/**
 * Declare constants for DOM elements 
 * and possible choices
 */

const question = document.getElementById('question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');
const answers = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const choicesUl = document.getElementById('choices');

let questionCount = 0;
let scores = 0;
let randomize;

/**
 * The main game function
 */
randomizeQuestions();

function randomizeQuestions() {
    randomize = quizData.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const questionList = randomize[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

function getCheckAnswer() {

    let answer;

    answers.forEach((curAnsElem) => {

        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
}

answers.forEach((curAnsElem) => {
    curAnsElem.addEventListener("click", function () {
        next.classList.remove("hide");
    });
});

/**
 * The function to deselect the selected options
 */

function deselectAll() {

    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

/**
 * Add event listener
 */

next.addEventListener('click', () => {
    next.classList.add("hide");
    const checkedAnswer = getCheckAnswer();
    

    if (checkedAnswer === quizData[questionCount].ans) {
        scores++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizData.length) {
        loadQuestion();
    } else {
        endGame();
    }
});

function endGame() {
    clearInterval(timerinterval);
    question.classList.add("hide");
    choicesUl.classList.add("hide");
    next.classList.add("hide");
    score.innerHTML = `<h3> You scored ${scores}/${quizData.length} </h3>`;
    score.classList.remove('score-area');
}

// Add timer to the questions

const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let timerinterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (minutes <= 0 && seconds <= 0) {
        clearInterval(timerinterval);
        countdownEl.innerHTML = `time up`;
        endGame();
    } else {
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}