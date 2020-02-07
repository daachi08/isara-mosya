 // アコーディオンメニュー
 $(function(){
    $('.accordion-menu-item-link').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('on');
        $("+.submenu",this).slideToggle();
        return false;
      });
    }); 

    $('.accordion-menu-item-link-sp').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('on');
        $("+.submenu-sp",this).slideToggle();
        return false;
      });
    }); 


  //指定のリンクへスクロール
  
 $(function(){
  $('a[href^="#"]').click(function(){
    var adjust = -80; //高さ調整
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
});
