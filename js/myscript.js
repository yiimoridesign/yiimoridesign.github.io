$(function () {
	"use strict";

	var topoffset = 50; //varible for menu height
	var slideqty = $('#portfolioPage .item').length;
	var wheight = $(window).height(); //get the height of the window
	
	$('.fullheight').css('height',wheight); //set to window 
	//activate scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});
	//add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if (hash !== '#featured') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}

	//add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
		var hash = $(this).find('li.active a').attr('href');
		if (hash !== '#featured') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});
	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=\\#]:not([href=\\#])').click(function () {
		if (location.pathname.replace(/^\//, '') ===
			this.pathname.replace(/^\//, '') &&
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - topoffset + 2
				}, 500);
				return false;
			} //target.length
		} //click function
	}); //smooth scrolling

	//automatically generate carousel indicaors 
	for (var i=0; i < slideqty; i++){
		var insertText = '<li data-target="#portfolioPage" data-slide-to="' + i + '"></li>';
		$('#portfolioPage ol').append(insertText);
	}
	
	$('.carousel').carousel({
		interval: false
	});


})
