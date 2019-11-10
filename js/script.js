$(document).on('ready', function(){

	"use strict";
	
	/**** FILTER PORTFOLIO ****/
	// Instantiate MixItUp (plugin for filter portfolio : https://mixitup.kunkalabs.com)
	$('.portfolio-section #Container').mixItUp();

	// Change active li filter
	$('.ul-filter li').on('click', function(){
		$('.ul-filter li').removeClass('active');
		$(this).addClass('active');
	});

	// Magnific Popup
	var groups = {};
	$('.portfolio-section .item .work-popup').each(function() {
	  var id = parseInt($(this).attr('data-group'), 10);
	  
	  if(!groups[id]) {
	    groups[id] = [];
	  } 
	  
	  groups[id].push( this );
	});
	
	$.each(groups, function() {
	  
	  $(this).magnificPopup({
	      type: 'image',
	      closeOnContentClick: true,
	      closeBtnInside: false,
	      gallery: { enabled:true }
	  })
	  
	});


	/**** SCR0LL FUNCTION ****/
	$(document).on('scroll', function(){

		// Make navbar fixed on scroll
		if( $(window).scrollTop() > $('.home-section').height() )
		{
			$('.navbar').css({
				'position':'fixed',
				'top':'0px'
			});
		}
		else
		{
			$('.navbar').css({
				'position':'relative'
			});
		}

		// Change navbar active on scroll
		$('section').each(function(i){
			if($(this).position().top <= $(window).scrollTop() + 200){
				$('.home-section .navbar a.active').removeClass('active');
				$('.home-section .navbar a').eq(i).addClass('active');
			}
		});

	});

	// Button home scroll down
	$('.scroll-down').on('click', function(){
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top - 20
		},1500);
	});

	// Scroll with navbar
	$('.home-section .navbar a').on('click', function(e){
		e.preventDefault();
		// change active element navbar
		$('.home-section .navbar a').removeClass('active');
		$(this).addClass('active');
		// make an animation on scroll
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top - 20
		},1500);
	});

	// Experience scroll (plugin for nice scrollbars : http://nicescroll.areaaperta.com)
	$('.single-experience .text').niceScroll({
		cursorcolor: '#2a2c30',
		cursorwidth: '7px',
		cursorborderradius: '0px',
		scrollspeed: '100',
		autohidemode: 'false'
	});

	// Education scroll
	$('.single-education .text').niceScroll({
		cursorcolor: '#2a2c30',
		cursorwidth: '7px',
		cursorborderradius: '0px',
		scrollspeed: '100',
		autohidemode: 'false'
	});


	/**** EXPERIENCE SECTION ****/
	$('.single-experience .open').on('click', function(){
		var filter = $(this).attr('data-filter');
		var displayValue = $('.single-experience .second-line').children(filter).css('display');
		var textScroll = $(filter).find('.text');
		if( displayValue == 'none' )
		{
		// Open single experience
			// close all lines detail and hide scrollbar
			$('.single-experience .second-line .detail').css('display','none');
			$('.single-experience .text').getNiceScroll().hide();
			// open second line and show scrollbar in this line
			$('.single-experience .second-line').children(filter).fadeIn(500);
			$(textScroll).getNiceScroll().resize();
			$(textScroll).getNiceScroll().show();
			// change all icon minus to plus
			$('.single-experience .open i').attr('class','fa fa-plus');
			// change icon plus to minus
			$(this).children('i').attr('class','fa fa-minus');
			// remove class active of all button open
			$('.single-experience .open').removeClass('active');
			// add class active in button open
			$(this).addClass('active');
		}
		else {
		// Close single experience
			// close second line and hide scrollbar in this line
			$('.single-experience .second-line').children(filter).fadeOut(500);
			$(textScroll).getNiceScroll().hide();
			// change icon minus to plus
			$(this).children('i').attr('class','fa fa-plus');
			// remove class active in button open
			$(this).removeClass('active');
		}
	});


	/**** EDUCATION SECTION ****/
	$('.single-education .open').on('click', function(){
		var filter = $(this).attr('data-filter');
		var displayValue = $('.single-education .second-line').children(filter).css('display');
		var textScroll = $(filter).find('.text');
		if( displayValue == 'none' )
		{
		// Open single education
			// close all lines detail and hide scrollbar
			$('.single-education .second-line .detail').css('display','none');
			$('.single-education .text').getNiceScroll().hide();
			// open second line and show scrollbar in this line
			$('.single-education .second-line').children(filter).fadeIn(500);
			$(textScroll).getNiceScroll().resize();
			$(textScroll).getNiceScroll().show();
			// change all icon minus to plus
			$('.single-education .open i').attr('class','fa fa-plus');
			// change icon plus to minus
			$(this).children('i').attr('class','fa fa-minus');
			// remove class active of all button open
			$('.single-education .open').removeClass('active');
			// add class active in button open
			$(this).addClass('active');
		}
		else {
		// Close single education
			// close second line and hide scrollbar in this line
			$('.single-education .second-line').children(filter).fadeOut(500);
			$(textScroll).getNiceScroll().hide();
			// change icon minus to plus
			$(this).children('i').attr('class','fa fa-plus');
			// remove class active in button open
			$(this).removeClass('active');
		}
	});
	
});

/**** LOADER FUNCTION ****/
$(window).on('load', function() {
	$("body").css("overflow","auto");
	$(".loading-overlay, .loading-overlay").fadeOut(1000);
});