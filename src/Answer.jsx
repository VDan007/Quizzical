import React from "react";


function Answer(props){

    let styles = {};

    if(props.checkAnswers && props.selectedAnswer == props.text && props.text == props.correctAnswer){
        styles = {backgroundColor: "green"};
    }else if (props.checkAnswers && props.selectedAnswer == props.text && props.text != props.correctAnswer){
        styles = {backgroundColor: "red"};
    }else if(props.checkAnswers && props.text == props.correctAnswer){
        styles = {backgroundColor: "green"};
    }
    
    return(
        <label htmlFor={props.text} style = {styles}> {props.text}
            <input type="radio" 
                   name={props.question}
                   checked = {props.selectedAnswer == props.text ? true : false}
                   value = {props.text}
                   onChange = { (e)=>props.answerByPlayer(e) }
                    />
        </label>
    );
}

export default Answer;