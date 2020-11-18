/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    // paths: {
    //     'testjs': 'Magento_Theme/js/test',
    //     'test_2js': 'Magento_Theme/js/test_2',
    //     'mainjs': 'Magento_Theme/js/main',
    //     'slick': 'Magento_Theme/js/libs/slick-min',
    // },
    map: {
        '*': {
            testjs : 'Magento_Theme/js/test',
            test_2js : 'Magento_Theme/js/test_2',
            mainjs : 'Magento_Theme/js/main',
            ko_js : 'Magento_Theme/js/ko',
            slick : 'Magento_Theme/js/libs/slick-min',
            swiper : 'Magento_Theme/js/libs/swiper-bundle-min',
            fancybox : 'Magento_Theme/js/libs/jquery.fancybox.min',
            modal : 'Magento_Ui/js/modal/modal'
        }
    },
    shim: {
        swiper: {
            deps: ['jquery']
        }
    }
};
