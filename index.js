import express from 'express';
import fs from 'fs'
const app = express();
const PORT = process.env.PORT || 47;

app.get('/',(req,res)=>{
    console.log("TEST");
    res.send("Please request your name.");
});

app.get('/sonal',(req,res)=>{
    console.log("TEST");
    res.send("I Love You Ji....!!");
});
app.get('/anjali',(req,res)=>{
    console.log("TEST");
    res.send("I Love You....:))");
});
app.get('/sachin',(req,res)=>{
    console.log("TEST");
    res.send("Love You Beta Ji....!");
});
app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`));