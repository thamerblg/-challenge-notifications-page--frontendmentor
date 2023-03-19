$(function () {
  $(".btn_read").click(function () {
    $(".notif_count").css("display", "none");
    $(".notif_summary.new").removeClass("new");
    $(".mark").css("display", "none");
  });
  $(".notif_summary").click(function () {
    let nbr = Number($(".notif_count").text());
    if (nbr && nbr > 1) {
      $(".notif_count").text(Number($(".notif_count").text()) - 1);
    } else {
      $(".notif_count").css("display", "none");
    }
    $(this).removeClass("new");
    $(this).find(".mark").css("display", "none");
  });
});
