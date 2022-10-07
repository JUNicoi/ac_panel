$(".title_btn").on("click", function () {
  var findElm = $(this).next(".text_box");
  $(findElm).slideToggle();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});
