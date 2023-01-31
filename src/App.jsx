import React from 'react';
import Question from "./Question.jsx";
import { nanoid } from 'nanoid';



function App() {
  const [gameStarted,setGameStarted] = React.useState(false); //show or hide start page
  const [questions,setQuestions] = React.useState([]);
  const [checkAnswers,setCheckAnswers] = React.useState(false);
  const [restart,setReastart] = React.useState(false);



  function startGame(){
    setGameStarted(true);
  }

  function check(){
    if(!checkAnswers && questions.every(question =>question.selectedAnswer)){
      setCheckAnswers(true);
    }else if (!checkAnswers){
      alert("Before checking please be so kind and answer all of the questions");
    }else{
      setCheckAnswers(false);
      setReastart(prev=> !prev);
    }
  }

  function poinCounter(){
    return  questions.filter(question=>{
      return question.correctAnswer == question.selectedAnswer}).length;
      
  }
  


  React.useEffect(              /////load questions
    ()=>{
      
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(resp=>resp.json())
        .then(questions => setQuestions(questions.results.map(item=>{
         return {qu: item.question,
                correctAnswer : item.correct_answer,
                incorrect_answers: item.incorrect_answers,
                selectedAnswer: ""}  })))
        
    },[restart]
  );

  function answerByPlayer(e){
    const question = e.target.name;
    const answer = e.target.value;
    
    setQuestions(prev=>{
      return prev.map(item => {
        if(item.qu == question){
          return {...item,selectedAnswer: answer}
        }else{
          return item;
        }
      });
    });

  }

 
  

  const questionsToRender = questions.map(
    question => {
      return <Question 
              key={nanoid()} 
              question={question.qu} 
              correctAnswer={question.correctAnswer}
              incorrectAnswer={question.incorrect_answers}
              answerByPlayer = {answerByPlayer}
              selectedAnswer = {question.selectedAnswer}
              checkAnswers = {checkAnswers}
              />
    }
  );




  return (
      
      <div className='app--container'>

        { !gameStarted && <div className="startPage--overlay">
            <h1>Quizzical</h1>
            <p>a Scrimba Reac Project</p>
            <button onClick={startGame}>Start quiz</button>
         </div>
        } 

        {questionsToRender}
        {checkAnswers && <p>You Scored {poinCounter()}/5</p>}
        <button onClick={check}>{checkAnswers ? "Play again" : "Check answers"}</button>
      </div> //app--container
      
     
  )
}

export default App;
