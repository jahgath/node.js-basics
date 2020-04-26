const express = require('express');
const mongoose = require('mongoose');
const {check, validationResult} = require('express-validator');

const router = express.Router();
const Registration = mongoose.model('Registration')

router.get('/',(req,res)=>{
  res.render('form',{title: 'Registration form'})
})

router.post('/',
[
  check('name').isLength({min: 1}).withMessage('Please enter a name'),
  check('email').isLength({min: 1}).withMessage('Please enter your email'),
],(req,res)=>{
  const errors = validationResult(req);
  if(errors.isEmpty()){
    const registration = new Registration(req.body);
    registration.save().then(()=> {res.send('thank you');})
    .catch((err)=> {
      console.log(err);
      res.send('Sorry, something went wrong')
    });
  }else{
    res.render('form',{
      title: 'Registration form',
      errors: errors.array(),
      data: req.body,
    })
  }
})

router.get('/registations',(res,req)=>{
  Registration.find().then((reistrations)=> {
    res.render('index', { title: 'Listing registrations'});
  })
  .catch(() => {res.send('sorry something wrong'); })
})

module.exports = router;
