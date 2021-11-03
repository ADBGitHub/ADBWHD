import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 47;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log("TEST");
    res.send("Hello from home page");
});

app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`));