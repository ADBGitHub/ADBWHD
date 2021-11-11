import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 47;
app.use(bodyParser.urlencoded({
    extended:true
}));
app.post('/',(req,res)=>{
    var api = req.body.api_key;
    if(api == "adbwhdapi"){res.send("Connected!");}else{res.send("Error");}    
});

app.get('/sonal',(req,res)=>{
    console.log("TEST");
    res.send("I Love You Ji....!!");
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
    res.send("Love You Beta Jii....!");
});
app.get('/samiksha',(req,res)=>{
    console.log("TEST");
    res.send("Hello Samiksha.....!!");
});
app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`));