// Create a HTML page for the quiz.

// Add a timer to the page.

// Add a question and answer section to the page.

// Add a submit button to the page.

// Write JavaScript code to start the timer when the submit button is clicked.

// Write JavaScript code to present the next question when a question is answered.

// Write JavaScript code to subtract time from the timer when a question is answered incorrectly.

// Write JavaScript code to check if the game is over when all questions are answered or the timer reaches 0.

// Write JavaScript code to save the user's initials and score when the game is over.

var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var submitBtn = document.getElementById("submit");

var questions = [
  {
    question: "What does CSS stand for?",
    choices: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: 2,
  },

  {
    question: "Which keyword do we need to define a function?",
    choices: ["function", "method", "onclick", "functionName()"],
    answer: 0,
  },

  {
    question: "What language is used to create the content of a webpage?",
    choices: ["HTML", "CSS", "Javascript", "repl.it"],
    answer: 0,
  },

  {
    question: "What language is used to style a webpage?",
    choices: ["HTML", "CSS", "Javascript", "repl.it"],
    answer: 1,
  },

  {
    question:
      "What language is used to add interactivity and effects to a webpage?",
    choices: ["HTML", "CSS", "Javascript", "Python"],
    answer: 2,
  },
];
