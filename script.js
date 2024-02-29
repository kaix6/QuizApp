let questions = [  // JSON Array
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },

  {
    question: "Was bedeutet die Abkürzung HTML?",
    answer_1: "Hard Text Middle Length",
    answer_2: "Hyper Text Markup Language",
    answer_3: "Hyper Text My Language",
    answer_4: "Hyper Text Middle Language",
    right_answer: 2,
  },

  {
    question: "Welches Tag-Symbol wird üblicherweise in HTMl-Code benutzt?",
    answer_1: "< >",
    answer_2: "[ ]",
    answer_3: "{ }",
    answer_4: "( )",
    right_answer: 1,
  },

  {
    question:
      "In welches Tag wird gecodet, wenn es auf der Webseite zu sehen sein soll?",
    answer_1: "html-Tag",
    answer_2: "body-Tag",
    answer_3: "script-Tag",
    answer_4: "head-Tag",
    right_answer: 2,
  },

  {
    question: "Für was wird das Tag <br> benutzt?",
    answer_1: "Text fett",
    answer_2: "Text kursiv",
    answer_3: "Text farbig",
    answer_4: "Zeilenumbruch",
    right_answer: 4,
  },
];

let amountOfRightAnswers = 0; // counter richtige Fragen Endscreen
let currentQuestion = 0;

function init() {
  let amounts = questions.length; // schaut, wie lange Array questions ist
  document.getElementById("amount").innerHTML = `${amounts}`; // fügt es in "amount" ein. gesamtanzahl unten

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showEndScreen();
  } else {
    updateProgressBar();
    showNextQuestion();
  }
}

function showEndScreen() {
  document.getElementById("endscreen").style = ""; // zeigt Endscreen an
  document.getElementById("question-screen").style = "display: none"; // blendet Fragenkarte aus
  document.getElementById("endscreen-questions").innerHTML = questions.length; // zeigt gesamtanzahl fragen im endscreen an
  document.getElementById("endscreen-right-questions").innerHTML = amountOfRightAnswers; // zeigt die richtigen fragen an
  document.getElementById("pic-endscreen").style = "display: none"; // lässt anfangsbild verschwinden
  document.getElementById("footer-endscreen").style = "display: none"; // lässt footer verschwinden
}

function showNextQuestion() {
  let question = questions[currentQuestion]; // schaut, welche Frage abgefragt wird.
  document.getElementById("moment-question").innerHTML = currentQuestion + 1; // setzt unten die aktuelle Zahl ein
  document.getElementById("questiontext").innerHTML = question["question"]; // Holt question aus dem Array question
  document.getElementById("answer_1").innerHTML = question["answer_1"]; // holt answer_1 aus Array question
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length; // rechnet prozente für progressbar  aus
  percent = percent * 100;
  document.getElementById("progressbar").innerHTML = `${percent} %`; // verändert den wert der progressbar
  document.getElementById("progressbar").style.width = `${percent}%`; // passt das width an die prozente an
}

function answer(selection) {  // setzt das angeklickte in selection ein
  let question = questions[currentQuestion]; // schaut, welche Frage abgefragt wird.
  let selectedQuestionNumber = selection.slice(-1); // holt die letzte stelle von selection. (answer_1) wäre dann 1
  let idOfRightAnswer = `answer_${question["right_answer"]}`; // setzt variable auf die richtige antwort.

  if (selectedQuestionNumber == question["right_answer"]) {  // holt aus Array right_answer und vergleicht obs übereinstimmt
    document.getElementById(selection).classList.add("answer-right"); // fügt klasse hinzu
    amountOfRightAnswers++; // setzt counter +1 für den Endscreen
  } else {
    document.getElementById(selection).classList.add("answer-wrong"); // fügt klasse hinzu
    document.getElementById(idOfRightAnswer).classList.add("answer-right"); // fügt klasse hinzu
  }

  document.getElementById("next-button").disabled = false; // macht Button anklickbar, sobald Antwort ausgewählt wurde
}

function nextQuestion() {
  currentQuestion++; // erhöht die Variable um 1
  document.getElementById("next-button").disabled = true; // macht Button nicht anklickbar
  resetClasses();
  showQuestion();
}

function resetClasses() {  // resettet die klassen
  document.getElementById("answer_1").classList.remove("answer-wrong");
  document.getElementById("answer_1").classList.remove("answer-right");
  document.getElementById("answer_2").classList.remove("answer-wrong");
  document.getElementById("answer_2").classList.remove("answer-right");
  document.getElementById("answer_3").classList.remove("answer-wrong");
  document.getElementById("answer_3").classList.remove("answer-right");
  document.getElementById("answer_4").classList.remove("answer-wrong");
  document.getElementById("answer_4").classList.remove("answer-right");
}

function restartGame() {
  amountOfRightAnswers = 0; // setzt globale var wieder auf 0
  currentQuestion = 0; // setzt globale var wieder auf 0
  init();
  document.getElementById("endscreen").style = "display: none"; // lässt endscreen verschwinden
  document.getElementById("question-screen").style = ""; // zeigt wieder karte an
  document.getElementById("pic-endscreen").style = ""; // zeigt wieder anfangspic an
  document.getElementById("footer-endscreen").style = ""; // zeigt den footer wieder an
}
