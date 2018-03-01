//inport
const path = require('path');
const express = require('express');
const axios = require('axios');


//config
require('dotenv').config();
console.log(process.env);
const {API_KEY} = process.env;
console.log(API_KEY);

//creation of stuff
const serverApp = express();
const port = process.env.PORT || 5000;
serverApp.use(express.static('client/build'));

serverApp.get('/forecast/:lat,:lon',function (request, response){
    const {lat, lon} = request.params;
     const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`
     axios.get(url)
          .then(res => {
           response.json(res.data)
           response.status(200).json(res.data)
          })
          .catch(err =>{
              response.status(500).json({
                  msg: 'your stuff is broke.'
              });

          });
});
serverApp.get('*', (request, response) => {
    response.sendFile('index.html', {root: path.resolve('client/build')});
});

serverApp.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
