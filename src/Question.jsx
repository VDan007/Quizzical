import React from 'react';


function Question(props){

    const allAnswers = props.incorrectAnswer.map(item=>item);
    allAnswers.push(props.correctAnswer);

    
    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
    }
    
   
    console.log(allAnswers);
    shuffleArray(allAnswers);
    console.log(allAnswers);


    return(
        <div className = "question--div">
            <p>{props.question}</p>
            <p>answers</p>
        </div>
    );
}


export default Question;