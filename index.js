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
let switch4 = 0;
let switch5 = 0;
let sensor = 0;
let door = 0;
let doorLock = 0;
let door1 = 0;
let doorLock1 = 0;
let seq = 0;
let seq1 = 0;
let gasLeakage = 0;
let smoke = 0;
let fire = 0;
let window = "";
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

app.get("/onSwitch4", (req, res) => {
  switch4 = 1;
  res.send("switch 1 is on");
});
app.get("/offSwitch4", (req, res) => {
  switch4 = 0;
  res.send("switch 1 is off");
});
app.get("/onSwitch5", (req, res) => {
  switch5 = 1;
  res.send("switch 2 is on");
});
app.get("/offSwitch5", (req, res) => {
  switch5 = 0;
  res.send("switch 2 is off");
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

app.get("/status2", (req, res) => {
  if (switch4 == 0 && switch5 == 0) {
    res.send("0");
  } else if (switch4 == 1 && switch5 == 0) {
    res.send("10");
  } else if (switch4 == 1 && switch5 == 1) {
    res.send("11");
  } else if (switch4 == 0 && switch5 == 1) {
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

app.get("/doorIsClosed", (req, res) => {
  door = 1;
  res.send("Door is Closed");
});

app.get("/doorIsOpen", (req, res) => {
  door = 0;
  res.send("Door is Open");
});

app.get("/door1IsClosed", (req, res) => {
  door1 = 1;
  res.send("Door is Closed");
});
app.get("/door1IsOpen", (req, res) => {
  door1 = 0;
  res.send("Door is Open");
});

app.get("/doorStatus", (req, res) => {
  res.send(door.toString());
});

app.get("/door1Status", (req, res) => {
  res.send(door1.toString());
});

app.get("/lockStatus", (req, res) => {
  res.send(doorLock.toString());
});

app.get("/lock1Status", (req, res) => {
  res.send(doorLock1.toString());
});

app.get("/openLock", (req, res) => {
  if (Boolean(seq)) {
    res.send("Unlock Door..");
    doorLock = 1;
  } else {
    doorLock = 0;
    res.send("Lock is Open");
  }
});

app.get("/openLock1", (req, res) => {
  if (Boolean(seq)) {
    res.send("Unlock Door..");
    doorLock1 = 1;
  } else {
    doorLock1 = 0;
    res.send("Lock is Open");
  }
});

app.get("/closelock", (req, res) => {
  doorLock = 1;
  res.send("Lock is Close");
});
app.get("/checkSeq", (req, res) => {
  res.send(seq.toString());
});
app.get("/onSeq", (req, res) => {
  seq = 1;
  res.send("LOCKED....!!");
});
app.get("/offSeq", (req, res) => {
  seq = 0;
  res.send("UNLOCKED....!!");
});
app.get("/warning", (req, res) => {
  if (Boolean(seq) && !Boolean(door)) {
    res.send("!!...Security is broken...!!");
  }
  res.send("All Ok...!!");
});

app.get("/closelock1", (req, res) => {
  doorLock1 = 1;
  res.send("Lock is Close");
});
app.get("/checkSeq1", (req, res) => {
  res.send(seq1.toString());
});
app.get("/onSeq1", (req, res) => {
  seq1 = 1;
  res.send("LOCKED....!!");
});
app.get("/offSeq1", (req, res) => {
  seq1 = 0;
  res.send("UNLOCKED....!!");
});
app.get("/warning1", (req, res) => {
  if (Boolean(seq1) && !Boolean(door1)) {
    res.send("!!...Security is broken...!!");
  }
  res.send("All Ok...!!");
});

app.get("/HomeStatus", (req, res) => {
  gasLeakage = req.query.gasLeakage;
  smoke = req.query.smoke;
  fire = req.query.fire;
  res.send(window);
});
app.get("/HomeStatus1", (req, res) => {
  res.send(gasLeakage + smoke + fire);
});
app.get("/openWindow", (req, res) => {
  window = "openWindow";
  res.send("Window is open");
});
app.get("/closeWindow", (req, res) => {
  window = "closeWindow";
  res.send("Window is Close");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
