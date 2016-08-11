(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController() {
        var vm = this;

        vm.appName = "Maths Quiz App";
        vm.appVersion = "1.0";
        vm.aboutMessage = "This app is ...";
        vm.dedication = "This is dedicated to my beautiful daughter Ruby. You rock girl!";
    }

})();