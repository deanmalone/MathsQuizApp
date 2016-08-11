(function () {
    'use strict';

    angular
        .module('app')
        .controller('HighScoresController', HighScoresController);

    HighScoresController.$inject = ['DataService', '$timeout'];

    function HighScoresController(DataService, $timeout) {
        var vm = this;

        vm.highScores = DataService.getHighScores();

    }

})();