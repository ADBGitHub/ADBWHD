import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 47;
var fs = fs();


app.get('/get',(req,res)=>{
    console.log("TEST");
    res.send("I Love You Ji....!!");
});

app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`));