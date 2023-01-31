import React from 'react';
import Answer from './Answer.jsx';
import { nanoid } from 'nanoid';


function Question(props){

    const allAnswers = props.incorrectAnswer.map(item=>item);
    allAnswers.push(props.correctAnswer);

    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
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