$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log(scrollTop);
    $('#background1').css('top', -(scrollTop * 0.10) + 'px')
    $('#background2').css('top', -(scrollTop * 0.75) + 'px')
    $('#background3').css('top', -(scrollTop * 2) + 'px')
  })
});