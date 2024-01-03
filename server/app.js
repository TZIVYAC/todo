const express = require('express');
const app = express();
const mongoose = require('mongoose')
const taskRouter = require('./routers/task')
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.use('/task', taskRouter);

const CONECTION_URL="mongodb+srv://0548503117t:sISMt7i2ZXAqoUIP@cluster0.zgahdxq.mongodb.net/?retryWrites=true&w=majority"
const PORT=process.env.PORT || 5000;

mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.massage));


const LoggerMiddlleware = (req, res, next) => {
    console.log(req.method)
    next();
}

app.use(LoggerMiddlleware);

app.listen(8000, () => {
    console.log("hello");
})
