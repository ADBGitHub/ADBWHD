let adbv = 0;
let adbc1;
let adbc2;
let adbp = 0;
let adbpA1;
let adbpA2;
let time = 0;
let newDivName = "chart_v";
let yData = 0;
let s1 = 0;
let s2 = 0;

// console.log(adbv);
let graphTitle = "Voltage";
let voltg = document.getElementById("voltg");
let crnt = document.getElementById("crnt");
let powr = document.getElementById("powr");
let rowV = document.getElementById("rowV");
let rowA = document.getElementById("rowA");
let rowP = document.getElementById("rowP");
let chart_v = document.getElementById("chart_v");
let chart_c = document.getElementById("chart_c");
let chart_p = document.getElementById("chart_p");
let app1Vval = document.getElementById("app1Vval");
let app1Cval = document.getElementById("app1Cval");
let app1Pval = document.getElementById("app1Pval");
let app2Vval = document.getElementById("app2Vval");
let app2Cval = document.getElementById("app2Cval");
let app2Pval = document.getElementById("app2Pval");
let vVal = document.getElementById("vVal");
let cVal = document.getElementById("cVal");
let pVal = document.getElementById("pVal");
let switch1 = document.getElementById("switch1");
let switch2 = document.getElementById("switch2");
switch1.addEventListener("click", toggleSwitch1);
switch2.addEventListener("click", toggleSwitch2);
function toggleSwitch1() {
  const xhr = new XMLHttpRequest();
  if (document.querySelector("#switch1").checked) {
    xhr.open("GET", "/onSwitch1", true);
  } else {
    xhr.open("GET", "/offSwitch1", true);
  }
  xhr.send();
  xhr.onload = function () {
    console.log(this.response);
  };
}
function toggleSwitch2() {
  const xhr = new XMLHttpRequest();
  if (document.querySelector("#switch2").checked) {
    xhr.open("GET", "/onSwitch2", true);
  } else {
    xhr.open("GET", "/offSwitch2", true);
  }
  xhr.send();
  xhr.onload = function () {
    console.log(this.response);
  };
}
voltg.addEventListener("click", activeVoltg);
function activeVoltg() {
  rowV.className = "cardRow btnActive";
  rowA.className = "cardRow";
  rowP.className = "cardRow";
  graphTitle = "Voltage";
  chart_v.style.display = "block";
  chart_c.style.display = "none";
  chart_p.style.display = "none";
  plotGraph("chart_v");
}
crnt.addEventListener("click", activeCrnt);
function activeCrnt() {
  rowV.className = "cardRow";
  rowA.className = "cardRow btnActive";
  rowP.className = "cardRow";
  graphTitle = "Current";
  chart_v.style.display = "none";
  chart_c.style.display = "block";
  chart_p.style.display = "none";
  plotGraph("chart_c");
}
powr.addEventListener("click", activePowr);
function activePowr() {
  rowV.className = "cardRow";
  rowA.className = "cardRow";
  rowP.className = "cardRow btnActive";
  graphTitle = "Power";
  chart_v.style.display = "none";
  chart_c.style.display = "none";
  chart_p.style.display = "block";
  plotGraph("chart_p");
}

let layout = {
  title: graphTitle,
  xaxis: {
    title: "Time",
  },
  yaxis: {
    title: graphTitle,
  },
};
Plotly.newPlot(
  newDivName,
  [
    {
      y: [yData],
      type: "line",
    },
  ],
  layout,
  { responsive: true }
);

function plotGraph(divName) {
  newDivName = divName;
  layout = {
    title: graphTitle,
    xaxis: {
      title: "Time",
    },
    yaxis: {
      title: graphTitle,
    },
  };

  Plotly.newPlot(
    newDivName,
    [
      {
        y: [yData],
        type: "line",
      },
    ],
    layout,
    { responsive: true }
  );
}

var cnt = 0;

setInterval(function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/getVariables", true);
  // xhr.onprogress = function () {
  //   console.log("On Progress");
  // };
  xhr.onload = function () {
    let responceData = JSON.parse(this.response);
    adbv = responceData.adbv;
    adbc1 = responceData.adbc1;
    adbc2 = responceData.adbc2;
    adbp = responceData.adbp;
    adbpA1 = responceData.adbpA1;
    adbpA2 = responceData.adbpA2;
    time = responceData.time;
    s1 = responceData.switch1;
    s2 = responceData.switch2;
    if (graphTitle == "Voltage") {
      yData = adbv;
    } else if (graphTitle == "Current") {
      yData = adbc1 + adbc2;
    } else {
      yData = adbp;
    }
    if (s1) {
      document.querySelector("#switch1").checked = true;
    } else {
      document.querySelector("#switch1").checked = false;
    }
    if (s2) {
      document.querySelector("#switch2").checked = true;
    } else {
      document.querySelector("#switch2").checked = false;
    }
  };
  xhr.send();

  vVal.innerText = adbv + " Volt";
  cVal.innerText = adbc1 + adbc2 + " mA";
  pVal.innerText = adbp + " W";
  app1Vval.innerText = adbv + " V";
  app1Cval.innerText = adbc1 + " mA";
  app1Pval.innerText = adbpA1 + " W";
  app2Vval.innerText = adbv + " V";
  app2Cval.innerText = adbc2 + " mA";
  app2Pval.innerText = adbpA2 + " W";
  // console.log(newDivName);
  // Plotly.extendTraces(newDivName, { y: [[yData]] }, [0]);
  // cnt++;
  // if (cnt > 60) {
  //   Plotly.relayout(newDivName, {
  //     xaxis: {
  //       range: [cnt - 60, cnt],
  //     },
  //   });
  // }
}, 500);
