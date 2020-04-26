const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port',process.env.PORT||3000);

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/form.html');
});

app.post('/',(req,res)=>{
  console.log(req.body);
  res.send(`${req.body.name} said ${req.body.message}`);
});

app.listen(3000,()=>console.log('listening on 3000'));
