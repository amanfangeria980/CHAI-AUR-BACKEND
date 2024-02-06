require('dotenv').config()
const express=require('express')

const port=process.env.PORT || 5000;
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/twitter",(req,res)=>{
    res.send("aman_fangeria")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Please login here!</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("<h2>Aman Fangeria</h2>")
})

app.listen(port,()=>{
    console.log("Server is running on PORT "+port);
})