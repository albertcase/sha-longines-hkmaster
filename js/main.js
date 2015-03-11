





$(function(){
    $(".clicklink").click(function(){
         ga('send','event','auction', 'home' ,'点击进入');
    })


    $(".listinfo").click(function(){
        ga('send','event','auction', 'newslist' ,$(this).index());
    })
 
})






