// =====================================================
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
