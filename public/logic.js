function requestAJAX() {
  $.ajax({
    url: "/ajax",
    method: "POST",
    contentType: "text/plain",
    data: "Requested",
    success: function (result) {
      $("#abhi").html(result.html);
    },
  });
}
