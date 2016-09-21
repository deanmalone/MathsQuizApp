(function () {
    'use strict';

    angular
        .module('app')
        .controller('HighScoresController', HighScoresController);

    HighScoresController.$inject = ['QuizService', '$timeout'];

    function HighScoresController(QuizService, $timeout) {
        var vm = this;

        QuizService.getHighScores()
            .then(function (data) { vm.highScores = data; });

    }

})();