const express = require('express');
router = express.Router();

router.get('/john',(req,res)=>{
  res.send('Home of user');
})

router.get('/mark',(req,res)=>{
  res.send('Home of user');
})

module.exports = router;
