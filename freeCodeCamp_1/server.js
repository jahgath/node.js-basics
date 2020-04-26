const express = require('express');
app = express();

app.use('/users',require('./react-router/basic_router'));

app.use('/api',require('./react-router/api_route'));

app.get('/posts/newpost',(req,res)=>{
  res.send('new post');
});

var listener = app.listen(3000,()=>console.log('you are listening at port ' + listener.address().port));
