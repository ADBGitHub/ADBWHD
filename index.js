import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
// import http from "http";
const app = express();
const PORT = process.env.PORT || 47;
const Router = express.Router();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
  //   http.get("http://192.168.35.136/1E514763510C563onSwitch1", (res) => {
  //     let data = "";
  //     res.on("data", (chunk) => {
  //       data += chunk;
  //     });

  //     res.on("end", () => {
  //       console.log(data);
  //     });
  //   });
  res.send("switch one is on");
});
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
