const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('this indexw');
});

app.listen(8080, '127.0.0.2', () =>{
  console.log('Server 127.0.0.1:8080 to start...');
});

