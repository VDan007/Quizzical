import React from "react";


function Answer(props){
    return(
        <div onClick={()=>props.answerByPlayer(props.question,props.text)} className="answer--div">
            {props.text}
        </div>
    );
}

export default Answer;