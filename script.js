const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const progressBar = document.getElementById('progress-bar');

const quizQuestions = [
    {
      question: "What is the principle behind Heisenberg's Uncertainty Principle?",
      answers: {
        a: "Electrons have fixed positions and momenta",
        b: "The more precisely the position of a particle is known, the less precisely its momentum can be known",
        c: "Particles do not exist until they are observed",
        d: "Energy levels are quantized and discrete"
      },
      correctAnswer: "b"
    },
    {
      question: "Which interpretation of quantum mechanics introduces the concept of 'many worlds'?",
      answers: {
        a: "Copenhagen Interpretation",
        b: "Bohmian Mechanics",
        c: "Many-Worlds Interpretation",
        d: "Ensemble Interpretation"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the author of 'The Divine Comedy'?",
      answers: {
        a: "Geoffrey Chaucer",
        b: "Dante Alighieri",
        c: "John Milton",
        d: "Homer"
      },
      correctAnswer: "b"
    },
    {
      question: "In Shakespeare's play 'Hamlet', what is the name of Hamlet's mother?",
      answers: {
        a: "Ophelia",
        b: "Gertrude",
        c: "Cordelia",
        d: "Desdemona"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the main idea of the Riemann Hypothesis?",
      answers: {
        a: "All non-trivial zeros of the Riemann zeta function have real part equal to 1",
        b: "The prime number distribution follows a regular pattern",
        c: "All non-trivial zeros of the Riemann zeta function have real part equal to 1/2",
        d: "There are infinitely many prime numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "What does Gödel's First Incompleteness Theorem state?",
      answers: {
        a: "Any formal system is consistent and complete",
        b: "In any consistent formal system, there are true statements that cannot be proven within the system",
        c: "Every mathematical truth can be derived from axioms",
        d: "There are no paradoxes in formal systems"
      },
      correctAnswer: "b"
    },
    {
      question: "Which ancient civilization is credited with creating the first known writing system, cuneiform?",
      answers: {
        a: "Ancient Egypt",
        b: "Ancient Greece",
        c: "Sumerians",
        d: "Phoenicians"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the Carthaginian general famous for crossing the Alps with elephants during the Second Punic War?",
      answers: {
        a: "Hannibal",
        b: "Scipio Africanus",
        c: "Julius Caesar",
        d: "Alexander the Great"
      },
      correctAnswer: "a"
    },
    {
      question: "Which artist is known for painting the Sistine Chapel ceiling?",
      answers: {
        a: "Leonardo da Vinci",
        b: "Michelangelo",
        c: "Raphael",
        d: "Titian"
      },
      correctAnswer: "b"
    },
    {
      question: "In which period did the artist Hieronymus Bosch primarily work?",
      answers: {
        a: "Renaissance",
        b: "Baroque",
        c: "Gothic",
        d: "Romantic"
      },
      correctAnswer: "a"
    },
    {
      question: "Who formulated the wave equation in quantum mechanics?",
      answers: {
        a: "Albert Einstein",
        b: "Erwin Schrödinger",
        c: "Niels Bohr",
        d: "Werner Heisenberg"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the concept of 'quantum entanglement'?",
      answers: {
        a: "Particles can be in multiple places at once",
        b: "Particles interact instantaneously over any distance",
        c: "Particles cannot be separated once they are in a bound state",
        d: "Particles have no defined position until measured"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the central theme of John Milton's 'Paradise Lost'?",
      answers: {
        a: "The fall of man",
        b: "The adventures of a knight",
        c: "The quest for the Holy Grail",
        d: "The life of an ancient Roman emperor"
      },
      correctAnswer: "a"
    },
    {
      question: "Who wrote 'Crime and Punishment'?",
      answers: {
        a: "Leo Tolstoy",
        b: "Fyodor Dostoevsky",
        c: "Anton Chekhov",
        d: "Ivan Turgenev"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the Poincaré Conjecture concerned with?",
      answers: {
        a: "The nature of prime numbers",
        b: "The shape of the universe",
        c: "The properties of continuous functions",
        d: "The topology of 3-dimensional spheres"
      },
      correctAnswer: "d"
    },
    {
      question: "Who was the first emperor of Rome?",
      answers: {
        a: "Julius Caesar",
        b: "Augustus",
        c: "Nero",
        d: "Constantine"
      },
      correctAnswer: "b"
    },
    {
      question: "Which famous battle in 490 BC saw the Greeks defeat the Persians?",
      answers: {
        a: "Battle of Thermopylae",
        b: "Battle of Marathon",
        c: "Battle of Salamis",
        d: "Battle of Plataea"
      },
      correctAnswer: "b"
    },
    {
      question: "Which art movement is Salvador Dalí associated with?",
      answers: {
        a: "Impressionism",
        b: "Surrealism",
        c: "Cubism",
        d: "Expressionism"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the medium used in the painting 'The Starry Night' by Vincent van Gogh?",
      answers: {
        a: "Watercolor",
        b: "Acrylic",
        c: "Oil on canvas",
        d: "Fresco"
      },
      correctAnswer: "c"
    }
];  

let currentQuestionIndex = 1;

const quizContainer = document.getElementById('quiz');
buildQuiz();
const slides = document.querySelectorAll(".slide");

function buildQuiz() {
  const output = [];
  quizQuestions.forEach((question, questionIndex) => {
    const answers = [];
    Object.entries(question.answers).forEach(([letter, value], answerIndex) => {
      console.log("question ${questionIndex} answer ${answerIndex}");
      answers.push(
        `<input type="radio" id="answer${questionIndex}-${answerIndex}" name="question${questionIndex}" value="${letter}">
        <label for="answer${questionIndex}-${answerIndex}">${letter}. ${value}</label>` 
      );
    });
    output.push(
      `<div class="slide">
        <div class="question"> ${question.question}</div>
        <div class="answers"> ${answers.join('')}</div>
      </div>`
    );
  });
  quizContainer.innerHTML = output.join('');
}

function showResults() {
  currentQuestionIndex++;
  updateProgressBar();
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  quizQuestions.forEach((question, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === question.correctAnswer) {
        numCorrect++;
        answerContainers[index].style.color = 'green';
    } else {
        answerContainers[index].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct.`;

  submitButton.style.display = 'none';
  restartButton.style.display = 'inline-block';
}

function updateProgressBar() {
    const progress = (currentQuestionIndex) / quizQuestions.length * 100;
    progressBar.value = progress;
}

function showSlide() {
    updateProgressBar();

    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    currentQuestionIndex++;
    slides[currentQuestionIndex - 1].classList.remove('active-slide');
    slides[currentQuestionIndex].classList.add('active-slide');
    showSlide();
}

function resetQuiz() {
  console.log(slides, slides[currentQuestionIndex], currentQuestionIndex);
  currentQuestionIndex--;
  resultsContainer.innerHTML = "";
  restartButton.style.display = "none";
  slides[currentQuestionIndex].classList.remove('active-slide');
  currentQuestionIndex = 0;
  slides[0].classList.add('active-slide');
  showSlide();
  updateProgressBar();
}

resetQuiz();

submitButton.addEventListener('click', showResults);
nextButton.addEventListener('click', showNextSlide);

restartButton.addEventListener('click', resetQuiz);
