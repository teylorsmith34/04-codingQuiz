// Create a HTML page for the quiz. DONE

// Add a start button to the page. this will statr the quiz, render the first question and start the timer

// Add a question and answer section to the page.

// Add a timer to the page write JavaScript code to start the timer when the start button is clicked.

// Write JavaScript code to present the next question when a question is answered CORRECTLY(?)

// Write JavaScript code to subtract time from the timer when a question is answered incorrectly. Do not progress to next question (?)

// Write JavaScript code to check if the game is over when all questions are answered or the timer reaches 0.

// Write JavaScript code to save the user's initials and score when the game is over.

const timer = document.getElementById("timer");
const startContainer = document.getElementById("start-container");
const questionHeader = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const startBtn = document.getElementById("start-btn");

let currentIndex = 0;

const questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: 2,
  },

  {
    question: "Which keyword do we need to define a function?",
    answers: ["function", "method", "onclick", "functionName()"],
    correctAnswer: 0,
  },

  // {
  //   question: "What language is used to create the content of a webpage?",
  //   answers: ["HTML", "CSS", "Javascript", "repl.it"],
  //   correctAnswer: 0,
  // },

  // {
  //   question: "What language is used to style a webpage?",
  //   answers: ["HTML", "CSS", "Javascript", "repl.it"],
  //   correctAnswer: 1,
  // },

  // {
  //   question:
  //     "What language is used to add interactivity and effects to a webpage?",
  //   answers: ["HTML", "CSS", "Javascript", "Python"],
  //   correctAnswer: 2,
  // },
];

function renderQuestion(currentIndex) {
  questionHeader.innerText = questions[currentIndex].question;

  // create answer buttons
  for (let i = 0; i < questions[currentIndex].answers.length; i++) {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = questions[currentIndex].answers[i];

    answersContainer.appendChild(answerBtn);
  }
}

function submitAnswer() {
  console.log("hit");
  startContainer.innerHTML = "";
  renderQuestion(currentIndex);
}

startBtn.addEventListener("click", submitAnswer);
