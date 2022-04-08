import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import http from "http";
const app = express();
const PORT = process.env.PORT || 47;
const Router = express.Router();
let switch1 = 0;
let switch2 = 0;
let switch3 = 0;
let sensor = 0;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
app.get("/onSwitch3", (req, res) => {
  switch3 = 1;
  res.send("Pump is ON");
});
app.get("/offSwitch3", (req, res) => {
  switch3 = 0;
  res.send("Pump is OFF");
});
app.get("/onSensor", (req, res) => {
  sensor = 1;
  res.send("sensor 2 is on");
});
app.get("/offSensor", (req, res) => {
  sensor = 0;
  res.send("sensor 2 is off");
});
app.get("/status", (req, res) => {
  if (switch1 == 0 && switch2 == 0) {
    res.send("0");
  } else if (switch1 == 1 && switch2 == 0) {
    res.send("10");
  } else if (switch1 == 1 && switch2 == 1) {
    res.send("11");
  } else if (switch1 == 0 && switch2 == 1) {
    res.send("1");
  }
});
app.get("/status1", (req, res) => {
  if (switch3 == 0 && sensor == 0) {
    res.send("0");
  } else if (switch3 == 1 && sensor == 0) {
    res.send("10");
  } else if (switch3 == 1 && sensor == 1) {
    res.send("11");
  } else if (switch3 == 0 && sensor == 1) {
    res.send("1");
  }
});
app.get("/updateSwitch11", (req, res) => {
  switch1 = 1;
  switch2 = 1;
  res.send("updated");
});
app.get("/updateSwitch10", (req, res) => {
  switch1 = 1;
  switch2 = 0;
  res.send("updated");
});
app.get("/updateSwitch01", (req, res) => {
  switch1 = 0;
  switch2 = 1;
  res.send("updated");
});
app.get("/updateSwitch00", (req, res) => {
  switch1 = 0;
  switch2 = 0;
  res.send("updated");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
