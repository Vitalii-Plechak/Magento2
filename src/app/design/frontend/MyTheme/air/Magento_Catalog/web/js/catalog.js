// simple widget

define ([
    'jquery',
    'swiperCatalog',
    'fancybox',
    'accordion',
    'tabs'
], function ($, swiperCatalog, fancybox, accordion) {
    'use strict';

    $.widget( 'mytheme.catalog', {
        options:{
            wrapper_fancybox: null,
            size_chart: null,
            size_chart_tab: null,
            product_accordion: null,
            related_slider: null,
            hide_empty_content: null,
        },
        _create: function() {
            let self = this;
            this.createSizeChart();
            this.createSizeChartTab();
            this.createProductAccordion();
            this.createSwiperRelated();
            this.hideEmptyContent();
        },

        createSwiperRelated: function () {
            let swiper = new swiperCatalog('.related-slider', {
                freeMode: true,
                speed: 700,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                    },
                    550: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    720: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }
            });
        },

        createSizeChart: function () {
            $(this.element).fancybox()
        },
        createSizeChartTab: function () {
            $(this.element).tabs()
        },
        createProductAccordion: function () {
            $(this.element).accordion({
                active: 1,
                collapsible: true,
            })
        },
        hideEmptyContent: function () {
            $(".detail-inner[style*='display: none']").ready(function (){
                $(".detail-inner").parent().addClass('hide')
                $("#tab-label-detail.product").addClass('hide')
            })
        },

    });
    return $.mytheme.catalog;

});
