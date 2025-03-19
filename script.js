const questions = [
    "1. Готов ли ты к тому, что твои друзья начнут заводить семьи?",
    "2. Считаешь ли ты, что 30 лет — это новый 20?",
    "3. Планируешь ли ты больше путешествовать в ближайшие годы?",
    "4. Готов ли ты к взрослым решениям, вроде покупки квартиры?",
    "5. Считаешь ли ты, что 30 — это возраст мудрости?",
    "6. Готов ли ты к вечеринкам до утра реже?",
    "7. Хочешь ли ты освоить что-то новое в 30?",
    "8. Готов ли ты к тому, что здоровье станет приоритетом?",
    "9. Планируешь ли ты больше времени уделять себе?",
    "10. Считаешь ли ты, что 30 — это время для карьеры?",
    "11. Готов ли ты к переменам в жизни?",
    "12. Хочешь ли ты больше отдыхать на природе?",
    "13. Готов ли ты к новым обязанностям?",
    "14. Считаешь ли ты, что 30 — это время стабильности?",
    "15. Планируешь ли ты больше читать книги?",
    "16. Готов ли ты к тому, что время летит быстрее?",
    "17. Хочешь ли ты больше заботиться о близких?",
    "18. Готов ли ты к новым хобби?",
    "19. Считаешь ли ты, что 30 — это начало лучшего?",
    "20. Готов ли ты к своему 30-летию?"
];

let currentQuestion = 0;
let yesAnswers = 0;

function createQuestion(index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.id = `q${index + 1}`;
    questionDiv.innerHTML = `
        <p>${questions[index]}</p>
        <label><input type="radio" name="q${index + 1}" value="yes"> Да</label>
        <label><input type="radio" name="q${index + 1}" value="no"> Нет</label>
    `;
    return questionDiv;
}

function showQuestion(index) {
    const questionContainer = document.getElementById('questions');
    questionContainer.innerHTML = '';
    const questionDiv = createQuestion(index);
    questionContainer.appendChild(questionDiv);
    setTimeout(() => {
        questionDiv.classList.add('active');
    }, 10);
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    const currentQuestionDiv = document.querySelector('.question.active');
    const selectedAnswer = currentQuestionDiv.querySelector('input:checked');
    if (!selectedAnswer) return; // Ждем, пока пользователь выберет ответ
    if (selectedAnswer.value === 'yes') yesAnswers++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    const resultText = yesAnswers >= 15 ? 'Ты полностью готова к 30-летию! 🎉' :
                      yesAnswers >= 10 ? 'Ты почти готова к 30-летию, осталось немного!' :
                      'Тебе еще есть над чем поработать перед 30-летием!';
    document.getElementById('result-text').textContent = resultText;
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);

document.querySelector('.secret-gift').addEventListener('click', function() {
    document.getElementById('secret-gift-modal').classList.remove('hidden');
});

document.getElementById('keep-gift').addEventListener('click', function() {
    document.getElementById('secret-gift-modal').classList.add('hidden');
});

document.getElementById('replace-gift').addEventListener('click', function() {
    document.getElementById('secret-gift-modal').classList.add('hidden');
    document.body.style.backgroundColor = 'turquoise';
    document.getElementById('conditions').classList.remove('hidden');
    showCondition(0);
});

const conditions = [
    'Ты не будешь меня обижать?',
    'Ты будешь моим другом?',
    'Ты будешь меня любить?',
    'Точно точно будешь?'
];

let currentCondition = 0;

function showCondition(index) {
    if (index < conditions.length) {
        document.getElementById('condition-text').textContent = conditions[index];
    } else {
        document.getElementById('conditions').classList.add('hidden');
        document.getElementById('story').classList.remove('hidden');
    }
}

document.querySelectorAll('.condition-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        currentCondition++;
        showCondition(currentCondition);
    });
});

// Старт с первого вопроса
showQuestion(0);