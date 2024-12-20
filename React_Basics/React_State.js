/// State => To make our app more Interactive

/// State => Central concept, how react does things

/// UI = f(State)
/// UI is the function of the States of an App
import React from "react";


function App() {

/// DECLARATIVE PROGRAMMING
/// State Variable
var isDone = false;
const strikeThrough = {textDecoration: "line-through"};
  
  return (
    /// DECLARATIVE PROGRAMMING
    <p style={isDone ? strikeThrough : null}>Buy Milk</p>
    // we have an UI (user interface that is dependent upon the value of a State variable (in this case State variable - isDone ))


    /// IMPERATIVE PROGRAMMING
    document.getElementById("root").style.textDecoration = "line-through";
    // same kaj korbe kintu eikhane amader imperatively bole deya lagse protita khetre
  );
}

export default App;
