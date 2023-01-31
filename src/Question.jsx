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
            answerByPlayer = {props.answerByPlayer}
            selectedAnswer = {props.selectedAnswer}  />
        }
      );
   
    



    return(
        <div className = "question--div">
            <p>{props.question}</p>
            <div className="answers--container">
                
                    {answers}
                
            </div>
        </div>
    );
}


export default Question;