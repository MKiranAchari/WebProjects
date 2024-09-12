const questions = [
    {
        "question": "Which of the following methods is used to convert a string into a list of characters in Python?",
        "answers": [
            {"text": "split()", "correct": false},
            {"text": "list()", "correct": true},
            {"text": "str()", "correct": false},
            {"text": "join()", "correct": false}
        ]
    },
    {
        "question": "What does the len() function return when called with a dictionary as its argument?",
        "answers": [
            {"text": "The number of keys", "correct": false},
            {"text": "The number of values", "correct": false},
            {"text": "The number of key-value pairs", "correct": true},
            {"text": "An error", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a mutable data type in Python?",
        "answers": [
            {"text": "String", "correct": false},
            {"text": "Tuple", "correct": false},
            {"text": "List", "correct": true},
            {"text": "Integer", "correct": false}
        ]
    },
    {
        "question": "What will be the result of 5 // 2 in Python?",
        "answers": [
            {"text": "2.5", "correct": false},
            {"text": "2", "correct": true},
            {"text": "3", "correct": false},
            {"text": "1", "correct": false}
        ]
    },
    {
        "question": "How do you create a tuple with a single element 5?",
        "answers": [
            {"text": "(5,)", "correct": true},
            {"text": "(5)", "correct": false},
            {"text": "[5]", "correct": false},
            {"text": "{5}", "correct": false}
        ]
    },
    {
        "question": "What is the output of bool([]) in Python?",
        "answers": [
            {"text": "true", "correct": false},
            {"text": "false", "correct": true},
            {"text": "None", "correct": false},
            {"text": "Error", "correct": false}
        ]
    },
    {
        "question": "Which of the following statements is used to handle exceptions in Python?",
        "answers": [
            {"text": "catch", "correct": false},
            {"text": "except", "correct": true},
            {"text": "handle", "correct": false},
            {"text": "finally", "correct": false}
        ]
    },
    {
        "question": "What will be the output of the expression 3 * 'AB' in Python?",
        "answers": [
            {"text": "'ABABAB'", "correct": true},
            {"text": "'AB3'", "correct": false},
            {"text": "'3AB'", "correct": false},
            {"text": "Error", "correct": false}
        ]
    },
    {
        "question": "Which function is used to find the maximum value in a list?",
        "answers": [
            {"text": "max()", "correct": true},
            {"text": "highest()", "correct": false},
            {"text": "largest()", "correct": false},
            {"text": "max_value()", "correct": false}
        ]
    },
    {
        "question": "How do you check if a key exists in a dictionary?",
        "answers": [
            {"text": "key in dictionary", "correct": true},
            {"text": "dictionary.has_key(key)", "correct": false},
            {"text": "dictionary.contains(key)", "correct": false},
            {"text": "key.exists(dictionary)", "correct": false}
        ]
    }
]

const questionsElement=document.getElementById("questions");
const answersBtn=document.getElementById("ans");
const nextBtn=document.getElementById("next-bnt");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionsElement.innerHTML=questionNo+ " . " +currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("bnt");
        answersBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextBtn.style.display="none";
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}
function selectAnswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answersBtn.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display="block";
}

function showScore(){
    resetState();questionsElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
});

startQuiz();