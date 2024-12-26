<h1>public/index.html</h1>

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React App</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300"
        />
        <link rel="stylesheet" href="styles.css" />
      </head>
    
      <body>
        <div id="root"></div>
        <script src="../src/index.js" type="text/jsx"></script>
      </body>
    </html>


<h1>public/style.css</h1>

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-weight: 300;
    }
    
    body {
      font-family: "Source Sans Pro", sans-serif;
      color: white;
      font-weight: 300;
      background: #50a3a2;
      width: 100%;
      height: 100%;
    }
    
    .container {
      margin: 10% auto;
      padding: 80px 0;
      text-align: center;
    }
    
    .container h1 {
      font-size: 40px;
      font-weight: 200;
    }
    
    input {
      border: 1px solid rgba(252, 252, 252, 0.4);
      background-color: rgba(252, 252, 252, 0.2);
      width: 250px;
      border-radius: 3px;
      font-family: "Source Sans Pro", sans-serif;
      padding: 10px 15px;
      margin: 0 auto 10px auto;
      display: block;
      text-align: center;
      font-size: 18px;
      color: white;
      font-weight: 300;
    }
    
    button {
      appearance: none;
      outline: 0;
      background-color: white;
      border: 0;
      padding: 10px 15px;
      color: #50a3a2;
      border-radius: 3px;
      width: 250px;
      font-size: 18px;
    }



<h1>src/components</h1>


    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./components/App";
    import "./../public/styles.css";
    
    ReactDOM.render(<App />, document.getElementById("root"));
    
<h1>src/components</h1>

    import React, {useState} from "react";
    
    function App() {
    
      const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
      });
    
    function handleChange(event){
      const {value, name} = event.target;
    
      setFullName((prevValue)=>{
        if(name === "fName"){
          return{
            fName : value,
            lName : prevValue.lName 
          }
        }else if(name === "lName"){value
          return{
            fName : prevValue.fName,
            lName : value
          }
        }
      })
    }
    
    
      return (
        <div className="container">
          <h1>Hello {fullName.fName} {fullName.lName} !</h1>
          <form>
            <input 
              name="fName" 
              onChange={handleChange} 
              placeholder="First Name" 
              value={fullName.fName}
            />
            <input 
              name="lName" 
              onChange={handleChange} 
              placeholder="Last Name" 
              value={fullName.lName}
            />
            <button >Submit</button>
          </form>
        </div>
      );
    }
    
    export default App;



<h1>package.json</h1>

    {
      "name": "changing-complex-state",
      "version": "1.0.0",
      "description": "",
      "keywords": [],
      "main": "src/index.js",
      "dependencies": {
        "react": "16.8.6",
        "react-dom": "16.8.6",
        "react-scripts": "3.2.0"
      },
      "devDependencies": {
        "typescript": "3.3.3"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
      },
      "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
      ]
    }
