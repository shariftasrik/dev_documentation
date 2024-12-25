Creating an express server =>

<h1>There are 6 steps </h1>

  <h1>Create Directory</h1>

      mkdir folder_name
      cd folder_name

  <h1>Create index.js file</h1>

      touch index.js

  <h1>Initialise npm </h1>

      npm init -y

  <h1>Install the Express package</h1>

      npm i express

  <h1>Write Server Application in index.js<h1>

        import express from "express";
        const app = express();
        const port = 3000;

        app.listen(port, ()=>{
            console.log(`Server running on port ${port}.`);
        });

  <h1>Start server</h1>

        nodemon index.js;




<h1>FOR CHECKING PERPOUS </h1>
 
 <h1>Go to the localhost</h1>
       
       localhost:3000



<h1>installing "nodemon" globally (-g tends to globally)</h1>

    npm i -g nodemon


<h1>ALMOS EVERY TIMET(maybe 100%) WE HAVE TO USE IT </h1>


     import express from "express";    
     import axios from "axios";
     import bodyParser from "body-parser";                                               
     import {dirname} from "path";                                                       
     import {fileURLToPath} from "url";                                                  
                                                                                           
     const _dirname = dirname(fileURLToPath(import.meta.url));                           
                                                                                          
     const app = express();                                                              
     const port = 3000;                                                                  
     var bandName = "";                                                                  
                                                                                           
     app.use(bodyParser.urlencoded({extended: true}));                                   
                                                                                           
     function functionName(req, res, next){                                             
         console.log(req.body);                                                        
         functionName = req.body["..."];                                               
         next();                                                                       
     }                                                                                   
    
    app.use(functionName);
    
     app.get("/", (req, res)=>{                                                          
         res.sendFile(_dirname + "/public/index.html");                                  
     });                                                                                 
                                                                                           
                                                                                           
     app.post("/submit", (req,res)=>{                                                    
         res.send(`<h1>.............</h1>`)                                               
     });                                                                                 
                                                                                           
     app.listen(port, () => {                                                            
         console.log(`Listening on port ${port}`);                                         
     });                                                                                   
                                                                                        
                                                                                       
