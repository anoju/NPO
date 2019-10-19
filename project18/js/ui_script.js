$(function(){
	htmlIncludeUi();
	btnTop();
	headUi();
	etcUi();
	//gridUI();
	
	$(window).on('scroll', scrollItem);
	$(window).trigger('scroll');

	
});
var etcUi = function(){
	$('.ul_list .t_link').each(function(){
		var $txt = $(this).text();
		$(this).attr({'href':$txt,'target':'_blank'});
	});
	$('.toggle_list li>p>a').click(function(e){
		e.preventDefault();
		$(this).closest('li').toggleClass('on').siblings().removeClass('on').children('div').stop().slideUp();;
		$(this).parent().siblings().stop().slideToggle();
	});
};
var htmlIncludeUi = function(){
	var $elements = $.find('*[data-html-include]');
	$.each($elements, function(){
		var $src = $(this).data('html-include'),
			$gnbOn = parseInt($(this).data('gnb-on'));
		
		$(this).load($src,function(){
			$(this).children().unwrap();
			if($gnbOn != null){
				$('#gnb li').eq($gnbOn-1).addClass('active');
			}
		});
	});
};

/* TOP 버튼 */
var btnTop = function() {
	var settings = {
			button	: '#btnTop',
			text	: '컨텐츠 상단으로 이동',
			min		: 100,
			fadeIn	: 400,
			fadeOut	: 400,
			scrollSpeed : 800,
			easingType  : 'easeInOutExpo'
		};
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
};

/* head */
var headUi = function(){
	var $wrap = $('.gnb_wrap');
		
	/*$(window).on('scroll resize',function(){
		var $wrapTop = $wrap.offset().top,
			$sclTop = $(window).scrollTop();			
		if($wrapTop < $sclTop){
			$wrap.addClass('fixed');
		}else{
			$wrap.removeClass('fixed');
		}
	});*/

	$(document).on('click','.btn_gnb button',function(e){
		e.preventDefault();		
		if($('body').hasClass('gnb_open')){		//닫힘
			$('body').removeClass('gnb_open');	
		}else{									//열림
			$('body').addClass('gnb_open');	
		}
	});
	$(document).on('click','.gnb_wrap .bg',function(e){
		e.preventDefault();
		$('body').removeClass('gnb_open');
	});
};

//scroll-animation
var scrollItem = function(){
	var $elements = $.find('*[data-animation]'),
		$window = $(window);
		  
	$(window).on('scroll resize',function(){
		$elements = $.find('*[data-animation]');
		if($elements.length > 0){
			checkInView();
		}
  	});

  function checkInView() {
	var $winHeight = $window.height(),
		$scrollTop = $window.scrollTop(),
		$winBottom = ($scrollTop + $winHeight);

	$.each($elements, function() {
	  var $el = $(this),
		  $elHeight = $($el).outerHeight(),
		  $elTop = $($el).offset().top,
		  //$elCenter = $elTop + ($elHeight/2),
		  $elBottom = $elTop + $elHeight,
		  $animationClass = $el.data('animation'),
		  $delay = $el.data('delay'),
		  $duration = $el.data('duration'),
		  $gap = 200;


	  if(!$el.hasClass('animated') && $animationClass != 'on'){
		if($delay>0){
			$el.css({
				'-webkit-animation-delay':$delay+'ms',
				'animation-delay':$delay+'ms'
			});
		}
		if($duration>0){
			$el.css({
				'-webkit-animation-duration':$duration+'ms',
				'animation-duration':$duration+'ms'
			});
		}

		$el.addClass('animated');
	  }

	  //if (($elBottom >= $scrollTop) && ($elTop <= $winBottom)) {
	  if ($elTop >= $scrollTop && $elBottom <= $winBottom) {
		$el.addClass($animationClass);
		if($el.hasClass('used_car_rate')){
			usedCarRateUI();
		}
	  } else if($elBottom < ($scrollTop-$gap) || $elTop > ($winBottom + $gap)){
		$el.removeClass($animationClass);
		if($el.hasClass('used_car_rate')){
			usedCarRateIng = true;
		}
	  }
	});
  }
};

/* grid */
var gridUI = function(){
	var	msnry = $('.grid_list').masonry({
		itemSelector:'.grid-item',
		columnWidth:'.grid-sizer',
		percentPosition: true
	});

	$('.tag_menu a').each(function(){
		var $this = $(this),
			$thisTxt = $this.text(),
			$thisHref = $this.attr('href');

		$('.grid-item').each(function(){
			var $text = $(this).find('.tag_txt span').text();

			if($text.indexOf($thisTxt) != -1) {
				$(this).addClass($thisHref);
			}
		});
	});

	//tag
	$('.tag_menu a').click(function(e){
		e.preventDefault();
		var $href = $(this).attr('href');		
		
		//$('.grid-item').show();
		if($href == 'all'){			
			$('.grid_list').find('.grid-item').show();
			$(this).parent().addClass('on').siblings().removeClass('on');
		}else{
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
			}else{
				$(this).parent().addClass('on');
			}

			if($('.tag_menu .on').length > 0){
				$('.tag_menu li').first().removeClass('on');
				$('.grid_list').find('.grid-item').hide();
				$('.tag_menu .on').each(function(idx){
					var $onHref = $(this).find('a').attr('href');
					$('.grid_list').find('.'+$onHref).show();
				});
			}else{
				$('.grid_list').find('.grid-item').show();
				$('.tag_menu li').first().addClass('on');
			}
		}		
		msnry.masonry('layout');
	});

	//ui-btn
	$('.ui-btn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('open')){
			$(this).closest('.grid-item').addClass('on').siblings().removeClass('on');
		}else{
			$(this).closest('.grid-item').removeClass('on');
		}
	});

	//load
	$(window).load(function(){
		msnry.masonry('layout');
	});
};