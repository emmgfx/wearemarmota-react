"use strict";

const Headroom = require('./headroom.min.js');
const t = require('./t.min.js');
const anime = require('animejs');

var header = document.querySelector('header');
var headroom  = new Headroom(header);
headroom.offset = 58;
headroom.init();

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

    $('.claim span.type').t({
        blink:300,
        blink_perm: true,
        speed_vary:false,
        caret:'<span className="claim-caret">|</span>',
        repeat: true
    });

    $("form#contact").on("submit", function(){

        var form = $(this);
        var btSubmit = form.find('button[type=submit]');

        if($('#grecaptcha').is(':empty')){
            grecaptcha.render('grecaptcha', {
                'sitekey': '6Ld35DAUAAAAAJspbXcSKwN5B3X3n10xI1ZlKFrb',
                'size': 'invisible',
                'badge': 'inline',
                'callback': function(){
                    $.ajax({
                        url: 'contact-send.php',
                        type: 'post',
                        data: form.serialize(),
                        dataType: 'json',
                        success: function(response){
                            if(response.success){
                                alert('Mensaje enviado. Gracias\nTe responderemos lo antes posible.');
                            }else{
                                alert('Ha ocurrido un error al enviar tu mensaje.\nPor favor intentalo más tarde o a través de redes sociales');
                            }
                        },
                        error: function(){},
                        complete: function(){}
                    });
                }
            });
        }else{
            grecaptcha.reset();
        }

        grecaptcha.execute();

        return false;
    });

});
