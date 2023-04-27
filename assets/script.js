// Create a HTML page for the quiz. DONE

// Add a start button to the page. this will statr the quiz, render the first question and start the timer DONE

// Add a question and answer section to the page. DONE

// Add a timer to the page write JavaScript code to start the timer when the start button is clicked.DONE

// Write JavaScript code to present the next question when a question is answered CORRECTLY(?)DONE

// Write JavaScript code to subtract time from the timer when a question is answered incorrectly. Do not progress to next question (?)

// Write JavaScript code to check if the game is over when all questions are answered or the timer reaches 0.

// Write JavaScript code to save the user's initials and score when the game is over.

// create new html page with its own js for highscores (it's probably gonna be easier)

// use this to save/retrieve highscores. localStorage.getItem(), localStorage.setItem(). You will also need JSON.stringify() and JSON.parse()

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

function renderNextQuestion() {
  console.log("correct");
  questionHeader.innerHTML = "";
  answersContainer.innerHTML = "";
  currentIndex++;
  renderQuestion(currentIndex);
}

function renderButtonsAndHandleAnswer(answerArray, correctAnswer) {
  // create answer buttons
  for (let i = 0; i < answerArray.length; i++) {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = answerArray[i];
    answerBtn.setAttribute("data-index", i);
    answerBtn.addEventListener("click", function (event) {
      //it is going to check if the data attribute from the element matches the correctAnswer value
      const chosenAnswer = Number(event.target.getAttribute("data-index"));

      if (chosenAnswer === correctAnswer) {
        renderNextQuestion();
      } else {
        console.log("wrong");
      }
    });

    answersContainer.appendChild(answerBtn);
  }
}

function renderQuestion(currentIndex) {
  questionHeader.innerText = questions[currentIndex].question;
  renderButtonsAndHandleAnswer(
    questions[currentIndex].answers,
    questions[currentIndex].correctAnswer
  );
}

function submitAnswer() {
  console.log("hit");
  startContainer.innerHTML = "";
  renderQuestion(currentIndex);
}

startBtn.addEventListener("click", submitAnswer);
