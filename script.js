// Assignments
var startSection = document.getElementById("startPage");
var startButton = startSection.querySelector("button");
var quiz = document.getElementById("quizPage");
var question = document.getElementById("question");
var questionIndex = 0;
var quizButtons = quiz.querySelectorAll("button");

// Create array of question objects
var questionArray = [
    { question: "What is the answer to this?", answers: ["a", "b", "c", "d"], correct: "a" },
    { question: "another for you?", answers: ["my answer", "your answer", "answer", "hmm"], correct: "hmm" },
    { question: "what about this?", answers: ["this", "that", "the other one", "final"], correct: "final" }
];

//Timer function

// Event listener for start button
startButton.addEventListener("click", function() {
    //Display quiz section
    quiz.style.display = "flex";
    startSection.style.display = "none";
    // Call quiz function
    showQuestion();
    // Start timer
});

// Event listener for quiz button clicks
    // If incorrect answer clicked, subtract from countdown
    // Increase current question object index
    // Call Quiz function

// Quiz function
function showQuestion() {
    // Display current question object question
    question.textContent = questionArray[questionIndex].question;
    // Display current question object answers as button text content
    for (var i = 0; i < quizButtons.length; i++) {
        quizButtons[i].textContent = questionArray[questionIndex].answers[i];
    }
}
    
    
    // If timer reaches zero or end of question array is reached
        // Display score screen

// // Quiz function
// function runQuiz() {
//     // Timer counting down
//     // Loop through array of question objects
//     question.textContent = questionArray[questionIndex].question;
//         for (var j = 0; j < questionArray[questionIndex].answers.length; j++) {
//             // Set buttons as current object choices
//             quizButtons[j].textContent = questionArray[questionIndex].answers[j];
//         }


//         // Event listener for choice button clicks
//         clickButton();

// }