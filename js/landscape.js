// JavaScript Document
$(document).ready(function(){

    $buildingup = false;

    $("#sliders>*").show();

    $("a.toggle").click(function(){

        if ($buildingup == false){

            $(this).toggleClass('open')
            $("#titlebar2").fadeOut(100);
            $(this).delay(1000,function(){
                $(".village").stop().animate({left : '32%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".cloudbar").stop().animate({left : '67%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".trigger").stop().animate({marginLeft:'100px'}, {queue:false, duration:1000, easing: 'easeInQuad'});
                $(".village div").show();
                $(".cloudbar div").show();
				$buildingup = true;
            });

        }else{
            $(this).toggleClass('open')
            $(".village").stop().animate({left : '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
            $(".cloudbar").stop().animate({left:  '50%'}, {queue:false, duration:1000, easing: 'easeInQuad'});
            $(".trigger").stop().animate({marginLeft:'300px'}, {queue:false, duration:1000, easing: 'easeOutQuad'});
            $(".village div").hide(500);
            $(".cloudbar div").hide(500);
			$("#titlebar2").fadeIn(200);
            $buildingup = false;
        }

    });

    //Change background color of body
    $("a.change").click(function(){
        $('body').css('background-color','#FFF');
    });

});