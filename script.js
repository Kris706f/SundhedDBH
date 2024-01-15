
/*Denne del er Kodet af Leila Isabella Ganer & Sofie Palmkvist*/
/*Herunder er det som skal bruges til burgermenu*/
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

let currentSection = "";

/*-----------------------------------------------------------------*/


/*Denne del er Kodet af Kristian Ørbæk Møller & Frederik Toft Nielsen*/
// Her indsætter vi datoen
var countDownDate = new Date("Jan 9, 2024 18:30:00").getTime();

var x = setInterval(function() {

  // Her for vi fat i dagens dato og tid
  var now = new Date().getTime();
    
  // Her finder vi tiden mellem nu og vores dato
  var distance = countDownDate - now;
    
  // Her er beregningerne for dage, timer, minutter og sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Så kan vi indsætte det under id=demo
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Når countdown er ovre vil en tekst komme istedet for tal 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);





/*QUIZ*/
const questions = [
  {
    question: "Hvordan kan gæringen i surdej hjælpe med nedbrydningen af gluten?",
    answers:[
      { text: "Ved at tilføje mere gluten til dejen", correct: false},
      { text: "Ved at introducere gær og lactobacilus-bakterier", correct: true},
      { text: "Ved at øge fytatindholdet i brødet", correct: false},

    ]
  },
  {
    question: "Hvad er fytater, og hvordan påvirker surdej dem?",
    answers:[
      { text: "Fytater er proteiner, og surdej fjerner dem fra brødet", correct: false},
      { text: "Fytater er mineraler, og surdej øger deres tilgængelighed", correct: false},
      { text: "Fytater er forbindelser, der bindes mineraler og surdej hjælper med at nedbryde dem", correct: true},
    ]
  },
  {
    question: "Hvad er lactobacillus, og hvordan bidrager det til surdejen?",
    answers:[
      { text: "Det er en type gluten, der forbedrer brødets struktur", correct: false},
      { text: "Det er en gavnlige bakterie, der bidrager til en sund tarmflora", correct: true},
      { text: "Det er en smagsforstærker i surdej", correct: false},
    ]
  },
  {
    question: "Hvorfor er en velafbalanceret i tarmflora vigtig?",
    answers:[
      { text: "Det forårsager glutenintolerance", correct: false},
      { text: "Det er afgørende for god fordøjelse og generel sundhed", correct: true},
      { text: "Det reducerer fytater i korn", correct: false},
    ]
  },
  {
    question: "Hvordan kan surdej forbedre mineral absorption fra brødet?",
    answers:[
      { text: "Ved at øge indholdet af fytater", correct: false},
      { text: "Ved at reducere glutenindholdet", correct: false},
      { text: "Ved at nedbryde fytater, hvilket gør mineralerne mere tilgængelige.", correct: true},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Næste";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "."+currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}


function showScore(){
  resetState();
questionElement.innerHTML = `Du scorede ${score} ud af ${questions.length}!`;
nextButton.innerHTML = "Prøv Igen";
nextButton.style.display = "block";
}



function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}



nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }
});

startQuiz()