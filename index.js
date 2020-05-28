require('./models/db');

const express = require('express');//importing express for server
const userCon = require('./controllers/userCon')//saving this path to object for calling

const app = express();//calling express function with name app
const path = require('path');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended:true 
}))
app.use(bodyParser.json());//form data in json format
app.use('/public', express.static('public'));

//configuring express handlebar
app.set('views',path.join(__dirname+'/views/'))//setting path for view by using join function of path
app.engine('hbs',exphbs({extname:'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname+'/views/layout/'}));
app.set('view engine', 'hbs');   

//starting server by using listen function
app.listen(3000, function(req,res){
    console.log('server is running on port 3000')
});


app.use('/user', userCon);//calling the exporting rout to server
