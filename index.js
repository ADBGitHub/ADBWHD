import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import http from "http";
const app = express();
const PORT = process.env.PORT || 47;
const Router = express.Router();
let switch1 = 0;
let switch2 = 0;
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
// app.get("/onSwitch1", (req, res) => {
//   http.get("http://192.168.35.136/1E514763510C563onSwitch1", (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });

//     res.on("end", () => {
//       console.log(data);
//     });
//   });
//   res.send(data);
// });
app.get("/onSwitch1", (req, res) => {
  switch1 = 1;
  res.send("switch 1 is on");
});
app.get("/offSwitch1", (req, res) => {
  switch1 = 0;
  res.send("switch 1 is off");
});
app.get("/onSwitch2", (req, res) => {
  switch2 = 1;
  res.send("switch 2 is on");
});
app.get("/offSwitch2", (req, res) => {
  switch2 = 0;
  res.send("switch 2 is off");
});
app.get("/status", (req, res) => {
  if (switch1 == 0 && switch2 == 0) {
    res.send("xx");
  } else if (switch1 == 1 && switch2 == 0) {
    res.send("ox");
  } else if (switch1 == 1 && switch2 == 1) {
    res.send("oo");
  } else if (switch1 == 0 && switch2 == 1) {
    res.send("xo");
  }
});
app.get("/updateSwitchOO", (req, res) => {
  switch1 = 1;
  switch2 = 1;
  res.send("updated");
});
app.get("/updateSwitchOX", (req, res) => {
  switch1 = 1;
  switch2 = 0;
  res.send("updated");
});
app.get("/updateSwitchXO", (req, res) => {
  switch1 = 0;
  switch2 = 1;
  res.send("updated");
});
app.get("/updateSwitchXX", (req, res) => {
  switch1 = 0;
  switch2 = 0;
  res.send("updated");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
