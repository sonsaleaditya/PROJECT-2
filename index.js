//const db = require('./con')
require('dotenv').config();
app.use(express.joson());
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
db.connect();


app.get('/',(req,res)=>{
    const q = "select * from students"
    db.query(q,(err,result)=>{
        if(err) console.error("executing error ",err);
       
        res.render('index.ejs',{table : result.rows});
    })
    
})


app.post('/insert',(req,res)=>{
    const name = req.body['name'];
    const mob = req.body['number'];
    console.log(name + " "+ mob);
    const q = "insert into students(name,mob) values($1,$2);"
    const values = [name,mob];
    db.query(q,values,(err,result)=>{
        if(err) console.error("executing error ",err);
        res.redirect('/');
    });
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
