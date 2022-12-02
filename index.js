import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { google } from "googleapis";
import http from "http";
const app = express();

app.set("view engine", "ejs");
const PORT = process.env.PORT || 47;
const Router = express.Router();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(express.static("views"));

// let switch1 = 0;
// let switch2 = 0;

// let adbv = 0;
// let adbc1 = 0;
// let adbc2 = 0;
// let adbp = 0;
// let time = 0;

// let hf = fs.readFileSync("./views/HAMP.ejs", "utf-8");

app.get("/", (req, res) => {
  // res.render("HAMP");
  res.send("OKChutiyaHeroku");
});
// app.get("/httpReqToMCU.html", (req, res) => {
//   res.render("httpReqToMCU.html", { root: __dirname });
// });

// app.get("/bedroom.html", (req, res) => {
//   res.render("bedroom.html", { root: __dirname });
// });
// app.get("/hall.html", (req, res) => {
//   res.render("hall.html");
// });
// app.get("/kitchen.html", (req, res) => {
//   res.render("kitchen.html");
// });
// app.get("/projectReport.html", (req, res) => {
//   res.render("projectReport.html", { root: __dirname });
// });

// app.get("/images/Smart-Home1.png", (req, res) => {
//   res.send(fs.readFileSync("./views/images/Smart-Home1.png"));
// });
// app.get("/img/iot", (req, res) => {
//   res.send(fs.readFileSync("./views/images/iot.png"));
// });
// app.get("/img/node", (req, res) => {
//   res.send(fs.readFileSync("./views/images/node.png"));
// });
// app.get("/img/eagle", (req, res) => {
//   res.send(fs.readFileSync("./views/images/eagle.png"));
// });
// app.get("/img/esp32", (req, res) => {
//   res.send(fs.readFileSync("./views/images/esp32.png"));
// });
// app.get("/img/triac", (req, res) => {
//   res.send(fs.readFileSync("./views/images/triac.png"));
// });
// app.get("/img/ttp223", (req, res) => {
//   res.send(fs.readFileSync("./views/images/ttp223.png"));
// });
// app.get("/img/p1", (req, res) => {
//   res.send(fs.readFileSync("./views/images/P1.png"));
// });
// app.get("/img/p2", (req, res) => {
//   res.send(fs.readFileSync("./views/images/P2.png"));
// });
// app.get("/img/p3", (req, res) => {
//   res.send(fs.readFileSync("./views/images/P3.png"));
// });
// app.get("/img/nxt", (req, res) => {
//   res.send(fs.readFileSync("./views/images/nxt.png"));
// });
// app.get("/img/prv", (req, res) => {
//   res.send(fs.readFileSync("./views/images/prv.png"));
// });

// app.get("/PRF.pdf", (req, res) => {
//   res.sendFile("PRF.pdf", { root: __dirname });
// });
// app.get("/ajax", (req, res) => {
//   res.send("AJAX DATA");
// });
// // app.get("/sendHttpReq", (req, res) => {
// //   http.get("http://192.168.4.1/giveData", (res) => {
// //     let data = "";
// //     res.on(data, (chunk) => {
// //       data += chunk;
// //     });
// //   });
// //   res.send({ id: 1303, say: "hello" });
// // });

// // app.get("/onSwitch1", (req, res) => {
// //   http.get("http://192.168.35.136/1E514763510C563onSwitch1", (res) => {
// //     let data = "";
// //     res.on("data", (chunk) => {
// //       data += chunk;
// //     });

// //     res.on("end", () => {
// //       console.log(data);
// //     });
// //   });
// //   res.send(data);
// // });
// app.get("/onSwitch1", (req, res) => {
//   switch1 = 1;
//   res.send("switch 1 is on");
// });
// app.get("/offSwitch1", (req, res) => {
//   switch1 = 0;
//   res.send("switch 1 is off");
// });
// app.get("/onSwitch2", (req, res) => {
//   switch2 = 1;
//   res.send("switch 2 is on");
// });
// app.get("/offSwitch2", (req, res) => {
//   switch2 = 0;
//   res.send("switch 2 is off");
// });

// app.get("/status", (req, res) => {
//   if ("adbc1" in req.query) {
//     adbc1 = req.query.adbc1;
//     adbc2 = req.query.adbc2;
//     adbv = req.query.adbv;
//     adbp = req.query.adbp;
//   }
//   if (switch1 == 0 && switch2 == 0) {
//     res.send("0");
//   } else if (switch1 == 1 && switch2 == 0) {
//     res.send("10");
//   } else if (switch1 == 1 && switch2 == 1) {
//     res.send("11");
//   } else if (switch1 == 0 && switch2 == 1) {
//     res.send("1");
//   }
// });
// // app.get("/getVariables", (req, res) => {
// //   res.send({
// //     adbc1: adbc1,
// //     adbc2: adbc2,
// //     adbv: adbv,
// //     adbp: adbp,
// //     time: time,
// //     switch1: switch1,
// //     switch2: switch2,
// //   });
// // });

