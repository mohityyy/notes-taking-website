const mongoose = require('mongoose')// importing mongoose

//connecting to database
mongoose.connect('mongodb://localhost:27017/notes', {useNewUrlParser:true},function(err){
    if(!err){
        console.log('db connected susscefully')

    }else
    console.log('error in connecting'+err)
})

//calling user model

require('./note');

//done with connecting nodejs applicaion with mongodb
