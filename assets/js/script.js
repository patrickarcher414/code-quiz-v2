
var score = 0
var startTime = 10
var newTime = startTime
var startBtn = document.querySelector('#startBtn')
var timerEl = document.querySelector('#timer')
var scoreEl = document.querySelector('#score')
var questionEl = document.querySelector('#questions')
scoreEl.innerText = 'Score: ' + score

var questions = [
    {   prompt: 'Inside which HTML element do we put the JavaScript?', 
        answer: '<script>',
        choices: [
        '<script>',
        '<js>',
        '<javascript>'] 
    },
    {  prompt: 'Where is the correct place to insert the script tag?', 
        answer: 'The bottom of the body section',
        choices: [
        'Either the <head> section, or the <body> section',
        'The <head> section',
        'The bottom of the <body> section'] 
    },
    {  prompt: 'What is the correct syntax for referring to an external script called "xxx.js"?', 
        answer: "<script src='xxx.js'>",
        choices: [
        "<script name='xxx.js'>",
        "<script href='xxx.js'>",
        "<script src='xxx.js'>"]
    },
    {  prompt: 'How do you write "Hello World" in an alert box?', 
    answer: "alert('Hello World')",
    choices: [
    "msg('Hello World')",
    "alert('Hello World')",
    "alertBox('Hello World')"]
    },
    {  prompt: 'How do you create a function in JavaScript?', 
    answer: 'function myFunction()',
    choices: [
    'function myFunction()',
    'function = myFunction()',
    'function:myFunction()'] 
    },
    {  prompt: 'How do you call a function named "myFunction"?', 
    answer: 'myFunction()',
    choices: [
    'call function myFunction()',
    'myFunction()',
    'call myFunction()'] 
    },
    {  prompt: 'How to write an IF statement in JavaScript?', 
    answer: 'if (i== 5)',
    choices: [
    'if i == 5 then',
    'if i=5',
    'if (i== 5)'] 
    }
]

console.log(questions)


// check if the answer given by user matches question answer
// function checkAnswer() {
//     var answer = questions[i].answer
//     var userInput = 
//     if (answer ===  userInput) {
//         score++
//     } else {
//         newTime -= 5
//     }
// }




function createQuestion(currentIndex) {
    var question = document.createElement('li')
    var prompt = questions[currentIndex].prompt
    var promptEl = document.createElement('h3')
    promptEl.innerText = prompt
    questionEl.appendChild(promptEl)
    console.log(prompt)
    // question.innerText = questions[currentIndex].prompt
    for (var i=0; i < 3; i++) {
        var button = document.createElement('button')
        var question = questions[currentIndex].choices[i]
        button.innerText = question
        questionEl.appendChild(button)
    }
}

function gameOver() {
    var initialsPrompt = prompt('Enter your initials to save your score:')
    if (initialsPrompt === null) {
        location.reload()
    }
    else if (initialsPrompt !== '') {
        localStorage.setItem('initials', JSON.stringify(initialsPrompt))
    }
    location.reload()
}

function updateTimer() {
    var timerInterval = setInterval(function() {
        newTime--
        timerEl.innerText = 'Timer: ' + newTime
        if (newTime === 0) {
            gameOver()
        }
    }, 1000)
    
}

function startQuiz() {
    updateTimer()
    createQuestion(0)
}

startBtn.addEventListener('click', startQuiz)