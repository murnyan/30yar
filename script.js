const questions = [
  "Какой ваш любимый цвет?",
  "Что вы больше всего цените в жизни?",
  "Какой праздник для вас самый важный?",
  "Где бы вы хотели провести следующий отпуск?",
  "Что делает вас счастливым?",
  "Какой фильм вы могли бы пересматривать бесконечно?",
  "Что вы любите есть на завтрак?",
  "Какой у вас самый яркий детский воспоминания?",
  "Что вы хотите сделать в ближайшие 5 лет?",
  "Какой совет вы бы дали своей 20-летней версии?"
];

let currentQuestionIndex = 0;

const questionBox = document.getElementById('question-box');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const secretContainer = document.getElementById('secret-container');
const storyContainer = document.getElementById('story-container');

function showNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionBox.textContent = questions[currentQuestionIndex];
    currentQuestionIndex++;
  } else {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    document.getElementById('result-text').textContent = "Спасибо за ответы! Вы готовы узнать свои подарки?";
  }
}

nextBtn.addEventListener('click', showNextQuestion);

document.getElementById('secret-gift').addEventListener('click', () => {
  resultContainer.classList.add('hidden');
  secretContainer.classList.remove('hidden');
});

document.getElementById('change-gift').addEventListener('click', () => {
  secretContainer.classList.add('hidden');
  storyContainer.classList.remove('hidden');
});

document.querySelectorAll('.story-btn').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.dataset.answer;
    alert(answer === 'yes' ? "Хорошо, я верю тебе, забери меня к себе ❤️" : "Может быть в другой раз...");
  });
});

// Анимация фона
function createFloatingQuestion() {
  const question = document.createElement('div');
  question.textContent = questions[Math.floor(Math.random() * questions.length)];
  question.style.position = 'absolute';
  question.style.top = `${Math.random() * 100}vh`;
  question.style.left = `${Math.random() * 100}vw`;
  question.style.fontSize = `${Math.random() * 20 + 10}px`;
  question.style.opacity = Math.random();
  question.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.querySelector('.background').appendChild(question);

  setTimeout(() => {
    question.remove();
  }, 5000);
}

setInterval(createFloatingQuestion, 1000);