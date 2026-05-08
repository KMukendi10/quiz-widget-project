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
        question: "Which HTML tag is used to create a hyperlink?",
        answers: ["<link>", "<a>", "<href>"],
        correct: "<a>"
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