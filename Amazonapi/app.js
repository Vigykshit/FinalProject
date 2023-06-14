let express = require('express');
let app = express();
let port = 9120;
let {dbConnect,db} = require('./controller/dbController');
app.get('/',(req,res)=>{
    res.send('we are using amazonapi')
})

app.get('/category',(req,res)=>{
    res.send('we are using amazonapi now use Amazon')
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})