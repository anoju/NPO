/* jQuery easing 1.3 */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});


$(function(){
	topBtn();
	headUi();
	tapMotion();
	
	$(window).on('scroll', scrollItem);
	$(window).trigger('scroll');
});


/* TOP 버튼 */
function topBtn() {
	var settings = {
			button	: '#toTop',
			text	: '컨텐츠 상단으로 이동',
			min		: 100,
			fadeIn	: 400,
			fadeOut	: 400,
			scrollSpeed : 800,
			easingType  : 'easeInOutExpo'
		}
	$('body').append('<a href="#" id="' + settings.button.substring(1) + '" title="' + settings.text + '"><i class="fa fa-arrow-up" aria-hidden="true"></i><span class="blind">' + settings.text + '</span></a>');
	$( settings.button ).on('click', function( e ){
		$('html, body').animate({ scrollTop : 0 }, settings.scrollSpeed, settings.easingType );
		e.preventDefault();
	})
	.on('mouseenter', function() {
		$( settings.button ).addClass('hover');
	})
	.on('mouseleave', function() {
		$( settings.button ).removeClass('hover');
	});

	$(window).scroll(function() {
		var position = $(window).scrollTop();
		if ( position > settings.min ) { $( settings.button ).fadeIn( settings.fadeIn );  }
		else { $( settings.button ).fadeOut( settings.fadeOut );  }
	});
}


var subSwiper;
function headUi(){
	var $wrap = $('.gnb_wrap');
		
	$(window).on('scroll resize',function(){
		var $wrapTop = $wrap.offset().top,
			$sclTop = $(window).scrollTop();			
		if($wrapTop < $sclTop){
			$wrap.addClass('fixed');
		}else{
			$wrap.removeClass('fixed');
		}
	})
}

//scroll-animation
function scrollItem(){
	var $elements = $( '*[data-animation]' );
	    offset = $(window).scrollTop() + $(window).height();
	
	if ($elements.size() == 0) {
		$(window).off('scroll', scrollItem);
	}
	
	$elements.each(function(i) {
		var $el = $(this),
			$animationClass = $el.data('animation'),
			$delay = $el.data('delay'),
			$duration = $el.data('duration'); 
		
		if(!$el.hasClass('animated')){
			$el.data('top',$el.offset().top);
			
			if($delay>0){
				$el.css({
					'-webkit-animation-delay':$delay+'ms',
					'animation-delay':$delay+'ms'
				})
			}
			if($duration>0){
				$el.css({
					'-webkit-animation-duration':$duration+'ms',
					'animation-duration':$duration+'ms'
				})
			}

			$el.addClass( $animationClass +' animated wait-animation');
		}
		$(window).resize(function(){
			$el.removeClass($animationClass).data('top',$el.offset().top).delay(10).queue(function(){
				$el.addClass($animationClass).dequeue();
			});
		})
		//console.log($el.data('top'))
		if (($el.data('top') + ($el.height()/4)) < offset) {
			$el.removeClass('wait-animation');
		}
	});
}

function tapMotion(){	
	$('.tabMotion a').click(function() {
		var href = $(this).attr('href');		
		$(href).show().siblings('.tab_cont').hide();
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
    });
	if($('.tabMotion').size() > 0){
		$('.tabMotion').each(function() {
			$(this).children('li').eq(0).children('a').trigger('click');	
		}); 		
	}
}