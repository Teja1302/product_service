const express = require('express')

const app =express();
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()

const db = require('../ProductService/config/dbconfig');
const router = require('./route/productRouter');

db.sync({ force: false })
    .then(e => console.log("Table Created"))
    .catch(e => console.log("error", e));

require('./model/productModel')

app.use('/products',router)
const port = process.env.PORT
app.listen(port,()=>
    {
        console.log("server connected at port 3001 successfully")
    })