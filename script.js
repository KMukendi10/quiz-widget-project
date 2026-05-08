// =====================================================
// GLOBAL STATE (Ricardo)
// =====================================================
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// =====================================================
// QUIZ LOGIC + SCORING (Ricardo)
// =====================================================
function processAnswer() {

    // Prevent skipping
    if (selectedAnswer === null) {

        alert("Please select an answer first!");

        return false;
    }

    // Correct answer
    const correctAnswer =
        quizData[currentQuestion].correct;

    // Increase score
    if (selectedAnswer === correctAnswer) {

        score++;

    }

    // Next question
    currentQuestion++;

    // Reset selection
    selectedAnswer = null;

    return true;

}
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
// HANDLE ANSWER CLICK (Tina)
// =====================================================
function handleAnswerClick(answer, buttonElement) {

    selectedAnswer = answer;

    const allButtons = document.querySelectorAll(".answer");

    // Remove old selected button
    allButtons.forEach(btn => {
        btn.classList.remove("selected");
 });

    // Highlight selected button
    buttonElement.classList.add("selected");

}
// =====================================================
// RESET SYSTEM (Tina)
// =====================================================
function resetQuiz() {

    // Reset values
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    const container =
        document.getElementById("quiz-container");

    // Fade animation
    container.style.opacity = "0";

    setTimeout(() => {

        // Restore HTML
        container.innerHTML = `

 <h2 id="question"></h2>

 <div id="answers"></div>

 <div id="progress-bar">
 <div id="progress"></div>
 </div>

 <button id="next-btn">
 Next
 </button>

 `;

        // Reattach button listener
        const nextButton =
            document.getElementById("next-btn");

        nextButton.addEventListener(
            "click",
            goToNextQuestion
 );

        // Fade in
        container.style.opacity = "1";

        // Mobile smooth scroll
        window.scrollTo({
//=====================================================
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
// QUIZ DATA (Kazadi)
// =====================================================
const quizData = [

    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correct: "4"
    },

    {
        question: "What is JavaScript?",
        answers: ["Language", "Car", "Food"],
        correct: "Language"
    },
    
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "CSS", "Python"],
        correct: "CSS"
}

];

// =====================================================
// RENDER QUESTION (Kazadi)
// =====================================================
function renderQuestion() {

    const q = quizData[currentQuestion];

    // Display question
    document.getElementById("question").innerText = q.question;

    // Answers container
    const answersDiv = document.getElementById("answers");

    // Clear previous answers
    answersDiv.innerHTML = "";

    // Generate buttons
    q.answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.innerText = answer;
        
        btn.classList.add("answer");
        
        btn.setAttribute("data-answer", answer);

        // Tina handles click logic

        btn.addEventListener("click", () => {
            handleAnswerClick(answer, btn);
        });
        
        answersDiv.appendChild(btn);

    });

}
// NAVIGATION SYSTEM (Mukelani)
// =====================================================
function goToNextQuestion() {

    const canProceed = processAnswer();

    // Stop if no answer selected
    if (!canProceed) return;

    const nextButton =
        document.getElementById("next-btn");

    // Prevent double clicking
    nextButton.disabled = true;

    // More questions left
    if (currentQuestion < quizData.length) {

        setTimeout(() => {

            renderQuestion();

            // Smooth mobile scrolling
            window.scrollTo({
 top: 0,
 behavior: "smooth"
 });

        // Reload first question
        renderQuestion();

 }, 300);

}
            nextButton.disabled = false;

 }, 300);

 }

    // End of quiz
    else {

        showFinalScore();

 }

}

// =====================================================
// INITIALIZATION (Mukelani)
// =====================================================
document.addEventListener(
    "DOMContentLoaded",
 () => {

        // Render first question
        renderQuestion();

        // Attach next button
        document
            .getElementById("next-btn")
            .addEventListener(
                "click",
                goToNextQuestion
 );

 }
);