// //Project C25

// let C25S1, C25S2, C25S3, C25S4, C25S5;
// C25S1 = 0;
// C25S2 = 0;
// C25S3 = 0;
// C25S4 = 0;
// C25S5 = 0;

// app.get("/C25Status", (req, res) => {
//   if ("C25S1" in req.query) {
//     C25S1 = req.query.C25S1;
//   }
//   if ("C25S2" in req.query) {
//     C25S2 = req.query.C25S2;
//   }
//   if ("C25S3" in req.query) {
//     C25S3 = req.query.C25S3;
//   }
//   if ("C25S4" in req.query) {
//     C25S4 = req.query.C25S4;
//   }
//   if ("C25S5" in req.query) {
//     C25S5 = req.query.C25S5;
//   }
//   res.send(
//     "C25S1" +
//       C25S1.toString() +
//       "C25S2" +
//       C25S2.toString() +
//       "C25S3" +
//       C25S3.toString() +
//       "C25S4" +
//       C25S4.toString() +
//       "C25S5" +
//       C25S5.toString()
//   );
// });

// app.get("/onC25S1", (req, res) => {
//   C25S1 = 1;
//   res.send("C25S1 is on");
// });
// app.get("/onC25S2", (req, res) => {
//   C25S2 = 1;
//   res.send("C25S2 is on");
// });
// app.get("/onC25S3", (req, res) => {
//   C25S3 = 1;
//   res.send("C25S3 is on");
// });
// app.get("/onC25S4", (req, res) => {
//   C25S4 = 1;
//   res.send("C25S4 is on");
// });
// app.get("/onC25S5", (req, res) => {
//   C25S5 = 1;
//   res.send("C25S5 is on");
// });

// app.get("/offC25S1", (req, res) => {
//   C25S1 = 0;
//   res.send("C25S1 is off");
// });
// app.get("/offC25S2", (req, res) => {
//   C25S2 = 0;
//   res.send("C25S2 is off");
// });
// app.get("/offC25S3", (req, res) => {
//   C25S3 = 0;
//   res.send("C25S3 is off");
// });
// app.get("/offC25S4", (req, res) => {
//   C25S4 = 0;
//   res.send("C25S4 is off");
// });
// app.get("/offC25S5", (req, res) => {
//   C25S5 = 0;
//   res.send("C25S5 is off");
// });

// app.get("/adbwhdinfo", (req, res) => {

//     adbc1 = req.query.adbc1;
//     adbc2 = req.query.adbc2;
//     adbv = req.query.adbv;
//     adbp = req.query.adbp;
//     adbpA1 = adbv * adbc1;
//     adbpA2 = adbv * adbc2;
//     res.send();
// });jknkjnkj

// /* <-----------------Irigation System Sachin --------------------------> */

// let switch3 = 0;
// let sensor = 0;

// app.get("/onSwitch3", (req, res) => {
//   switch3 = 1;
//   res.send("Pump is ON");
// });
// app.get("/offSwitch3", (req, res) => {
//   switch3 = 0;
//   res.send("Pump is OFF");
// });
// app.get("/onSensor", (req, res) => {
//   sensor = 1;
//   res.send("sensor 2 is on");
// });
// app.get("/offSensor", (req, res) => {
//   sensor = 0;
//   res.send("sensor 2 is off");
// });
// app.get("/status1", (req, res) => {
//   if (switch3 == 0 && sensor == 0) {
//     res.send("0");
//   } else if (switch3 == 1 && sensor == 0) {
//     res.send("10");
//   } else if (switch3 == 1 && sensor == 1) {
//     res.send("11");
//   } else if (switch3 == 0 && sensor == 1) {
//     res.send("1");
//   }
// });

// /* <-------------------Door Lock System-------------------------------------> */
// let door = 0;
// let doorLock = 0;
// let seq = 0;

// app.get("/doorIsClosed", (req, res) => {
//   door = 1;
//   res.send("Door is Closed");
// });
// app.get("/doorIsOpen", (req, res) => {
//   door = 0;
//   res.send("Door is Open");
// });
// app.get("/doorStatus", (req, res) => {
//   res.send(door.toString());
// });
// app.get("/lockStatus", (req, res) => {
//   res.send(doorLock.toString());
// });
// app.get("/openLock", (req, res) => {
//   if (Boolean(seq)) {
//     res.send("Unlock Door..");
//     doorLock = 1;
//   } else {
//     doorLock = 0;
//     res.send("Lock is Open");
//   }
// });
// app.get("/closelock", (req, res) => {
//   doorLock = 1;
//   res.send("Lock is Close");
// });
// app.get("/checkSeq", (req, res) => {
//   res.send(seq.toString());
// });
// app.get("/onSeq", (req, res) => {
//   seq = 1;
//   res.send("LOCKED....!!");
// });
// app.get("/offSeq", (req, res) => {
//   seq = 0;
//   res.send("UNLOCKED....!!");
// });
// app.get("/warning", (req, res) => {
//   if (Boolean(seq) && !Boolean(door)) {
//     res.send("!!...Security is broken...!!");
//   }
//   res.send("All Ok...!!");
// });

