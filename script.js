$(document).ready(function () {
  var envelope = $("#envelope");

  envelope.click(function () {
    if (!envelope.hasClass("open")) {
      open();
    }
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
