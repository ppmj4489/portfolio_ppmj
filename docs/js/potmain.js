
$(function(){
  $(".menu p:nth-of-type(1) a").on("click",function(){
    var height = $(".projbox_intro").offset();
  $("html, body").animate({scrollTop: height.top}), 400
});

  $(".menu p:nth-of-type(2) a").on("click",function(){
      var height = $(".projbox_main").offset();
    $("html, body").animate({scrollTop: height.top}), 400
  });

  $(".menu p:nth-of-type(3) a").on("click",function(){
    var height = $(".projbox_profile").offset();
  $("html, body").animate({scrollTop: height.top}), 400
});
});


/*포폴페이지메뉴용
    $(document).ready(function() {
      $(window).scroll( function(){
        $('.spacbox').each( function(i){
          var bottom_of_object = $(this).offset().top+$(this).outerHeight() / 3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},800);
          }
        });
      });
    });
    */