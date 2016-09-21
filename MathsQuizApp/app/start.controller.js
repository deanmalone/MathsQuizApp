(function () {
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

        vm.levelOptions = [ 1, 2, 3, 4, 5];    
        vm.questionOptions = [5, 10, 15, 20, 25];

        function beginQuiz() {
            // create a new quiz
            QuizService.newQuiz({ NumberOfQuestions: vm.numberOfQuestions, Level: vm.level })
                .then(function () {
                    // Begin quiz
                    $state.go('quiz')
                });
        };

        vm.startQuiz = function()
        {
            // set the current user
            QuizService.currentUser = vm.username;

            vm.message = "Are you ready?";

            $timeout(beginQuiz, 1500);
        }

    }

})();