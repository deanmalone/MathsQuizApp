(function () {
    'use strict';

    angular
        .module('app')
        .service('DataService', DataService );

    DataService.$inject = ['$http', '$q'];

    function DataService($http, $q) {
        var service = this;

        service.getQuestions = function () {
            var questions = [
                { questionNo: 1, operand1: 1, operand2: 1, operator: '+', answer: 2 },
                { questionNo: 2, operand1: 5, operand2: 2, operator: '+', answer: 7 },
                { questionNo: 3, operand1: 3, operand2: 5, operator: '+', answer: 8 },
                { questionNo: 4, operand1: 8, operand2: 3, operator: '+', answer: 11 },
                { questionNo: 5, operand1: 7, operand2: 5, operator: '+', answer: 12 },
                { questionNo: 6, operand1: 2, operand2: 7, operator: '+', answer: 9 },
                { questionNo: 7, operand1: 9, operand2: 4, operator: '+', answer: 13 },
                { questionNo: 8, operand1: 6, operand2: 5, operator: '+', answer: 11 },
                { questionNo: 9, operand1: 5, operand2: 4, operator: '+', answer: 9 },
                { questionNo: 10, operand1: 4, operand2: 14, operator: '+', answer: 18 }
            ];
            return questions;
        }

        service.getHighScores = function () {
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
            return scores;
        }
    };

})();