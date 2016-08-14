(function () {
    'use strict';

    angular
        .module('app')
        .controller('HighScoresController', HighScoresController);

    HighScoresController.$inject = ['QuizService', '$timeout'];

    function HighScoresController(QuizService, $timeout) {
        var vm = this;

        vm.highScores = QuizService.getHighScores();

    }

})();