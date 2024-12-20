import React from "react";

// in button we have used onClick = {}

var isDone = false;

function strike(){
  return document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike(){
  return document.getElementById("root").style.textDecoration = null;
}

function App() {

const strikeThrough = {textDecoration: "line-through"};
  return (
    <div>
      <p>Buy Milk</p>

        <button onClick = {strike}>
          Change to strike through
        </button>
        
        <button onClick = {unStrike}>
          Chnage back to unstrike
        </button>
    </div>
  );
}

export default App;
