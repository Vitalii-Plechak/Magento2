// simple widget

define ([
    'jquery',
    'swiperCatalog',
    'fancybox',
    'accordion',
    'tabs'
], function ($, swiperCatalog, tabs, fancybox, accordion) {
    'use strict';

    $.widget( 'mytheme.catalog', {
        // вызов инлайновой функции из phtml
        options:{
            wrapper_fancybox: null,
            size_chart: null,
            size_chart_tab: null,
            wrapper_accordion: null,
            our_mission: null,
            wrapper_tab: null,
            product_accordion: null,
            related_slider: null,
        },
        _create: function() {
            let self = this;
            this.createSizeChart();
            this.createSizeChartTab();
            this.createProductAccordion();
            this.createTab();
            this.createSwiperRelated();
        },
        hideElement: function () {
            // var element = $(".our-mission").attr("display", "none");
            // if ($(".our-mission").attr("display", "none")) {
            //     $('#tab-label-detail.product').hide();
            // }
            // $('.our-mission[style="display:none"]').ready(function (){
            //     $('#tab-label-detail.product').hide();
            // });
        },
        createSizeChart: function () {
            $(this.element).fancybox()
        },
        createSizeChartTab: function () {
            $(this.element).tabs()
        },
        showThisBlock: function () {
            let content = $(this.options.content);
            modal(this.options.config, content);
            content.modal('openModal')
        },
        createProductAccordion: function () {
            $(this.element).accordion({
                collapsible: true,
            })
        },
        createTab: function () {
            $(this.element).tabs({
                duration: 700,
            });
        },
        createSwiperRelated: function () {
            let swiperCatalog = new Swiper('.related-slider', {
                slidesPerView: '3',
                spaceBetween: 20,
                freeMode: true,
                speed: 700,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    470: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }
                }
            });
        },
    });
    return $.mytheme.catalog;

});
