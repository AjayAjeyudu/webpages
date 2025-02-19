const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Florence", "Rome", "Milan"],
        answer: "Rome"
    }
];

const quizContainer=document.getElementById('quiz-container');
const submitBtn=document.getElementById('submit-btn');
const resultContainer=document.getElementById('result');

function createQuiz()
{
    questions.forEach((question,index)=>{
        const questionsDiv = document.createElement('div');
        questionsDiv.className='questions';

        const questionText =document.createElement('h2');
        questionText.innerText= `${index+1}.${question.}`
   })
}
