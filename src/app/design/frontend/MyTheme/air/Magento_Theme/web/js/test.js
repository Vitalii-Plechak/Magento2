// simple widget

define ([
    'jquery',
    'slick',
], function ($) {
    'use strict';

    $.widget( 'mytheme.testscript', {
        // вызов инлайновой функции из phtml
        options:{
            // wrapper_class: null,
            wrapper_slick: null,
            // event: 'click',
        },
        _create: function() {
            // обявление функции
            // this.bind();
            this.createSlider();
        },

        // создание своей функции
        bind: function () {
            $('body').on(this.options.event, function (){
                alert('Hello')
            })
            $(this.options.wrapper_class).on('click', function (){
                alert('Hello Options')
            })
        },

        createSlider: function () {
            $(this.element).slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
            })
        }
    });

    return $.mytheme.testscript;
});
