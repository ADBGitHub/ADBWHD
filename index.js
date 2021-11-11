
const express = require("express");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 47;
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.post('/',(req,res)=>{
    var api = req.body.api_key;
    console.log(api);
    res.send(api);
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