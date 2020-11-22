/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            ko_js : 'Magento_Theme/js/ko',
            swiper : 'Magento_Theme/js/libs/swiper-bundle-min',
            swiperCatalog : 'Magento_Catalog/js/libs/swiper-bundle-min',
            fancybox : 'Magento_Theme/js/libs/jquery.fancybox.min',
            modal : 'Magento_Ui/js/modal/modal',
            mainjs : 'Magento_Theme/js/main',
            catalogjs : 'Magento_Catalog/js/catalog',
        }
    },
    shim: {
        swiper: {
            deps: ['jquery']
        }
    }
};
