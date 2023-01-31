import React from "react";


function Answer(props){

    let stylesLabel = {};
    let stylesInput = {};

    if(props.checkAnswers && props.selectedAnswer == props.text && props.text == props.correctAnswer){
        stylesLabel = {backgroundColor: "rgba(53,134,0,0.8)"};
    }else if (props.checkAnswers && props.selectedAnswer == props.text && props.text != props.correctAnswer){
        stylesLabel = {backgroundColor: "rgba(145,47,64,0.8)"};
    }else if(props.checkAnswers && props.text == props.correctAnswer){
        stylesLabel = {backgroundColor: "rgba(53,134,0,0.8)"};
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
                    />
        </label>
    );
}

export default Answer;