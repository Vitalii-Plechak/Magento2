// simple widget

define ([
    'uiComponent',
    'jquery',
    'ko'
], function (Component, $, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            inputVal: 'default value',
            isVisible: true,
            inputValHw: '',
            isSelected: 'true',

        },

        initialize: function () {
            this._super();
        },


        initObservable: function () {
            this._super().observe(['inputVal', 'isVisible', 'inputValHw', 'isSelected']);
            // this.isVisible.subscribe(function (val){
            //     console.log(val);
            // });
            this.inputValHw.subscribe(function (inputValHw){
               console.log(inputValHw)
            });
            this.isSelected.subscribe(function (isSelected){
                if (!isSelected){
                    alert('lostFocus')
                }
            });

            return this;
        },



        clickButton: function () {
            this.isVisible(!this.isVisible());
        }
    });


});
