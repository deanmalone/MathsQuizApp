(function () {
    'use strict';

    angular
        .module('app')
        .service('QuizService', QuizService);

    QuizService.$inject = ['$http', '$q', '$location', 'API_ENDPOINT'];

    function QuizService($http, $q, $location, API_ENDPOINT) {
        var service = this;

        console.log(API_ENDPOINT);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        service.quizRunning = false;
        service.currentUser = null;
        service.questions = null;
        service.score = 0;

        // generate new quiz
        service.newQuiz = function(options) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: API_ENDPOINT + '/quiz',
                data: options,
            }).then(function onSuccess(response) {
                service.score = 0;
                service.questions = null;
                service.quizRunning = true;
                service.questions = response.data; // array of questions
                deferred.resolve();
            }, function onError(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        service.getHighScores = function () {

            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: API_ENDPOINT + '/scores',
            }).then(function onSuccess(response) {
                deferred.resolve(response.data);
            }, function onError(response) {
                deferred.reject(response);
            });

            return deferred.promise;

        }

        service.finishQuiz = function(score) {

            var newScore = { score: score, name: service.currentUser, date: new Date() };
            var deferred = $q.defer();
           
            $http({
                method: 'POST',
                url: API_ENDPOINT + '/scores',
                data: newScore,
            }).then(function onSuccess(response) {
                service.quizRunning = false;
                deferred.resolve();
            }, function onError(response) {
                service.quizRunning = false;
                deferred.reject(response);
            });

            return deferred.promise;
        }

    };

})();