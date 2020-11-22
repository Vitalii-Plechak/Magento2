// simple widget

define ([
    'jquery',
    'swiper',
    // 'modal',
    'fancybox',
    // 'accordion',
    // 'tabs'
], function ($, Swiper, modal) {
    'use strict';

    $.widget( 'mytheme.fancybox', {
        // вызов инлайновой функции из phtml
        options:{
            wrapper_fancybox: null,
            wrapper_accordion: null,
            wrapper_tab: null,
            product_accordion: null,
            our_mission: null,
            triggerClass: '.click-second',
            content: '.modal-second',
            config : {
                type: 'popup',
                title: 'Review title',
                responsive: 'true',
                modalClass: 'review_modal_list',
                buttons: []
            }
        },
        _create: function() {
            let self = this;
            this.createFancybox();
            this.createSwiper();
            // this.createAccordion();
            // this.createProductAccordion();
            // this.hideElement();
            // $('body').on('click', this.options.triggerClass, function () {
            //     self.showThisBlock()
            // });
            // this.createTab();
        },
        createSwiper: function () {
            let swiper = new Swiper('.products-slider__inner', {
                slidesPerView: '5',
                spaceBetween: 20,
                freeMode: true,
                speed: 700,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 4000,
                },
                pagination: {
                    el: '.products-slider__pagination',
                    clickable: true,
                },

                breakpoints: {
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    470: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }
                }
            });
        },
        createFancybox: function () {
            $(this.element).fancybox({
                caption : function( instance, item ) {
                    return $(this).parent().find('.card-text').html();
                }
            })
        },
        // createAccordion: function () {
        //     $(this.element).accordion()
        // },
        // createProductAccordion: function () {
        //     $(this.element).accordion({
        //         collapsible: true,
        //     })
        // },
        // showThisBlock: function () {
        //     let content = $(this.options.content);
        //     modal(this.options.config, content);
        //     content.modal('openModal')
        // },
        // createTab: function () {
        //     $(this.element).tabs({
        //         duration: 700,
        //     });
        // }
    });

    return $.mytheme.fancybox;
});
