-------------------------------------------------------------------
## install package 

    npm i pg
    
<br/>
## Demo 
    import pg from "pg"; <br/>
    <br/>
    const db = new pg.Client({ <br/>
      user: "postgres", <br/>
      host: "localhost", <br/>
      database: "database_name", <br/>
      password: "*******", <br/>
      post : 5432, <br/>
    });<br/>
    <br/>
    db.connect(); <br/>
    <br/>
    let array_name = []; <br/>
    db.query("SELECT * FROM table_name", (err, res) => { <br/>
      if (err) { <br/>
        console.error("Error executing query", err.stack); <br/>
      } else { <br/>
        array_name = res.rows; <br/>
      } <br/>
      db.end(); <br/>
    }); <br/>

----------------------------------------------------------------------
