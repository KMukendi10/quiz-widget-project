// =====================================================
// QUIZ APP PROJECT
// =====================================================
// GROUP MEMBERS:
//
// Kazadi -> Quiz Data + Render Questions
// Tina -> Answer Selection Logic
// Ricardo -> Core Quiz Logic + Scoring
// Mukelani -> Navigation + Reset System
// Genius -> Results System + Extra Features
// =====================================================

// =====================================================
// FINAL RESULTS + EXTRA FEATURES (Genius)
// =====================================================
function showFinalScore() {

const container =
document.getElementById("quiz-container");

// Result message
let message = "";

if (score === quizData.length) {

message = ":trophy: Perfect Score!";

}

else if (score >= quizData.length / 2) {

message = ":fire: Great Job!";

}

else {

message = ":muscle: Keep Practicing";

}



// Percentage calculation
const percentage = Math.round(
(score / quizData.length) * 100
);



// Progress bar update
const progress =
document.getElementById("progress");

if (progress) {

progress.style.width = `
${((currentQuestion) / quizData.length) * 100}%
`;

}



// Sound effect
const correctSound =
new Audio("correct.mp3");

correctSound.play();



// Timer feature
let timeLeft = 10;

const timer = setInterval(() => {

timeLeft--;

if (timeLeft <= 0) {

clearInterval(timer);

}

}, 1000);



// Save high score
localStorage.setItem(
"highScore",
score
);

const highScore =
localStorage.getItem("highScore");



// Dark mode effect
document.body.classList.toggle(
"dark-mode"
);



// Final screen
container.innerHTML = `
<h2>:trophy: Quiz Finished!</h2>

<p>${message}</p>

<p>Your Score:
${score}/${quizData.length}</p>

<p>Percentage:
${percentage}%</p>

<p>High Score:
${highScore}</p>

<button onclick="resetQuiz()">
Restart Quiz
</button>

`;

}