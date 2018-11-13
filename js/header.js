$(function(){
	//导航点击事件
	$(".nav").on("click","a",function(e){
        var $a = $(this);
        alert(12312);
        if(!$a.is(".active")){
	        $a.parent().addClass("active")
			.siblings().removeClass("active");
	    }
        var w = $a.width();
        $(".nav>ul>.active:after").css("width",w);
        //计划B
            // var wm = $a.parent().prev().children().width();
            // $(".nav>span").css("width",w);
            // var i = $a.parent().prevAll().length;
            // var left = 0;
            // for(var j = 0; j <= i; j++){
            // 	left += (wm+100);	
            // }
            // $(".nav>span").css({left});	
    })
})