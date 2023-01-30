import React from 'react';



function App() {
  const [gameStarted,setGameStarted] = React.useState(false);
  

  return (
      
      <div className='app--container'>

        { !gameStarted && <div className="startPage--overlay">
            <h1>Quizzical</h1>
            <p>a Scrimba Reac Project</p>
            <button>Start quiz</button>
         </div>
        } 

      </div>
     
  )
}

export default App
