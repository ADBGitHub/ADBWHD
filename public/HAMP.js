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
