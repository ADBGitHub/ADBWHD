import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const http = require("http");
const app = express();
const PORT = process.env.PORT || 47;
const Router = express.Router();
var switch1 = 0;
var switch2 = 0;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
http.get("url", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(data);
  });
});
app.get("/sonal", (req, res) => {
  console.log("TEST");
  res.send("I Love You Ji....!!");
});
app.get("/sachin", (req, res) => {
  console.log("TEST");
  res.send("I Love You Ji....!!");
});

app.get("/ambika", (req, res) => {
  console.log("TEST");
  res.send("Love You re....!!");
});
app.get("/anjali", (req, res) => {
  console.log("TEST");
  res.send("I Love You....:))");
});
app.get("/sachin", (req, res) => {
  console.log("TEST");
  res.send("Love You Beta Jii....!");
});
app.get("/samiksha", (req, res) => {
  console.log("TEST");
  res.send("Hello Samiksha.....!!");
});
app.get("/", (req, res) => {
  fs.readFile("./index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});
app.get("/onSwitch1", (req, res) => {
  console.log("TEST");
  res.send("Hello Samiksha.....!!");
});
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
