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
var saveButton = document.getElementById("saveBtn");
var restartButton = document.getElementById("restartBtn");
var allScores = document.getElementById("scorePage");
var scoreList = document.getElementById("scoreList");
var replayButton = document.getElementById("playAgain");
var userInitials = document.getElementById("userInitials");
var viewScores = document.getElementById("viewScores");

// Create array of question objects
var questionArray = [
    { question: "Which of the following is not a basic value type?", answers: ["Strings", "Numbers", "Booleans", "Objects"], correct: "Objects" },
    { question: "Which basic type is a collection of characters within quotation marks?", answers: ["Strings", "Numbers", "Booleans", "Text"], correct: "Strings" },
    { question: "____ can be Integers or Decimals, positive or negative.", answers: ["Strings", "Numbers", "Booleans", "Arrays"], correct: "Numbers" },
    { question: "What is a basic type that is only either true or false?", answers: ["Strings", "Numbers", "Booleans", "Arrays"], correct: "Booleans" },
    { question: "What is a compound value type that can hold lists of any value type?", answers: ["Strings", "Numbers", "Objects", "Arrays"], correct: "Arrays" },
    { question: "What is a compound value type that is a list of key/value pairs?", answers: ["Strings", "Functions", "Objects", "Arrays"], correct: "Objects" },
    { question: "Assign  _____ to store values for use later.", answers: ["Variables", "Functions", "Objects", "Arrays"], correct: "Variables" },
    { question: "_____ and accessors enable us to manipulate values.", answers: ["Strings", "Operators", "Objects", "Arrays"], correct: "Operators" },
    { question: "What does the % (modulus) operator do?", answers: ["It turns a number into a percentage.", "It divides a number in half.", "It gives the remainder from division.", "It denotes a sale item."], correct: "It gives the remainder from division." },
    { question: "Values and operators can combine to form _____ which evaluate to a single value.", answers: ["Functions", "Arguments", "Expressions", "Objects"], correct: "Expressions" },
    { question: "What are > < != and what do they do?", answers: ["They are crocodile mouths that eat numbers.", "They are arithmetic operators that do math.", "Comparison operators that compare values and evaluate to true or false.", "Objects that form facial expressions."], correct: "Comparison operators that compare values and evaluate to true or false." },
    { question: "Which of these are Logical Operators?", answers: ["@ ^ *", "&& || !", "$$ ()", ";-)"], correct: "&& || !" },
    { question: "What is used to access specific elements in arrays or properties in objects?", answers: ["Accessors", "Maps", "Booleans", "Logical Operators"], correct: "Accessors" },
    { question: "How are conditionals, loops, and event listeners similar?", answers: ["They all run continually until stop them.", "They all listen for events.", "They are all used to control the order of our program.", "They all make forks in the road."], correct: "They are all used to control the order of our program." },
    { question: "____ are blocks of code that help organize it, making it more readable, scalable, and testable.", answers: ["Arithmetic operators", "Numbers", "Booleans", "Functions"], correct: "Functions" }
];

// To Do Array
var userScores = [];
init();

// Event Listeners
startButton.addEventListener("click", startQuiz);
replayButton.addEventListener("click", restartQuiz);
restartButton.addEventListener("click", restartQuiz);
saveButton.addEventListener("click", saveScore);
viewScores.addEventListener("click", showScorePage);

// Event listener for quiz button clicks
quizButtons.forEach((button) => {
    button.addEventListener("click", function() {
        var answer = questionArray[questionIndex].correct;
        if (button.textContent === answer) {
            result.textContent = "correct!";
        } else {
            // If incorrect answer clicked, subtract from countdown
            timer = timer - 10;
            result.textContent = "wrong!";
        }
        // Increase current question object index
        questionIndex++;
        // Call Quiz function
        showQuestion();
    });
})

// Start Quiz function
function startQuiz() {
    result.textContent = "";
    //Display quiz section
    quiz.style.display = "flex";
    startSection.style.display = "none";
    // Call quiz function
    showQuestion();
    // Start timer
    startTimer();
}

//Timer function
function startTimer() {
    timeDisplay.textContent = timer;
    var countdown = setInterval(function() {
        timer--;
        timeDisplay.textContent = timer;
        if ((timer <= 0) || (questionIndex >= questionArray.length)) {
            clearInterval(countdown);
            showScore();
        }
    }, 1000);
}

// Quiz function
function showQuestion() {
    // If timer reaches zero or end of question array is reached
    if (questionIndex < questionArray.length) {
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
    var userObject = { initials: userInitials.value, score: finalScore.textContent };
    userScores.push(userObject);
    userInitials.value = "";
    setToLocal();
    showScorePage();
}

function setToLocal() {
    localStorage.setItem("scores", JSON.stringify(userScores));
}

// Display score history
function showScorePage() {
    init();
    startSection.style.display = "none";
    endQuiz.style.display = "none";
    allScores.style.display = "flex";
}

// Render Score History
function renderScores() {
    scoreList.innerHTML = "";

    userScores.forEach(function (obj) {
        var userRecord = document.createElement("li");
        userRecord.textContent = obj.initials + ": " + obj.score;
        scoreList.appendChild(userRecord);
    });
}

function init() {
    var tempScores = JSON.parse(localStorage.getItem("scores"));
    if (tempScores !== null) {
        userScores = tempScores;
        renderScores();
    }
}

function restartQuiz() {
    questionIndex = 0;
    timer = 60;
    endQuiz.style.display = "none";
    allScores.style.display = "none";
    startSection.style.display = "block";
}
