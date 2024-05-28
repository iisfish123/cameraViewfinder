const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.get("/test.png",(req,res)=>{
    res.sendFile(__dirname+"/test.png")        
})
app.get("/adapter-latest.js",(req,res)=>{
    res.sendFile(__dirname+"/adapter-latest.js")        
})

app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")    
})

app.listen(8000);