const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


var app = express();

const keys = require('./config/keys');

const ContactRoutes = require('./routes/contactRoutes');

mongoose.connect(keys.mongoose.mongodbURL);


var db = mongoose.connection;



db.on('error',function(err)
{
   console.log('error on db');
});


db.once('open',function()
{
  console.log('open  the connect db');
});

//middleware for bodyParser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());








ContactRoutes(app);


//path of static files
app.use(express.static(path.join(__dirname,'dist/contactApp')));


app.get('*',function (request,response)
{
  console.log('get * method');
  response.sendFile(path.join(__dirname,'dist/contactApp/index.html'));
});




const port_no = '3000';


app.listen(port_no);

console.log('server listen to the port');
