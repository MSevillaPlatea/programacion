$(document).ready(function () {
  var mainTitle = $('#main-title');
/*
  mainTitle.delay(1000).hide(3000, function () {
    console.log('termino la animacion')
  });


  mainTitle.fadeOut(3000, function () {
    console.log('termino la animacion')
  })


  mainTitle.slideUp(3000, function () {
    console.log('termino la animacion')
  })


  mainTitle.show(3000, function () {
    console.log('termino la animacion')
  })



  mainTitle.delay(300).fadeIn(3000, function () {
    console.log('termino la animacion')
  })
   */

  $(window).scroll(function () {
    console.log('El usuario se está desplazando')
    console.log($(window).scrollTop())
  })

});