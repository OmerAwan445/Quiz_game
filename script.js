'use strict'
const questionText=document.querySelector('.question');
const nextBtn=document.querySelector('.next-btn');
const previousBtn=document.querySelector('.previous-btn');
const radioBtns=document.querySelectorAll('.answer');
const quizContainer=document.querySelector('.quiz-container');
const quizQuestions=[
    {
    question:'What is the capital of Pakistan?',
    a:'Islamabad',
    b:'Karachi',
    c:'Multan',
    d:'Lahore',
    correct:'a',
    answered:''
},
    {
    question:'Who is the Prime Minister of Pakistan?',
    a:'Imran Khan',
    b:'Shabaz Shareef',
    c:'Nawaz Shareef',
    d:'Asif Zardari',
    correct:'b',
    answered:''
},
    {
    question:'What is the most widely used Programming language in 2022?',
    a:'C++',
    b:'C',
    c:'Java',
    d:'Javscript',
    correct:'d',
    answered:''
},
    {
    question:'What is the full form of CS',
    a:'Computer Science',
    b:'Software Engineering',
    c:'Cascading Style language',
    d:'Computer Software',
    correct:'a',
    answered:''
},
    {
    question:'When was javascript was created?',
    a:'1999',
    b:'1996',
    c:'1995',
    d:'1994',
    correct:'c',
    answered:''
}];

let currentQuestion=0;
function displayQuiz(){
    radioBtns.forEach(radioBtn=>{
        if(radioBtn.id==quizQuestions[currentQuestion].answered)
        radioBtn.checked=true;
    else
        radioBtn.checked=false
    });
    questionText.innerHTML=quizQuestions[currentQuestion].question;
    document.querySelector('.a').innerHTML=quizQuestions[currentQuestion].a;
    document.querySelector('.b').innerHTML=quizQuestions[currentQuestion].b;
    document.querySelector('.c').innerHTML=quizQuestions[currentQuestion].c;
    document.querySelector('.d').innerHTML=quizQuestions[currentQuestion].d;

}

function generateResults(){
    let unattempted,correct,wrong;
    unattempted=correct=wrong=0;
    quizQuestions.forEach(question=>{
        if(!question.answered)
        unattempted++;
        else
        question.answered===question.correct ? correct++ :wrong++;   
        })
return `${correct} Correct answers , ${wrong} wrong answers and ${unattempted} Unattempted question`
    }

function result(){
    quizContainer.innerHTML=`<h2 class="result">${generateResults()}</h2>
    <button class="btn" onclick="location.reload()">Reload</button> 
    `    
}

previousBtn.addEventListener('click',()=>{
    currentQuestion--;
    if(currentQuestion<=-1){
    currentQuestion=0;
    }
    displayQuiz();    
})

nextBtn.addEventListener('click',()=>{
    radioBtns.forEach(radioBtn=>{
        if(radioBtn.checked)
        quizQuestions[currentQuestion].answered= radioBtn.id;
    });
    currentQuestion++;
if(currentQuestion>=5){
    result(); 
}
else 
displayQuiz();
})

//==============================
displayQuiz();