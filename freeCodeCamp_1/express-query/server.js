const express = require('express');
app = express();

app.get('/',(req,res)=>{
  console.log(req.query)
  res.sendFile(__dirname + '/form.html')
})

app.listen(3000,()=>console.log('express sytarted at port 3000'))
