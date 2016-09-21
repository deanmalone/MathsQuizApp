(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['QuizService', '$timeout', '$state'];

    function ResultsController(QuizService, $timeout, $state) {
        var vm = this;

        vm.questions = QuizService.questions;
        vm.score = QuizService.score;
     
    }

})();