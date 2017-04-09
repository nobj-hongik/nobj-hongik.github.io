(function($){
  $(document).ready(function(){

/* 프로필사진변경*/
    $('#jo').hide();
    $('#one').hide();

    $('#noh').click(function(){

        $('#noh').fadeOut('fast');
        $('#jo').fadeIn('fast');

    });
    $('#jo').click(function(){

        $('#jo').fadeOut('fast');
        $('#one').fadeIn('fast');

    });
    $('#one').click(function(){

        $('#one').fadeOut('fast');
        $('#noh').fadeIn('fast');

    });

    $('#noh, #jo, #one').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#noh, #jo, #one').toggleClass('check');
    });

/*탑버튼*/
     $('body').append('<div id="toTop"><i class="fa fa-angle-double-up fa-5x"></i></div>'); $("#toTop").bind("click", function () {$("body").animate({ scrollTop: 0 }, 200);}); $(window).scroll(function () { if ($(this).scrollTop() != 0) { $('#toTop').fadeIn(); } else { $('#toTop').fadeOut(); } });



  });
})(jQuery);
