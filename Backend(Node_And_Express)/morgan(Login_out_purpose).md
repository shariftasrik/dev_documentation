<h1>initialize and use morgan </h1>
  <ol>
    <li>use npm to install the morgan package</li>
    <li>run index2.js with nodemon</li>
    <li>import the morgan module</li>
    <li>mount the middleware using the Express .use() method</li>
    <li>test the logging on localhost and with Postman</li>
  </ol>


<h1>Installation Process</h1>

    npm install morgan

<h1>Use Morgan in an Express app</h1>

Sample Code :

    const express = require('express');
    const morgan = require('morgan');
    const app = express();
    
    // Use morgan to log HTTP requests
    app.use(morgan('dev'));  // The 'dev' format logs concise colored output
    
    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
