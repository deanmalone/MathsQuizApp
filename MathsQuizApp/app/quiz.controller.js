(function () {
    'use strict';

    angular
        .module('app')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['DataService', '$timeout', '$state'];

    function QuizController(DataService, $timeout, $state) {
        var vm = this;

        var questions = DataService.getQuestions();
        var questionIndex = 0;

        vm.currentQuestion = questions[questionIndex];
        vm.quizFinished = false;

        function nextQuestion () {

            if (questionIndex >= questions.length - 1) {
                vm.quizFinished = true;
                $state.go('highscores');
            }
            else {
                questionIndex++;
                vm.currentQuestion = questions[questionIndex];
            }
        };

        vm.submitAnswer = function () {

            if (!vm.currentQuestion.result) {

                if (vm.currentQuestion.response == vm.currentQuestion.answer) {
                    vm.currentQuestion.result = 1;
                    vm.currentQuestion.message = "Well done!";
                } else {
                    vm.currentQuestion.result = 0;
                    vm.currentQuestion.message = "The correct answer is " + vm.currentQuestion.answer;
                }

                $timeout(nextQuestion, 2000);
            }

        }


    }

})();