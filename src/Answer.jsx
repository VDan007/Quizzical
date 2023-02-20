import React from "react";


function Answer(props){

    let stylesLabel = {};
    let stylesInput = {};

    if(props.checkAnswers && props.selectedAnswer == props.text && props.text == props.correctAnswer){
        stylesLabel = {backgroundColor: "#248232"};
    }else if (props.checkAnswers && props.selectedAnswer == props.text && props.text != props.correctAnswer){
        stylesLabel = {backgroundColor: "red"};
    }else if(props.checkAnswers && props.text == props.correctAnswer){
        stylesLabel = {backgroundColor: "#248232"};
    }

    if(props.checkAnswers && props.text == props.correctAnswer){
        stylesInput = {borderRadius: "15px"};
    }
    
    return(
        <label style = {stylesLabel} htmlFor={props.text} > {props.text}
            <input type="radio" 
                   name={props.question}
                   checked = {props.selectedAnswer == props.text ? true : false}
                   value = {props.text}
                   onChange = { (e)=>props.answerByPlayer(e) }
                   style = {stylesInput}
                   disabled = {props.checkAnswers}
                    />
        </label>
    );
}

export default Answer;