$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable").click(function() {
    $("#show-image").toggle();
    $("#hide-image").toggle();
  });

  $("button#darkmode").click(function() {
    $("body").removeClass();
    $("body").addClass("darktheme");
  });
  $("button#lightmode").click(function() {
    $("body").removeClass();
    $("body").addClass("lighttheme");
  });
});
