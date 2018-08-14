/*轮播图*/
$(function () {
  $(".banner").flexslider({
    slideshowSpeed: 4000, //展示时间间隔ms
    animationSpeed: 400, //滚动时间ms
    touch: true //是否支持触屏滑动
  });
});	



/*选项卡JS*/
$(document).ready(function () {
  $(".ct:gt(0)").hide();
  var hdw = $(".pro-a");
  //hdw.hover(function() {
  //    $(this).addClass('current').siblings().removeClass('current');
  //});
  hdw.click(function () {
    $(this).addClass("current").parent().siblings().children().removeClass('current');
    var hdw_index = hdw.index(this);
    $(".ct").eq(hdw.index(this)).show().siblings().hide();
  });
});



//返回顶部
function tBox() {
  //h = $(window).height();
  t = $(document).scrollTop();
  if (t > 150) {
    $(".tbox").fadeIn(300);
  } else {
    $(".tbox").fadeOut(300);
  }
}
$(document).ready(function (e) {
  $("body").append('<div class="tbox"><a href="javascript:void(0)" id="gotop"></a></div>');

  tBox();

  $("#gotop").click(function () {
    //$(document).scrollTop(0);
    $('html,body').animate({ 'scrollTop': 0 }, 1000); //滚回顶部的时间，越小滚的速度越快~
  })
});

$(window).scroll(function (e) {
  tBox();
})
