const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
});


app.listen(3000, (req, res)=>{
    console.log("Conectado na porta 3k")
});