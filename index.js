const express = require('express')

const app = express();
const toDoListRouter=require('./router/toDoListRouter')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/toDoListDB', { useNewUrlParser: true },()=>{
    console.log("Connect");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(9000,()=>{
    console.log("Listen on port 9000")
})

app.use('/toDoList',toDoListRouter)