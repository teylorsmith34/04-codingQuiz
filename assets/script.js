// Create a HTML page for the quiz.

// Add a timer to the page.

// Add a question and answer section to the page.

// Add a submit button to the page.

// Write JavaScript code to start the timer when the submit button is clicked.

// Write JavaScript code to present the next question when a question is answered.

// Write JavaScript code to subtract time from the timer when a question is answered incorrectly.

// Write JavaScript code to check if the game is over when all questions are answered or the timer reaches 0.

// Write JavaScript code to save the user's initials and score when the game is over.

const timer = document.getElementById("timer");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const submitBtn = document.getElementById("submit");

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

  {
    question: "What language is used to create the content of a webpage?",
    answers: ["HTML", "CSS", "Javascript", "repl.it"],
    correctAnswer: 0,
  },

  {
    question: "What language is used to style a webpage?",
    answers: ["HTML", "CSS", "Javascript", "repl.it"],
    correctAnswer: 1,
  },

  {
    question:
      "What language is used to add interactivity and effects to a webpage?",
    answers: ["HTML", "CSS", "Javascript", "Python"],
    correctAnswer: 2,
  },
];

submitBtn.addEventListener("click", submitAnswer);
startTimer();
