const quizData = [{
    question: "A Full Stack developer should be able to write front-end code in which of the following?",
    a: "Java",
    b: "Javascript",
    c: "HTML",
    d: "All of the above",
    ans: "choice4"
}, {
    question: "Which of the following are front end technologies?",
    a: "JQuery",
    b: "SASS",
    c: "AngularJS",
    d: "All of the above",
    ans: "choice4"
}, {
    question: "Which of the following are popular databases?",
    a: "MySQL",
    b: "Oracle",
    c: "MongoDB",
    d: "All of the above",
    ans: "choice4"
}, {
    question: "Why do we use JQuery?",
    a: "Creation of mobile Application",
    b: "Creation of Interactive website",
    c: "Database connectivity",
    d: "None of the above",
    ans: "choice2"
}, {
    question: "A Full Stack developer works on which of the following ?",
    a: "Mobile Application Development",
    b: "Web Development",
    c: "Database Technologies",
    d: "All of the above",
    ans: "choice4"
}];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');

const answers = document.querySelectorAll('.choice');

let questionCount = 0;
let score = 0;

function loadQuestion() {

    const questionList = quizData[questionCount];

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
};

next.addEventListener('click', () => {
    if ((questionCount + 1) <= quizData.length) {
        const checkedAnswer = getCheckAnswer();

        if (checkedAnswer === quizData[questionCount].ans) {
            score++;

        };

        questionCount++;

        if (questionCount < quizData.length) {
            loadQuestion();
        }
    }

})