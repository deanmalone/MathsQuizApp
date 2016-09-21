(function () {
    'use strict';

    angular
        .module('app')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['QuizService', '$timeout', '$state'];

    function QuizController(QuizService, $timeout, $state) {
        var vm = this;

        var questionIndex = 0;

        if (!QuizService.quizRunning) {
            $state.go('start');
        }

        vm.currentQuestion = QuizService.questions[questionIndex];
        vm.quizFinished = false;
        vm.score = QuizService.score;

        function nextQuestion () {

            if (questionIndex >= QuizService.questions.length - 1) {
                endQuiz();

            }
            else {
                questionIndex++;
                vm.currentQuestion = QuizService.questions[questionIndex];
            }
        };

        function endQuiz() {
            vm.quizFinished = true;

            QuizService.finishQuiz(vm.score)
                .then(function () {
                    $state.go('results')
                });


        }

        vm.submitAnswer = function () {

            if (!vm.currentQuestion.result) {

                if (vm.currentQuestion.response == vm.currentQuestion.answer) {
                    QuizService.score = QuizService.score + 10;
                    vm.score = QuizService.score;
                    vm.currentQuestion.result = 1;
                    vm.currentQuestion.message = "Well done!";
                } else {
                    vm.currentQuestion.result = 0;
                    vm.currentQuestion.message = "The correct answer is " + vm.currentQuestion.answer;
                }

                $timeout(nextQuestion, 1500);
            }

        }


    }

})();