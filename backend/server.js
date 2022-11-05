const bodyParser = require('body-parser');
const express=require('express');
const notes = require('./data/notes');
const dotenv=require('dotenv');
const app=express();

dotenv.config();
const PORT=process.env.PORT 

app.get('/',(req,res)=>{
    console.log('Hello from yash over there');
    res.send('<h1>Hello From Yash</h1>');
})
app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const id=req.params.id;
    const note=notes.find((elem)=>{
        if(elem.id==id)return elem;
    })
    // console.log(id);
    res.send(note);
})



app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
});