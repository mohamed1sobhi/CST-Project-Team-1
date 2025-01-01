$(document).ready(function () {
  $(".main-image").each(function () {
    $(this).data("original-src", $(this).attr("src"));
  });
  $(".small-images img").hover(function () {
    const src = $(this).attr("src");
    $(this).closest(".outfit-card").find(".main-image").attr("src", src);
  });
  $(".main-image").hover(
    function () {},
    function () {
      $(this).attr("src", $(this).data("original-src"));
    }
  );
});
