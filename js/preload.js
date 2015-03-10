function LoadFn ( arr , fn , fn2){
		var loader = new PxLoader();
		for( var i = 0 ; i < arr.length; i ++)
		{
			loader.addImage(arr[i]);
		};
		
		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				if(fn2) fn2(percent)
		});	
		
		
		loader.addCompletionListener( function(){
			if(fn) fn();	
		});
		loader.start();	
}



var LoadingImg = [];

$('img').each( function (){
	if(!$(this).attr('src')) return;
	LoadingImg.push($(this).attr('src'));		
});




LoadingImg.push('images/list-1.jpg');
LoadingImg.push('images/list-2.jpg');
LoadingImg.push('images/list-3.jpg');
LoadingImg.push('images/list-4.jpg');
LoadingImg.push('images/list-5.jpg');
LoadingImg.push('images/list-6.jpg');





LoadFn(LoadingImg , function (){
	setTimeout( function (){
		$('#loading').fadeOut();
	} , 200)
} , function ( p ){
	$('.loading-mask').css({"width":p+"%"});
	//$('.loading-mask').html('<br />' + p + '%')
});

