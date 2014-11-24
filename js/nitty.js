// JavaScript Document
$(document).ready(function(){

    $buildingup = false;

    $("#sliders-nitty>*").show();

    $("a.toggle2").click(function(){

        if ($buildingup == false){

            $(this).toggleClass('open')

            $(this).delay(1000,function(){
                $(".left-nitty").stop().animate({left : '38%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".right-nitty").stop().animate({left : '62%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".trigger-nitty").stop().animate({marginLeft:'100px'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".left-nitty div").show();
                $(".right-nitty div").show();
                $buildingup = true;
            });

        }else{
            $(this).toggleClass('open')
            $(".left-nitty").stop().animate({left : '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
            $(".right-nitty").stop().animate({left:  '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
            $(".trigger-nitty").stop().animate({marginLeft:'300px'}, {queue:false, duration:1000, easing: 'easeOutQuad'});
            $(".left-nitty div").hide(500);
            $(".right-nitty div").hide(500);
            $("#titlebar-nitty").fadeIn(200);
            $buildingup = false;
        }

    });

    //Change background color of body
    $("a.change").click(function(){
        $('body').css('background-color','#FFF');
    });

});