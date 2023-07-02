var quizdata =[

    {
        question:'Which Framework is related to JS ? ',
        a:' .net',
        b:' Flask ',
        c:' React ',
        d:'Django ',
        correct :'c '
    },
    {
        question:'Which is not a programming language ? ',
        a:' HTML ',
        b:'Python ',
        c:' Java',
        d:'JS ',
        correct :'a '
    },
    {
        question:' Which is not a Framework ? ',
        a:' React',
        b:'Javascript ',
        c:' Angular ',
        d:' Django',
        correct :' b'
    },
    {
        question:'  Which cannot be done in testing ? ',
        a:' Lion Testing ',
        b:' Monkey Testing ',
        c:' Adopt Testing ',
        d:' System Testing ',
        correct :' a'
    },
    {
        question:' What does V&V SDLC model stands for ',
        a:' Vue & Validation ',
        b:' Vue & Verificatio ',
        c:' Verification & Validation  ',
        d:' Both a & b',
        correct :' c '
    },
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')
var submitbtn = document.getElementById('submit')


var currentQuestion = 0
var quizScore =0
loadQuiz()

function loadQuiz(){
    deselect()
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d


}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{
    var selectedOption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectedOption = answer.id
        }

    })

    if(selectedOption==quizdata[currentQuestion].correct){
        quizScore = quizScore+1
    }
    currentQuestion = currentQuestion +1
    
    if(currentQuestion==quizdata.length){
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered  ${quizScore} correctly out of ${quizdata.length}</h1>`
    }else{
        loadQuiz()
    }
})