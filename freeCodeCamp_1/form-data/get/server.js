const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/form.html');
});

app.get('/process',(req,res)=>{
  console.log(req.query);
  res.send(`${req.query.name} said ${req.query.message}`);
});

app.listen(3000,()=>{console.log('listening on prt 3000')});
