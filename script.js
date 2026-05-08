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