// /* <------------------Home Sequrity-----------------------------------------> */
// let gasLeakage = 0;
// let smoke = 0;
// let fire = 0;
// let window = "";
// app.get("/HomeStatus", (req, res) => {
//   gasLeakage = req.query.gasLeakage;
//   smoke = req.query.smoke;
//   fire = req.query.fire;
//   res.send(window);
// });
// app.get("/HomeStatus1", (req, res) => {
//   res.send(gasLeakage + smoke + fire);
// });
// app.get("/openWindow", (req, res) => {
//   window = "openWindow";
//   res.send("Window is open");
// });
// app.get("/closeWindow", (req, res) => {
//   window = "closeWindow";
//   res.send("Window is Close");
// });

// /* <-----------------Door Lock + Home Automation----------------------------> */
// let switch4 = 0;
// let switch5 = 0;
// let door1 = 0;
// let doorLock1 = 0;
// let seq1 = 0;
// app.get("/onSwitch4", (req, res) => {
//   switch4 = 1;
//   res.send("switch 1 is on");
// });
// app.get("/offSwitch4", (req, res) => {
//   switch4 = 0;
//   res.send("switch 1 is off");
// });
// app.get("/onSwitch5", (req, res) => {
//   switch5 = 1;
//   res.send("switch 2 is on");
// });
// app.get("/offSwitch5", (req, res) => {
//   switch5 = 0;
//   res.send("switch 2 is off");
// });
// app.get("/status2", (req, res) => {
//   if (switch4 == 0 && switch5 == 0) {
//     res.send("0");
//   } else if (switch4 == 1 && switch5 == 0) {
//     res.send("10");
//   } else if (switch4 == 1 && switch5 == 1) {
//     res.send("11");
//   } else if (switch4 == 0 && switch5 == 1) {
//     res.send("1");
//   }
// });
// app.get("/door1IsClosed", (req, res) => {
//   door1 = 1;
//   res.send("Door is Closed");
// });
// app.get("/door1IsOpen", (req, res) => {
//   door1 = 0;
//   res.send("Door is Open");
// });
// app.get("/door1Status", (req, res) => {
//   res.send(door1.toString());
// });
// app.get("/lock1Status", (req, res) => {
//   res.send(doorLock1.toString());
// });
// app.get("/openLock1", (req, res) => {
//   if (Boolean(seq)) {
//     res.send("Unlock Door..");
//     doorLock1 = 1;
//   } else {
//     doorLock1 = 0;
//     res.send("Lock is Open");
//   }
// });
// app.get("/closelock1", (req, res) => {
//   doorLock1 = 1;
//   res.send("Lock is Close");
// });
// app.get("/checkSeq1", (req, res) => {
//   res.send(seq1.toString());
// });
// app.get("/onSeq1", (req, res) => {
//   seq1 = 1;
//   res.send("LOCKED....!!");
// });
// app.get("/offSeq1", (req, res) => {
//   seq1 = 0;
//   res.send("UNLOCKED....!!");
// });
// app.get("/warning1", (req, res) => {
//   if (Boolean(seq1) && !Boolean(door1)) {
//     res.send("!!...Security is broken...!!");
//   }
//   res.send("All Ok...!!");
// });

// /* <------------------Transformer Monitoring------------------------------> */
// let switch6 = 0;
// let switch7 = 0;
// let temp = 0;
// let Irms = 0;
// let Vrms = 0;
// let Powr = 0;
// let warning2 = "No Warning...!!";
// let oilLevel = 0;

