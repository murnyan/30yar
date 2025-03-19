document.getElementById('submit-btn').addEventListener('click', function() {
    const form = document.getElementById('quiz-form');
    const yesAnswers = Array.from(form.querySelectorAll('input[value="yes"]:checked')).length;
    const resultText = yesAnswers >= 15 ? 'Ты полностью готова к 30-летию! 🎉' :
                      yesAnswers >= 10 ? 'Ты почти готова к 30-летию, осталось немного!' :
                      'Тебе еще есть над чем поработать перед 30-летием!';

    document.querySelector('.container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result-text').textContent = resultText;
});

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