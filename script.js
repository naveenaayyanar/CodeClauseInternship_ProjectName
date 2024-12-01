const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2 // index of the correct answer
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${currentQuiz.question}</h2>
        <ul class="options">
            ${currentQuiz.options
                .map((option, index) => `<li><button onclick="selectOption(${index})">${option}</button></li>`)
                .join("")}
        </ul>
    `;
}

function selectOption(selected) {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach((button, index) => {
        if (index === quizData[currentQuestion].correct) {
            button.classList.add("correct");
        } else if (index === selected) {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
    nextButton.disabled = true;
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Initialize the quiz
loadQuestion();
nextButton.disabled = true;
