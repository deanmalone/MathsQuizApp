(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['QuizService'];

    function MainController(QuizService) {
        var vm = this;


    }

})();