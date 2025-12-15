const readline= require('readline')

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let total =0

let questions=[
    {
        question: 'What is the only food that never spoils?',
        answer: 'honey'
    },
    {
        question: 'What planet is known as the "Red Planet"?',
        answer: 'Mars'
    },
    {
        question: 'What is the best language?',
        answer: 'Javascript'
    },
    {
        question: 'what is the capital city of Kenya?',
        answer: 'Kenya'
    }
]
let currentIndex=0
let counter =0
function askQuestions(){
     if(currentIndex < questions.length){
        r1.question(questions[currentIndex].question, (ans)=>{
          if(ans.toLowerCase() === questions[currentIndex].answer.toLowerCase()){
            console.log('correct')
            total++
          }else{
             console.log('Incorrect')
             console.log(`your total score so far is ${total}`)
          }

          currentIndex ++
          askQuestions()

        })
    }else{
        console.log(`\nEnd of questions your total score is ${total}/${questions.length}`)
        endQuiz()
    }

}

function endQuiz(){
    clearInterval(countDown)
    r1.close()
}

 let countDown= setInterval(()=>{
   counter ++
    if(counter >= 10){
        console.log(`\nTime is Up your total is ${total}/${questions.length}`)
        endQuiz()
    }
}, 1500)


askQuestions()


