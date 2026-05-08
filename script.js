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
 top: 0,
 behavior: "smooth"
 });

        // Reload first question
        renderQuestion();

 }, 300);

}