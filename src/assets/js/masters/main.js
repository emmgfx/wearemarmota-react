"use strict";

const anime = require('animejs');

$(function() {

    var animation = {
        elasticity: 500,
        targets: ['#drawing g > g > circle'],
        duration: 2000,
        delay: function(el, i) { return i * 500 },
        translateY: function(el, i){ return Math.random() * (10 - -10) + -10; },
        translateX: function(el, i){ return Math.random() * (10 - -10) + -10; },
        loop: true,
        direction: 'alternate'
    };

    var animationCircles = Object.assign({}, animation);
    animationCircles.targets = ['#drawing g > g > circle'];
    anime(animationCircles);

    var animationPaths = Object.assign({}, animation);
    animationPaths.targets = ['#drawing g > g > path'];
    anime(animationPaths);

    $(window).on('scroll', function(){
        $('.navbar-collapse').collapse('hide');
    });

});
