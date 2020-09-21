const express = require('express');
const app = express();

var colours = {
  Jim : 'blue',
  Dwight : 'orange',
  Pam : 'red',
  Michael : 'blue',
  Toby : 'grey',
  Creed : 'black',
  Andy : 'purple'};


app.get('/colour', (req, res) => {
  
    // Extract some parameters
    var name = req.query.name;
    if(name == '') {
       name = 'unknown'; 
    }

    if (name in colours) {
      var colour = colours[name];
    };  
  if (!(name in colours)) {
      var colour = 'unknown';
    };  
    res.send({ info: colour, result: 'success', rc: 0 });

  });

app.get('/disable', (req, res) => {

    // Extract some parameters
    var devId = req.query.devId;
    if(name == '') {
       name = 'unknown'; 
    }
  // Call SOTI here
    if (name in colours) {
      var colour = colours[name];
    };  
  if (!(name in colours)) {
      var colour = 'unknown';
    };  
    res.send({ info: colour, result: 'success', rc: 0 });

  });

app.get('/enable', (req, res) => {

    // Extract some parameters
    var name = req.query.name;
    if(name == '') {
       name = 'unknown'; 
    }

    if (name in colours) {
      var colour = colours[name];
    };  
  if (!(name in colours)) {
      var colour = 'unknown';
    };  
    res.send({ info: colour, result: 'success', rc: 0 });

  });


const PORT = process.env.PORT || 3001;
app.listen(PORT);
