 

// Grabbing all Elements Needed
const currentGradeInput = document.getElementById('current-grade')
const desiredGradeInput = document.getElementById('desired-grade') 
const finalExamInput = document.getElementById('final-exam')
const currentGradeLabel = document.querySelector('.current-grade-label')
const desiredGradeLabel = document.querySelector('.desired-grade-label')
const finalExamLabel = document.querySelector('.final-exam-label')
const calculateButton = document.getElementById('calculate-button')
const calcInputs = document.getElementById('current-grade','desired-grade','final-exam' )
const calcContainer = document.getElementById('jumbotron-container')
const resultText = document.getElementById('result-text')
const resetButton = document.querySelector('#reset-button')
const result = document.querySelector('#result-container')
const calcForm = document.querySelector('#calculator')
const body = document.body
const devButton = document.querySelector('#first-navbar')
const SearchInput = document.querySelector('.form-control')


 
 

// Grabbing Inputs To Calculate
currentGradeInput.addEventListener('keyup' , (e) => {
    sessionStorage.setItem('CurrentGrade', e.target.value)

})
 desiredGradeInput.addEventListener('keyup' , (e) => {
    sessionStorage.setItem('DesiredGrade', e.target.value)

     
})
finalExamInput.addEventListener('keyup' , (e) => {
    sessionStorage.setItem('FinalExam', e.target.value)

})


// Press Enter To go Next Input Box Then Calculate
currentGradeInput.addEventListener('keyup', (e) => {
    if (e.keycode === 13 || e.which === 13){
         desiredGradeInput.focus()
    }
})
desiredGradeInput.addEventListener('keyup', (e) => {
    if (e.keycode === 13 || e.which === 13){
          finalExamInput.focus()
    }
})
finalExamInput.addEventListener('keyup', (e) => {
    if (e.keycode === 13 || e.which === 13){
          calculateButton.click()
    }
})


 

 const reset = document.createElement('button') 
    reset.setAttribute('id', 'reset-button')
    reset.hidden = true   
    const Result = document.createElement('div') 
    Result.setAttribute('id', 'result-container')
    Result.hidden = true
    
    
    
calculateButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Calculation Algorithim
    const currentGrade = sessionStorage.getItem('CurrentGrade') 
    const finalExam = sessionStorage.getItem('FinalExam')
    const desiredGrade = sessionStorage.getItem('DesiredGrade')
    const currentGradeWeight = 100 - finalExam
    const newCurrentGrade = (currentGradeWeight / 100) * currentGrade
    // Answer
    const score = ((desiredGrade - newCurrentGrade) / finalExam) * 100 
  
    // Hiding Calculator and Showing Answer
    calcContainer.hidden = true
    reset.hidden = false
    Result.hidden = false
    reset.innerText = 'Reset'
    Result.innerHTML = `<h1 id = 'result-text'>You need a score of <br/> <h1 id = 'result-num'>${score.toFixed(2)}%<h1/></h1> <br> <h2 id = 'under-result'> to obtain an overall grade of <br/><h1 id = 'result-num'>${desiredGrade}%<h1/> </h2>`
    
  

    body.append(Result, resultText)
    Result.append(reset)
})

reset.addEventListener('click', () => {
    // Hiding Answer And Showing Calculator
     reset.hidden = true
     Result.hidden = true
     calcContainer.hidden = false 
})

SearchInput.addEventListener('click', (e) => {
    console.log('click')
     
} )



 
