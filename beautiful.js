$(function(){
	var cw=document.documentElement.clientWidth;
	var ch=document.documentElement.clientHeight;
	var ones=$('.container .one');
    var img=$('.maskimg img');
    var left=$('.btn .left');
    var right=$('.btn .right');
    var off=$('.btn .off');
    var btn=$('.btn');
    var tanchu=$('.tanchu');
    var lw=tanchu.width();
    var lh=tanchu.height();
    var iw=$('.btnbox').width();
    var box=$('.box');
    box.css({
    	width:cw,
    	height:ch,
    	background:'red url(img/bg.jpg) repeat center',
    })
    var index=0;
    $('.btn *').hide();
    ones.on('click',function(){
    	// $('.btn *').show();
    	index=$(this).index();
    	animate(btn[0],{left:0,top:0,width:cw,height:ch},500,function(){
        		 $('.btn *').show();
        })
    	img.attr('src',$('.one img').eq(index).attr('src'));
    })
    btn.on('click','.tanchu',function(e){
    	var ev=e.target;
    	if(!($(ev).is('.noimg'))){
    		if(e.pageX<=lw/2){
    			index--;
    	        if(index==-1){index=ones.length}
    	        img.attr('src',$('.one img').eq(index).attr('src'));// $('.left').trigger('click')
    		}else{
    			index++;
    	   		if(index==ones.length){index=0}
    			img.attr('src',$('.one img').eq(index).attr('src'));
    			// $('.right').trigger('click');
    		}
    	}
    })
   
    left.on('click',function(){
    	index--;
    	if(index<0){index=ones.length}
    	img.attr('src',$('.one img').eq(index).attr('src'));	
    })
    right.on('click',function(){
    	index++;
    	if(index==ones.length){index=0}
    	img.attr('src',$('.one img').eq(index).attr('src'));
    })
    off.on('click',function(){
    	btn.css('display:none');
    	$('.btn *').hide();
    	animate(btn[0],{width:0,height:0},function(){
    		return false;
    	})
    })
	 $(document).on('dblclick','.btn',function(e){
       var el=e.target;
       if($(el).is('.btn')){
       	 btn.css("display:none");
       	 $('.btn *').hide();
       	 btn.animate({width:0,height:0})
       }
    })
	 $(document).on('mousedown mouseup',function(){
	 	 return false;
	 })
})