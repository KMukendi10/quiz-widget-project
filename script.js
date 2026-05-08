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