const data = [
  {
    id: 1,
    question:
      "Who was the British Prime minister when india was declared independence?",
    answers: [
      { answer: "Lloyd george", isCorrect: false },
      { answer: "Winston churchill", isCorrect: false },
      { answer: "Clement Atlee", isCorrect: true },
      { answer: "Margaret Thatcher", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "who was the last governor general of india?",
    answers: [
      { answer: "Lord Mountbatten", isCorrect: false },
      { answer: "Lord Irwin", isCorrect: false },
      { answer: "C.Rajgopalacharjee", isCorrect: true },
      { answer: "Rajendra Prasad", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "what was the total number of princely states in indian subcontinent?",
    answers: [
      { answer: "562", isCorrect: true },
      { answer: "559", isCorrect: false },
      { answer: "550", isCorrect: false },
      { answer: "589", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showQuestion = (qNo) => {
  selectedAnswer = null;
  question.textContent = data[qNo].question;
  answerContainer.innerHTML = data[qNo].answers
    .map(
      (item, index) =>
        `<div class="answer">
              <input name = "answer" type="radio" id = ${index} value = ${item.isCorrect}>
              <label for=${index}>${item.answer}</label>
      </div>
    `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

submit.addEventListener("click", () => {
  if (selectedAnswer !== null) {
    selectedAnswer === "true" ? correctCount++ : wrongCount++;
    if (qIndex < data.length-1) showQuestion(++qIndex);
    else {
      total = (correctCount - wrongCount) * 10;
      gameScreen.style.display = "none";
      resultScreen.querySelector(".correct").innerHTML = `Correct Answer : ${correctCount}`
      resultScreen.querySelector(".wrong").innerHTML = `Wrong Answer : ${wrongCount}`
      resultScreen.querySelector(".score").innerHTML = `Score : ${total}`
      resultScreen.style.display = "block";
    }
  }
  else
  window.alert("You need to select answer")
});

play.addEventListener("click",()=>{
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  selectedAnswer;
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  showQuestion(qIndex);
})


showQuestion(qIndex);
