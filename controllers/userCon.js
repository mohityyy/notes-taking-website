 const express = require('express');
 var router = express.Router();
 const mongoose = require('mongoose');
 const User = mongoose.model('User');

 router.get('/',function(req,res){
     res.render('user/add',{
         viewTitle:"insert notes"
     })
     
 })

 router.post('/',function(req,res){
    insert(req,res);
    console.log('req.body')
    
 });

 function insert(req,res){
     var user = new User();
     user.fullname = req.body.fullname;
     user.title=req.body.title;
     user.note=req.body.note;
     user.save(function(err,doc){
         if(!err)
         res.redirect('/user');
         else{
             console.log('err in inserting'+err);
         }
     });

 }

 router.get('/list',function(req,res){
     
     User.find(function(err,docs){
         if(!err){
             res.render("user/list",{
                 list : docs
             })
         }
         else{
             console.log('erre in retrieving:'+err);
         }
     })
 })

 router.get('/delete/:id', function(req,res){
     User.findByIdAndRemove(req.body.id,function(err, doc){
         if(!err){
             res.redirect('/user/list');

         }else{
             console.log('err'+err)
         }
     })
 })
 module.exports= router;