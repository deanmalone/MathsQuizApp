﻿(function () {
    'use strict';

    angular
        .module('app')
        .service('QuizService', QuizService);

    QuizService.$inject = ['$http', '$q', '$location', 'API_ENDPOINT'];

    function QuizService($http, $q, $location, API_ENDPOINT) {
        var service = this;

        console.log(API_ENDPOINT);

        // store scores in memory (for now)
        var scores = [
            { score: 17, name: 'Nicole', date: new Date("2016-08-11T13:32:00") },
            { score: 19, name: 'Jacqueline', date: new Date("2016-08-09T15:31:00") },
            { score: 18, name: 'Harry', date: new Date("2016-03-11T12:00:00") },
            { score: 19, name: 'Sarah', date: new Date("2016-08-09T15:31:01") },
            { score: 16, name: 'Amanda', date: new Date("2016-08-14T15:30:01") },
            { score: 15, name: 'Sean', date: new Date("2016-07-25T12:00:00") },
            { score: 14, name: 'Melissa', date: new Date("2016-06-25T12:00:00") },
            { score: 13, name: 'Sarah', date: new Date("2016-03-28T12:00:00") },
            { score: 12, name: 'Ann', date: new Date("2016-05-25T12:00:00") },
            { score: 11, name: 'Daniel', date: new Date("2016-06-30T12:00:00") }
        ];

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
                url: API_ENDPOINT,
                data: options,
            }).then(function onSuccess(response) {
                service.score = 0;
                service.questions = null;
                service.quizRunning = true;
                service.questions = response.data; // array of questions
                deferred.resolve();
            }, function onError(response) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        service.getHighScores = function () {

            return scores;
        }

        service.finishQuiz = function(score) {

            // always store the score (for now)
            var newScore = { score: score, name: service.currentUser, date: new Date() };
            scores.push(newScore);
            service.quizRunning = false;
        }

    };

})();