import React from 'react';
import Answer from './Answer.jsx';
import { nanoid } from 'nanoid';


function Question(props){
  
    const allAnswers = props.allAnswers;
    
      
     
    
      const answers = allAnswers.map(
        answer => {
            return <Answer
                    key = {nanoid()}
                    text = {answer}
                    question = {props.question}
                    correctAnswer = {props.correctAnswer}
                    answerByPlayer = {props.answerByPlayer}
                    selectedAnswer = {props.selectedAnswer} 
                    checkAnswers = {props.checkAnswers} 
                   />
        }
      );
   
    



    return(
        <div className = "question--div">
            <h2>{props.question}</h2>
            <div className="answers--container">
                
                    {answers}
                
            </div>
        </div>
    );
}


export default Question;