// app.get("/onSwitch6", (req, res) => {
//   switch6 = 1;
//   res.send("Load is on");
// });
// app.get("/offSwitch6", (req, res) => {
//   switch6 = 0;
//   res.send("Load 1 is off");
// });
// app.get("/onSwitch7", (req, res) => {
//   switch7 = 1;
//   res.send("Load 2 is on");
// });
// app.get("/offSwitch7", (req, res) => {
//   switch7 = 0;
//   res.send("Load 2 is off");
// });
// app.get("/status3", (req, res) => {
//   if (switch6 == 0 && switch7 == 0) {
//     res.send("0");
//   } else if (switch6 == 1 && switch7 == 0) {
//     res.send("10");
//   } else if (switch6 == 1 && switch7 == 1) {
//     res.send("11");
//   } else if (switch6 == 0 && switch7 == 1) {
//     res.send("1");
//   }
//   if ("temp" in req.query) {
//     temp = req.query.temp;
//     Irms = req.query.Irms;
//     Vrms = req.query.Vrms;
//     Powr = (Irms * Vrms) / 1000;
//     warning2 = req.query.Warning;
//     oilLevel = req.query.oilLevel;
//   }
// });
// app.get("/getData", (req, res) => {
//   res.send(
//     "O" +
//       oilLevel.toString() +
//       "T" +
//       temp.toString() +
//       "I" +
//       Irms.toString() +
//       "V" +
//       Vrms.toString() +
//       "P" +
//       Powr.toString() +
//       "W" +
//       warning2
//   );
// });

// /* <------------------Energy Meater Vivek---------------------------------> */

// let switch8 = 0;
// let switch9 = 0;
// let switch10 = 0;
// let switch11 = 0;
// let cs1Val = 0.0;
// let cs2Val = 0.0;
// let vsVal = 0.0;
// let prvTime = 0.0;
// let crtTime = 0.0;
// let prvPowr = 0.0;
// let powr = 0.0;
// let energy = 0.0;

// app.get("/onSwitch8", (req, res) => {
//   switch8 = 1;
//   res.send("Switch 1 is on");
// });
// app.get("/onSwitch9", (req, res) => {
//   switch9 = 1;
//   res.send("Switch 1 is on");
// });
// app.get("/onSwitch10", (req, res) => {
//   switch10 = 1;
//   res.send("Switch 1 is on");
// });
// app.get("/onSwitch11", (req, res) => {
//   switch11 = 1;
//   res.send("Switch 1 is on");
// });
// app.get("/offSwitch8", (req, res) => {
//   switch8 = 0;
//   res.send("Switch 1 is off");
// });
// app.get("/offSwitch9", (req, res) => {
//   switch9 = 0;
//   res.send("Switch 1 is off");
// });
// app.get("/offSwitch10", (req, res) => {
//   switch10 = 0;
//   res.send("Switch 1 is off");
// });
// app.get("/offSwitch11", (req, res) => {
//   switch11 = 0;
//   res.send("Switch 1 is off");
// });

// app.get("/status4", (req, res) => {
//   if ("cs1Val" in req.query) {
//     cs1Val = req.query.cs1Val;
//     cs2Val = req.query.cs2Val;
//     vsVal = req.query.vsVal;
//     prvTime = req.query.prvTime;
//     crtTime = req.query.crtTime;
//     powr = req.query.powr;
//     res.send(
//       "A" +
//         switch8.toString() +
//         "B" +
//         switch9.toString() +
//         "C" +
//         switch10.toString() +
//         "D" +
//         switch11.toString()
//     );
//     energy =
//       energy +
//       (0.5 * (crtTime / 1000 - prvTime / 1000) * (powr - prvPowr) +
//         (crtTime - prvTime) * (powr - (powr - prvPowr))) /
//         3600000;
//   } else {
//     res.send(
//       "A" +
//         switch8.toString() +
//         "B" +
//         switch9.toString() +
//         "C" +
//         switch10.toString() +
//         "D" +
//         switch11.toString() +
//         "E" +
//         cs1Val.toString() +
//         "F" +
//         cs2Val.toString() +
//         "G" +
//         vsVal.toString() +
//         "H" +
//         energy.toString()
//     );
//   }
// });

// /* <-----------------Eye Blink Sensor Project GECB--------------------------> */
// let eye = 1;
// let driverSleep = 0;

// app.get("/eyeIsOpen", (req, res) => {
//   eye = 1;
//   res.send("Eye is Open");
// });
// app.get("/eyeIsClosed", (req, res) => {
//   eye = 0;
//   res.send("Eye is Close");
// });
// app.get("/driverInSleep", (req, res) => {
//   driverSleep = 1;
//   res.send("Driver is Sleaping");
// });
// app.get("/driverNotSleep", (req, res) => {
//   driverSleep = 0;
//   res.send("Driver is not Sleaping");
// });
// app.get("/status5", (req, res) => {
//   res.send("A" + String(eye) + "B" + String(driverSleep));
// });

// /* <--------------------Vision Walker Project GECB--------------------------> */
// let distance = 0;
// let warning3 = "All Ok...!!";

// app.get("/visionDistance", (req, res) => {
//   if ("distance" in req.query) {
//     distance = req.query.distance;
//     res.send("updated");
//     if (distance <= 4) {
//       warning3 = "DANGER...!!";
//     } else {
//       warning3 = "All Ok...!!";
//     }
//   } else {
//     res.send("X" + String(distance) + "Y" + warning3);
//   }
// });

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
