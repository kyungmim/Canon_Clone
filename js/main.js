$(function(){
// top_menu
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown()
    }, function(){
        $(".my").stop().slideUp()
    }) // hover

// bottom menu
    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().slideDown()
    }, function(){
        $(".d_wrap").stop().slideUp()
    })// bottom menu


    // 팝업
    $(".util_regist").click(function(){
        $(".popup , .pop_bg").show()
    })//$(".util_regist").click

    $(".close").click(function(){
        $(".popup, .pop_bg").hide()
    })//


    // 메인비주얼 슬라이드 영역

    $(".main_visual").slick({
        autoplay: true ,
        autoplaySpeed : 3000,
        dots:true,
        arrows:false,
        swipe:false
    })//

    sw = 0 ; // stop=0, play = 1

    $(".stop").click(function(){
        if( sw == 0 ){
            $(".stop").addClass("on");
            $(".main_visual").slick("slickPause")
            sw=1;
        } else{
            $(".stop").removeClass("on");
            $(".main_visual").slick("slickPlay")
            sw=0;
        } //

    })//stop

 // photo 슬라이드 영역
    $(".photo").slick({
        autoplay : false,
        arrows: false,
        dots:true
    })

    sw1=1 // sw1 0  stop  sw1 1 = play

    $(".pause").click(function(){
        if( sw1 == 1){
            $(".pause").addClass("on")
            $(".photo").slick("slickPlay")
            sw1 =0;
        }else{
            $(".pause").removeClass("on")
            $(".photo").slick("slickPause")
            sw1 = 1;
        }//

    })// pause click


    // banner_slick

    $(".banner_slick").slick({
        autoplay:true,
        dots:true,
        arrows:false
    })/* banner_slick */
 
    bw=0; 
    $(".play").click(function(){
        if(  bw == 0){
            $(".play").addClass("on")
            $(".banner_slick").slick("slickPause")
            bw =1;
        }else{
            $(".play").removeClass("on")
            $(".banner_slick").slick("slickPlay")
            bw = 0;
        }//

    })// pause click

    $(".review_slick").slick({
        autoplay:false,
        dots:true,
        arrows:false
    })/* banner_slick */
 
    bw1=0; 
    $(".r_play").click(function(){
        if(  bw1 == 0){
            $(".r_play").addClass("on")
            $(".review_slick").slick("slickPlay")
            bw1 =1;
        }else{
            $(".r_play").removeClass("on")
            $(".review_slick").slick("slickPause")
            bw1 = 0;
        }//

    })// pause click


})//jquery