import React from 'react';
import Question from "./Question.jsx";
import { nanoid } from 'nanoid';



function App() {
  const [gameStarted,setGameStarted] = React.useState(true); //show or hide start page
  const [questions,setQuestions] = React.useState([]);
  console.log(questions);
  

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


  const questionsToRender = questions.map(
    question => {
      return <Question 
              key={nanoid()} 
              question={question.qu} 
              correctAnswer={question.correctAnswer}
              incorrectAnswer={question.incorrect_answers}
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
