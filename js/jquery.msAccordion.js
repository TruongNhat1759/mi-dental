$(document).ready(function() {
	"use strict";
	$('.accordionWrapper .set .title').click(function() {
		$('.accordionWrapper .set.active').removeClass('active');
		$(this).parent().addClass('active');
		var iAttr = $(this).parent().attr('data-attr-index');
		$('.b03-list-des li').removeClass('active');
		$('.b03-list-des li:nth-child('+iAttr+')').addClass('active');
	});
});