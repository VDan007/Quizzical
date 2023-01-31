import React from "react";


function Answer(props){
    
    return(
        <label htmlFor={props.text}> {props.text}
            <input type="radio" 
                   name={props.question}
                   checked = {props.selectedAnswer == props.text ? true : false}
                   value = {props.text}
                   onChange = { (e)=>props.answerByPlayer(e) } />
        </label>
    );
}

export default Answer;