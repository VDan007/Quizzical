import React from 'react';
import Question from "./Question.jsx";
import { nanoid } from 'nanoid';



function App() {
  const [gameStarted,setGameStarted] = React.useState(true); //show or hide start page
  const [questions,setQuestions] = React.useState([]);
  const [answersByPlayer,setAnswersByPlayer] = React.useState([]);
  

  React.useEffect(              /////load questions
    ()=>{
      console.log('effect ran');
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(resp=>resp.json())
        .then(questions => setQuestions(questions.results.map(item=>{
         return {qu: item.question,
                correctAnswer : item.correct_answer,
                incorrect_answers: item.incorrect_answers}  })))
        
    },[]
  );

  function answerByPlayer(question, answer){

    setAnswersByPlayer(prev =>{

      if(prev.every(item=>item.question != question || !item)){ 
      return [...prev,{question: question,
                       answer: answer}]
      }
      else{
        return prev.map(item => {
          if(item.question === question){
            return {question: question,
                    answer: answer}
          }else return item;
        });
      }
    });
  }
  console.log(answersByPlayer);

  const questionsToRender = questions.map(
    question => {
      return <Question 
              key={nanoid()} 
              question={question.qu} 
              correctAnswer={question.correctAnswer}
              incorrectAnswer={question.incorrect_answers}
              answerByPlayer = {answerByPlayer}
              />
    }
  );




  return (
      
      <div className='app--container'>

        { !gameStarted && <div className="startPage--overlay">
            <h1>Quizzical</h1>
            <p>a Scrimba Reac Project</p>
            <button>Start quiz</button>
         </div>
        } 

        {questionsToRender}

      </div> //app--container
     
  )
}

export default App;
