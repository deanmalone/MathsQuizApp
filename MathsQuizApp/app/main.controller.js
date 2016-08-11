(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['DataService'];

    function MainController(DataService) {
        var vm = this;


    }

})();