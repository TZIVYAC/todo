require("dotenv").config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const taskRouter = require('./routers/task')
const contactRouter = require('./routers/contact')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use('/task', taskRouter);
app.use('/contact', contactRouter);

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.massage));

const LoggerMiddlleware = (req, res, next) => { 
    console.log(req.method)
    next();
}

app.use(LoggerMiddlleware);

