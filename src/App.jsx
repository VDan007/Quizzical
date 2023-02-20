import React from 'react';
import Question from "./Question.jsx";
import { nanoid } from 'nanoid';



function App() {
  const [gameStarted,setGameStarted] = React.useState(false); //show or hide start page
  const [questions,setQuestions] = React.useState([]);
  const [checkAnswers,setCheckAnswers] = React.useState(false);
  const [restart,setReastart] = React.useState(false);

console.log(questions);

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
      
      let pattern = /&quot;/g;
      let replacement = '"';
      let pattern02 = /&#039;/g;
      let replacement02 = "'";

      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(resp=>resp.json())
        .then(questions => setQuestions(questions.results.map(item=>{
         return {qu: item.question.replace(pattern,replacement).replace(pattern02,replacement02),
                correctAnswer : item.correct_answer,
                incorrect_answers: item.incorrect_answers,
                selectedAnswer: "",
                allAnswers: shuffleAnswers(item.incorrect_answers,item.correct_answer)}  })))
        
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


  function shuffleAnswers(incorrectA,correctA){
    const answers = [];
    incorrectA.forEach(element => {
        answers.push(element);
    });

    answers.splice( Math.floor( Math.random() * (incorrectA.length + 1) ),0, correctA );
    return answers;
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
              allAnswers = {question.allAnswers}
              />
    }
  );




  return (
      
      <div className='app--container'>

        { !gameStarted && <div className="startPage--overlay">
            <h1>Quizzical</h1>
            <p>a Scrimba React Project</p>
            <p className="startPage--authorP">by Daniel Varjaskéri</p>
            <button onClick={startGame}>Start quiz</button>
         </div>
        } 
        <div className="questions--container">

        {questionsToRender}
        </div>

        <div className="app--footer">
        {checkAnswers && <p>You Scored {poinCounter()}/5</p>}
        <button onClick={check}>{checkAnswers ? "Play again" : "Check answers"}</button>

        </div>

      </div> //app--container
      
     
  )
}

export default App;
