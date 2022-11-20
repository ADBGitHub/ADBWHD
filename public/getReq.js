console.log("heello");
let btnSendReq = document.getElementById("btnSendReq");
btnSendReq.addEventListener("click", getHttpReq);
function getHttpReq() {
  console.log("reqGenrerated");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/sendHttpReq", true);
  xhr.send();
  xhr.onload = function () {
    console.log(this.response);
  };
}
