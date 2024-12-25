Creating an express server =>

<h1>There are 6 steps </h1>

<ol>
  <li>Create Directory</li>

      mkdir folder_name
      cd folder_name

  <li>Create index.js file</li>

      touch index.js

  <li>Initialise npm</li>

      npm init -y

  <li>Install the Express package</li>

      npm i express

  <li>Write Server Application in index.js</li>

        import express from "express";
        const app = express();
        const port = 3000;

        app.listen(port, ()=>{
            console.log(`Server running on port ${port}.`);
        });

  <li>Start server</li>

        nodemon index.js;

</ol>


<h1>FOR CHECKING PERPOUS </h1>
 <ol>
 <li>Go to the localhost</li>
       
       localhost:3000



<li>installing "nodemon" globally (-g tends to globally)</li>

    npm i -g nodemon


<li>ALMOS EVERY TIMET(maybe 100%) WE HAVE TO USE IT </li>


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
                                                                                        
</ol>                                                                                         
