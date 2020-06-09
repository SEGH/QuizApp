// Assignments
var startSection = document.getElementById("startPage");
var startButton = startSection.querySelector("button");
var quiz = document.getElementById("quizPage");
var question = document.getElementById("question");
var questionIndex = 0;
var quizButtons = quiz.querySelectorAll("button");
var timer = 60;

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
        console.log(timer);
        if (timer <= 0) {
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
            console.log("correct!");
        } else {
            // If incorrect answer clicked, subtract from countdown
            timer = timer - 10;
            console.log(button.textContent);
            console.log(timer);
            console.log("wrong!");
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
        console.log("scores");
    } else {
        // Display current question object question
        question.textContent = questionArray[questionIndex].question;
        // Display current question object answers as button text content
        for (var i = 0; i < quizButtons.length; i++) {
            quizButtons[i].textContent = questionArray[questionIndex].answers[i];
        }
    }
}        