
## install package 

    npm i pg
    

## Demo 

    import pg from "pg"; 

    const db = new pg.Client({ 
      user: "postgres", 
      host: "localhost", 
      database: "database_name", 
      password: "*******", 
      post : 5432, 
    });

    db.connect(); <br/>

    let array_name = [];
    db.query("SELECT * FROM table_name", (err, res) => { 
      if (err) {
        console.error("Error executing query", err.stack); 
      } else { 
        array_name = res.rows; 
      } 
      db.end(); 
    }); 


