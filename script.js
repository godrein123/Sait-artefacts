if (window.jQuery) {
   //jQuery подключен к странице
}


$(".burger").click(function() {
  $(".nuv").slideToggle(400);
});

$(window).resize(function() {
  if ($(window).width() > 900) {
    $(".nuv").show();
    $(".burger").hide();
  } else {
    $(".nuv").hide();
    $(".burger").show();
  }
});