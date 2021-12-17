import express from "express";

const app =express()
const port =3000;

app.get("/api",(req,res)=>{
    res.send("our API is workiiiiiing")
})


app.listen(port,()=>{
    console.log(`our server is running at http://localhost:${port}`)
})