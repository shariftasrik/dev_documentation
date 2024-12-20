import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);  
    /*
      useState() er bracket er moddhe ja ja likhsi 
      seita hoilo Initial state or value 
    */

  function increase(){
    //count++;
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return(    
      <div className="container">
        <h1>{count}</h1>
        {
          /* useState autometically re-render er kaj kore
            manually hard code likhe re-render korte hoi na
          */
        }
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      
  );
}

export default App;
