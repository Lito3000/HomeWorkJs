"use strict";
(function () {
    const data = {
        questions: [
            {
                question: 'Какое море самое соленое?',
                answers: [
                    'Эгейское',
                    'Красное',
                    'Кипрское',
                    'Критское',
                ],
                validAnswer: 2
            },
            {
                question: 'Какой водопад в мире является самым высоким?',
                answers: [
                    'Тугела',
                    'Три Сестры',
                    'Анхель',
                    'Олоупена',
                ],
                validAnswer: 3
            },
            {
                question: 'Кто создал первый паровой двигатель в мире?',
                answers: [
                    'Иван Ползунов',
                    'М.В. Ломоносов',
                    'Альберт Эйнштейн',
                    'Джон Бардин',
                ],
                validAnswer: 1
            }
        ]
    }
    const dom = {
        step: {
            question: document.getElementById('question'),
            questionPosition: document.getElementById('question__position')
        },
        answers: document.getElementById('answers'),
        next: document.getElementById('next')
    }

    const totalSteps = data.questions.length
    let step = 0

    dom.next.onclick = () => {
        step = step < totalSteps ? step + 1 : step
        renderQuiz(totalSteps,step)
    }

    function renderQuiz(total,step) {
        if(step < totalSteps){
            const answers = data.questions[step].answers
            const answersHtml = buildAnswers(answers)
            renderAnswers(answersHtml)
            renderQuestions(step)
        }
    }
    renderQuiz(totalSteps, step)

    function renderQuestions(step) {
        dom.step.questionPosition.innerHTML = `${step + 1}.`
        dom.step.question.innerHTML = data.questions[step].question
    }
    renderQuestions(step)

    function buildAnswers(answers) {
        const answersHtml = []
        answers.forEach((answer,idx)=>{
            const html = `<div class="quiz__answer" data-id="${idx+1}">${answer}</div>`
            answersHtml.push(html)
        })
        return answersHtml.join('')
    }

    function renderAnswers(htmlString) {
        dom.answers.innerHTML = htmlString

    }
    dom.answers.onclick = (event)=>{
        const target = event.target
        if(target.classList.contains('quiz__answer')){
            const answerNumber = target.dataset.id
            checkAnswer(step,answerNumber)
        }
    }
    function checkAnswer(step,answer) {
        const validAnswer =   data.questions[step].validAnswer
        if (validAnswer === +answer){
            dom.step.question.innerHTML = 'Ответ верный'
        }else {
            dom.step.question.innerHTML = 'Ответ не верный'
        }
    }

})()