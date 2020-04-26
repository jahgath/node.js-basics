const express = require('express');
router = express.Router();

router.get('/',(req,res)=>{
  res.send('Home of API');
})

module.exports = router;
