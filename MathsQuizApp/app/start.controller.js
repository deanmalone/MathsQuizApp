﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('StartController', StartController);

    StartController.$inject = ['QuizService', '$timeout', '$state'];

    function StartController(QuizService, $timeout, $state) {
        var vm = this;

        vm.username = null;
        vm.level = 1;
        vm.numberOfQuestions = 10;

        function beginQuiz() {
            // create a new quiz
            QuizService.newQuiz({ NumberOfQuestions: vm.numberOfQuestions })
                .then(function () {
                    // Begin quiz
                    $state.go('quiz')
                });
        };

        vm.startQuiz = function()
        {
            // set the current user
            QuizService.currentUser = vm.username;

            vm.message = "Ready?";

            $timeout(beginQuiz, 2000);
        }

    }

})();