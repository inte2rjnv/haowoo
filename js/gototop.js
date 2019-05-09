$(function(){
    /*點擊.gototop時,緩慢往上滑*/
    $('.gototop').on('click', function(e){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, 1000);
    });

    /*捲軸位置在視窗小於100px時,將.gototop隱藏*/	
    window.addEventListener('scroll',function(){
        if( document.documentElement.scrollTop < 100){
            $('.gototop').css({
                'opacity':'0',
                'visibility':'hidden'
        });

        }else{
            $('.gototop').css({
                'opacity':'1',
                'visibility':'visible'
        });		

        }
    });
});
