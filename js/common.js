// JavaScript Document
$(function() {
    'use strict';
  	var obj= {
	  	init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.Gnavi();
			this.commonJS();
			this.blog();
	  	},
	  	blog: function () {
	  		var arrElementBlog = $('.pager li');
	  		if (arrElementBlog.length / 10 > 1) {
	  			$('.pager').addClass('active');
	  			var dataCurrent = $('.pager li.active').attr('data-current'),
	  				dataCurrent=parseInt(dataCurrent),
	  				temp = parseInt(dataCurrent/10);
				if (dataCurrent < arrElementBlog.length) {
					$('.pager li').slice(temp*10,temp*10+10).addClass('show');
				}
	  		}
	  	},
	  	toTop: function(){
			$('#totop').hide();
			$(window).bind('load scroll', function() {
				  if($(this).scrollTop() > 100){
					  $('#totop').fadeIn();
				  }
				  else{
					  $('#totop').fadeOut();
				  }
			});
			$('#totop').click(function(){
				$('body, html').animate({ scrollTop: 0 }, 500);
				return false;
			});
	  	},
	  	smoothScroll : function(){
			$('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({ scrollTop: p.top - 60 }, 500);
                    } else {
                        $('html,body').animate({ scrollTop: p.top - 80 }, 500);
                    }
                }
                return false;
            });
		},
	  	anchorScroll : function(){
		  	$(window).bind("load", function() {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                	if (hash1 == '#access_video') {
                		$("#access_video > iframe")[0].src += "?autoplay=1";
                	}
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({ scrollTop: top01 - 60 }, 500);
                    } else {
                        $root.animate({ scrollTop: top01 - 80 }, 500);
                    }
                }
            });		
		},
		Gnavi: function () {
			$(window).bind('load', function () {
				$('.menu-icon').click(function () {
					var _this = $(this);
					if (_this.hasClass('flag')) {
						if ($(_this).hasClass('active')) {
						  $('.menu-icon').removeClass('active');
						  $('#gnavi').removeClass('slide');
						  $('#header').css({'background':''});
						  $('.submenu').stop().slideUp();
						  $('.over').removeClass('active');
						} else {
						  $(_this).addClass('active');
						  $('#gnavi').addClass('slide');
						  $('#header').css({'background':'#fff'});
						}
					} else {
						if ($('#gnavi').hasClass('active')) {
							$('#gnavi').removeClass('active');
							$('.menu-icon').removeClass('active');
							$('#header, #mainvisual, .mainvisual, #main, #footer').removeClass('blur-content');
						} else {
							if ($(_this).hasClass('active')) {
							  $('.menu-icon').removeClass('active');
							  $('#gnavi').removeClass('active');
							} else {
							  $(_this).addClass('active');
							  $('#gnavi').addClass('active');
							}
						}
					}
				});
				$('.over').click(function() {
	              	if ($(this).hasClass('flag')) {
	                  	if ($(this).hasClass('active')) {
	                      $('.submenu').stop().slideUp();
	                      $(this).removeClass('active');
	                  	} else {
	                      $('.over').removeClass('active');
	                      $('.submenu').stop().slideUp();
	                      $(this).addClass('active');
	                      $(this).find('.submenu').stop().slideToggle();
	                  	}
	              	}
	          	});
				$('#gnavi').mouseenter(function () {
					if (!$('.menu-icon').hasClass('flag')) {
						$(this).addClass('active');
						$('.menu-icon').addClass('active');
						$('#header, #mainvisual, .mainvisual, #main, #footer').addClass('blur-content');
					}
				});
				$('#gnavi').mouseleave(function () {
					if (!$('.menu-icon').hasClass('flag')) {
						$(this).removeClass('active');
						$('.menu-icon').removeClass('active');
						$('#header, #mainvisual, .mainvisual, #main, #footer').removeClass('blur-content');
					}
				});
			});
			$(window).bind('load resize', function () {
				var vW = $(window).width();
				$('.over').removeClass('active');
				$('#gnavi').removeClass('slide');
				if (vW > 640) {
					$('.menu-icon').removeClass('flag');
					$('.over').removeClass('flag');
					$('#header').removeAttr('style');
					$('#gnavi').removeAttr('style');
				} else {
					$('.submenu').stop().slideUp();
					// $('#gnavi').removeClass('active');
					$('.menu-icon').addClass('flag');
					$('.over').addClass('flag');
				}
				$('.menu-icon').removeClass('active');
			});
			$(window).bind('load resize scroll', function() {
			  	var vW = $(window).width(),
			  		vS = $(window).scrollTop(),
			  		vH = $('#header').outerHeight();
		  		if (vS >= vH) {
		  			$('.h-right').addClass('fixed');
		  		} else {
		  			$('.h-right').removeClass('fixed');
		  		}
			  	if (vW > 640) {
			  		$('#header').removeClass('fixed');
			  		$('.footer-fix').removeAttr('style');
			  		$('#gnavi .lable').fadeIn();
			  	} else {
			  		if (vS > 100) {
			  			$('.footer-fix').fadeIn();
			  		} else {
			  			$('.footer-fix').fadeOut()
			  		}
			  		$('#gnavi .lable').removeAttr('style');
			  		if (vS >= vH) {
			  			$('#header').addClass('fixed');
			  			$('#mainvisual, .mainvisual').css('margin-top', vH);
			  		} else {
			  			$('#header').removeClass('fixed');
			  			$('#mainvisual, .mainvisual').css('margin-top', '');
			  		}
			  	}

			});
		},
		commonJS : function () {
			if($(".gp-fancybox").length > 0){
			    $(".gp-fancybox").fancybox({
			        'transitionIn'  : 'elastic',
			        'transitionOut' : 'elastic',
			        'speedIn'   : 600, 
			        'speedOut'    : 200,
			        helpers: {
			            overlay: {
			              locked: false
			            }
		          	}
		      	});
			}
		},
  };
  obj.init();
});


