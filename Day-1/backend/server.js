import express from "express";
import 'dotenv/config'

const port=process.env.PORT || 5000;
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Dark Mode",
          content: "Why do JavaScript developers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 2,
          title: "Comforting Bugs",
          content: "How do you comfort a JavaScript bug? You console it!"
        },
        {
          id: 3,
          title: "Sad Developer",
          content: "Why was the JavaScript developer sad? Because he didn't 'null' his feelings."
        },
        {
          id: 4,
          title: "Parisian Programmer",
          content: "What's a programmer's favorite place in Paris? The Eiffel Script!"
        },
        {
          id: 5,
          title: "Dark Chocolate",
          content: "Why do programmers prefer dark chocolate? It has a higher byte count!"
        }
];
    res.send(jokes);
})

app.listen(port,()=>{
    console.log("app is listening on port "+port);
})
