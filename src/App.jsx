import React from 'react';
import Question from "./Question.jsx";



function App() {
  const [gameStarted,setGameStarted] = React.useState(true); //show or hide start page
  

  React.useEffect(              /////load questions
    ()=>{
      console.log('effect ran');
      fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then(resp=>resp.json())
        .then(questions => console.log(questions));
    },[]
  );



  return (
      
      <div className='app--container'>

        { !gameStarted && <div className="startPage--overlay">
            <h1>Quizzical</h1>
            <p>a Scrimba Reac Project</p>
            <button>Start quiz</button>
         </div>
        } 

        <Question/>

      </div> //app--container
     
  )
}

export default App;
