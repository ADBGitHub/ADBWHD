let clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", onClickHandler);
function onClickHandler() {
  console.log("You Clicked clickBtn");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/ajax", true);
  xhr.onprogress = function () {
    console.log("On Progress");
  };
  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.send();
}

function getData() {
  return Math.random();
}

Plotly.plot("chart_div", [
  {
    y: [getData()],
    type: "line",
  },
]);

var cnt = 0;

// setInterval(function () {
//   Plotly.extendTraces("chart_div", { y: [[getData()]] }, [0]);
//   cnt++;
//   if (cnt > 500) {
//     Plotly.relayout("chart_div", {
//       xaxis: {
//         range: [cnt - 500, cnt],
//       },
//     });
//   }
// }, 15);
