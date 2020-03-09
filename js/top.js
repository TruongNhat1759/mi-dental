$(function() {
	'use strict';
	var obj = {
		init: function() {
			this.topJS();
			this.Overnotes();
		},
		topJS: function () {
			$(window).bind('load', function () {
				new WOW().init();
				$('.idx-slide').slick({
					autoplay: true,
					autoplaySpeed: 6000,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	infinite: true,
				 	fade: true,
				});
				$('.b03-list-feature').slick({
					autoplay: false,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	infinite: true,
				 	draggable: false,
				});
				$('.b03-list-lable').slick({
					autoplaySpeed: 3000,
					autoplay: true,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	asNavFor: '.b03-list-feature, .b03-list-des',
				 	infinite: true,
				 	variableWidth: true,
				 	draggable: false,
				});
				$('.b03-list-des').slick({
					autoplay: false,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	infinite: true,
				 	fade: true,
				 	draggable: false,
				});
				$('.b06-slick-for').slick({
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
				 	slidesToShow: 1,
				 	slidesToScroll: 1,
				 	centerMode: true,
				 	variableWidth: true,
				 	infinite: true,
				 	asNavFor: '.b06-slick-nav ul',
				});
				$('.b06-slick-nav ul').slick({
					autoplay: false,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
					slidesToShow: 6,
					slidesToScroll: 6,
					asNavFor: '.b06-slick-for',
					focusOnSelect: true,
					infinite: false,
				});
			});
			function mobileOnlySlider() {
                $('.b04-list ul').slick({
                    autoplay: true,
                    dots: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 6000,
                    centerMode: true,
                    variableWidth: true
                });
            }
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW < 641) {
                    if (!$('.b04-list ul').hasClass('slick-initialized')) {
                        mobileOnlySlider();
                    }
                } else {
                    if ($('.b04-list ul').hasClass('slick-initialized')) {
                        $('.b04-list ul').slick('unslick');
                    }
                }
            });
		},
		Overnotes: function () {
			$.ajax({
				'url' : 'blog/_custom/?cat=4',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var $li_news = $('<li><span>' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span><a href="blog/'+val.url+'">'+tlt+'</a></li>');
						$li_news.appendTo('.idx-news ul');
					});
				}
			});
			$.ajax({
				'url' : 'blog/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var $li_blog = $('<li><span class="b09-date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span><a href="blog/'+val.url+'">'+tlt+'</a></li>');
						$li_blog.appendTo('.b09-blog');
					});
				}
			});
		},
	};
	obj.init();
});