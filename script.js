// Assignments
var startSection = document.getElementById("startPage");
var startButton = startSection.querySelector("button");
var quiz = document.getElementById("quizPage");

// Create array of question objects

//Timer function

// Event listener for start button
startButton.addEventListener("click", function() {
    //Display quiz section
    quiz.style.display = "flex";
    startSection.style.display = "none";
    // Call quiz function
    // Start timer
});

// Event listener for quiz button clicks
    // If incorrect answer clicked, subtract from countdown
    // Increase current question object index
    // Call Quiz function

// Quiz function
    // Display current question object question
    // Display current question object answers as button text content
    // If timer reaches zero or end of question array is reached
        // Display score screen