$(function(){
    'use strict';

    var time = 1500; //动画时间

    $('#full-pages').fullpage({
        verticalCentered: false,
        'navigation': true,

        afterLoad: function(anchorLink, index){
            var $section = $('.section' + index);

            $section.find('.an-fade-in').delay(500).fadeIn(time);

            $section.find('.an-fly-l-r, .an-fly-r-l').animate({
                left: '50%'
            }, time, 'easeOutExpo');

            $section.find('.an-fly-t-b, .an-fly-b-t').animate({
                top: '50%'
            }, time, 'easeOutExpo');

            $section.find('.an-fade-in-list').children().each(function () {
                var delay = $(this).index() * 150 + 400;
                $(this).delay(delay).fadeIn(time);
            });
        },

        onLeave: function(link, index){
            var $section = $('.section' + index);

            $section.find('.an-fly-l-r').css('left', '30%');
            $section.find('.an-fly-r-l').css('left', '70%');
            $section.find('.an-fly-t-b').css('top', '-30%');
            $section.find('.an-fly-b-t').css('top', '130%');
            $section.find('.an-fade-in').hide();
            $section.find('.an-fade-in-list').children().hide();
        }
    });
});
