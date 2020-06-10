// Assignments
var startSection = document.getElementById("startPage");
var startButton = startSection.querySelector("button");
var quiz = document.getElementById("quizPage");
var question = document.getElementById("question");
var result = document.getElementById("result");
var questionIndex = 0;
var quizButtons = quiz.querySelectorAll("button");
var timeDisplay = document.getElementById("timer");
var timer = 60;
var endQuiz = document.getElementById("endPage");
var finalScore = document.getElementById("finalScore");
var restartButton = document.getElementById("restartBtn");

// Create array of question objects
var questionArray = [
    { question: "What is the answer to this?", answers: ["a", "b", "c", "d"], correct: "a" },
    { question: "another for you?", answers: ["my answer", "your answer", "answer", "hmm"], correct: "hmm" },
    { question: "what about this?", answers: ["this", "that", "the other one", "final"], correct: "final" },
    { question: "What is the answer to this?", answers: ["a", "b", "c", "d"], correct: "a" },
    { question: "another for you?", answers: ["my answer", "your answer", "answer", "hmm"], correct: "hmm" },
    { question: "what about this?", answers: ["this", "that", "the other one", "final"], correct: "final" }
];

//Timer function
function startTimer() {
    var countdown = setInterval(function() {
        timer--;
        timeDisplay.textContent = timer;
        if ((timer <= 0) || (questionIndex >= questionArray.length)) {
            clearInterval(countdown);
        }
    }, 1000);
}

// Event listener for start button
startButton.addEventListener("click", function() {
    //Display quiz section
    quiz.style.display = "flex";
    startSection.style.display = "none";
    // Call quiz function
    showQuestion();
    // Start timer
    startTimer();
});

// Event listener for quiz button clicks
quizButtons.forEach((button) => {
    button.addEventListener("click", function() {
        var answer = questionArray[questionIndex].correct;
        if (button.textContent === answer) {
            console.log(button.textContent);
            result.textContent = "correct!";
        } else {
            // If incorrect answer clicked, subtract from countdown
            timer = timer - 10;
            console.log(button.textContent);
            console.log(timer);
            result.textContent = "wrong!";
        }
        // Increase current question object index
        questionIndex++;
        // Call Quiz function
        showQuestion();
    });
})

// Quiz function
function showQuestion() {
    // If timer reaches zero or end of question array is reached
    if (questionIndex >= questionArray.length) {
        // Display score screen
        showScore();
    } else {
        // Display current question object question
        question.textContent = questionArray[questionIndex].question;
        // Display current question object answers as button text content
        for (var i = 0; i < quizButtons.length; i++) {
            quizButtons[i].textContent = questionArray[questionIndex].answers[i];
        }
    }
}

// Show Final Score
function showScore() {
    finalScore.textContent = timer;
    quiz.style.display = "none";
    endQuiz.style.display = "flex";
}

// Save Score Function
function saveScore() {
    // Save score and initals to local storage
}

// Event Listener for restart button
restartButton.addEventListener("click", function() {
    questionIndex = 0;
    timer = 60;
    endQuiz.style.display = "none";
    startSection.style.display = "block";
})