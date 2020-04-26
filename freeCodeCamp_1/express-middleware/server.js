const express = require('express');
const app = express();

//setting the port
app.set('port', process.env.PORT || 3000);

app.use((req,res,next)=>{
  console.log('first');
  next();
})

app.use((req,res,next)=>{
  console.log('second');
  // next();
});

app.use((req,res,next)=>{
  console.log('third bitch');
  // next();
})

app.listen(3000,()=>console.log('listening on 3000'));
