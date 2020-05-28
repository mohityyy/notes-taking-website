const mongoose = require('mongoose')

//to creat object for schema and design of db
var userSchema = new mongoose.Schema({
    fullname:{
        type: String
    },
    title:{
        type: String
    },
    note:{
        type: String
    }

});

//to insert user schema into mongoose calling a model function

mongoose.model('User', userSchema) 