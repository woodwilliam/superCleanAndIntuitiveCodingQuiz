const questionEl = document.getElementById("question");
const responseEl = document.getElementById("response");
const buttCon = document.getElementById("buttcon");
const timeEl = document.querySelector(".time");
const mainEl = document.getElementById("main");
const button = document.getElementById("starter");
buttCon.addEventListener("click", testStart);
let secondsLeft = 15;
qSlot = 0;
score = 0;

//start test
function testStart(event) {
  let clickerPicker = event.target;
  let aboutThis = clickerPicker.innerText;
  if (clickerPicker.matches("#starter")) {
    countDown();
    finalAnswer();

  } else {
    finalAnswer();
    amIRight(aboutThis);
  }
}
//countdown timer function that will call gameOver function when time runs out
const countDown = function () {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `You only have ${secondsLeft} to complete the test!`;
    if (secondsLeft <= 10) {
      timeEl.textContent = `Yikes! only ${secondsLeft} seconds left, FEEL THE PRESSURE!`;
    }
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
};
// validate user selection
const amIRight = function (aboutThis) {
  if (aboutThis === qs[qSlot].answer) {
    responseEl.textContent = "Correct! Keep it up to victory!";
    score++;
  } else {
    responseEl.textContent = "Wrong! You stupid mutha fucka";
  }

  qSlot++;

  finalAnswer();
};
// Answer Submission function
const finalAnswer = function () {
  // check question number
  if (qSlot < qs.length) {
    while (buttCon.firstChild) {
      buttCon.removeChild(buttCon.firstChild);
    }
  } else if ((qSlot = qs.length)) {
    while (buttCon.firstChild) {
      buttCon.removeChild(buttCon.firstChild);
    }
    endQuiz();
  }
    // update question and choice options
    questionEl.textContent = qs[qSlot].question;

    let choiceA = document.createElement("button");
    choiceA.className = "btn";
    choiceA.id = "answer-buttons";
    choiceA.textContent = qs[qSlot].a;
    let choiceB = document.createElement("button");
    choiceB.className = "btn";
    choiceB.id = "answer-buttons";
    choiceB.textContent = qs[qSlot].b;
    let choiceC = document.createElement("button");
    choiceC.className = "btn";
    choiceC.id = "answer-buttons";
    choiceC.textContent = qs[qSlot].c;
    let choiceD = document.createElement("button");
    choiceD.className = "btn";
    choiceD.id = "answer-buttons";
    choiceD.textContent = qs[qSlot].d;
  
    buttCon.appendChild(choiceA);
    buttCon.appendChild(choiceB);
    buttCon.appendChild(choiceC);
    buttCon.appendChild(choiceD);
};
// Game Over Function
function gameOver() {
  timeEl.textContent = "We're never gonna make it to regionals at this pace";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "img/gameOverImage.jpg");
  mainEl.appendChild(imgEl);
}
// function to display winner score
function winner() {
  mainEl.textContent = `Winner Winner! YOur score is ${score}! You the best!`;
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "img/Winner.jpg");
  mainEl.appendChild(imgEl);
}
// fucntion for when your score is unsatisfactory
function loser() {
  mainEl.textContent = `FOOL! YOur score is ${score}! THAT CERTAINLY ISNT GOOD ENOUGH!`;
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "img/loser.jpg");
  mainEl.appendChild(imgEl);
}
function endQuiz() {
  if (score > 3) {
    winner();
  } else {
    loser();
  }
}
//questions as objects
const q1 = {
  question: "WHAT IS THE ANSWER TO THE Fisrt QUESTION?",
  a: "A .NOT ME",
  b: "B. not mE",
  c: "C. MEEEEE",
  d: "D. NOTME",
  answer: "C. MEEEEE",
};

const q2 = {
  question: "WHAT IS TE ANSWER TO THE second QUESTION?",
  a: "A .NOT ME",
  b: "B. not mE",
  c: "C. NOTME",
  d: "D. MEEEEE",
  answer: "D. MEEEEE",
};

const q3 = {
  question: "WHAT IS TE ANSWER TO THE 3rd QUESTION?",
  a: "A .NOT ME",
  b: "B. not mE",
  c: "C. NOTME",
  d: "D. MEEEEE",
  answer: "D. MEEEEE",
};

const q4 = {
  question: "WHAT IS TE ANSWER TO THE fawth QUESTION?",
  a: "A .NOT ME",
  b: "B. not mE",
  c: "C. MEEEEE",
  d: "D. NOTME",
  answer: "C. MEEEEE",
};

const q5 = {
  question: "WHAT IS TE ANSWER TO THE fif QUESTION?",
  a: "A .NOT ME",
  b: "B. MEEEEE",
  c: "C. notmeh",
  d: "D. NOTME",
  answer: "B. MEEEEE",
};

let qs = [q1, q2, q3, q4, q5];



