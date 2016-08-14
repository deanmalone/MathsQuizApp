(function () {
    'use strict';

    angular
        .module('app')
        .constant('API_ENDPOINT', window.location.protocol + '//' + window.location.host + '/api/quiz')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state("main", { url: '/main', templateUrl: 'app/main.html', controller: 'MainController', controllerAs: 'vm' })
            .state("start", { url: '/start', templateUrl: 'app/start.html', controller: 'StartController', controllerAs: 'vm' })
            .state("quiz", { url: '/quiz', templateUrl: 'app/quiz.html', controller: 'QuizController', controllerAs: 'vm' })
            .state("results", { url: '/results', templateUrl: 'app/results.html', controller: 'ResultsController', controllerAs: 'vm' })
            .state("highscores", { url: '/highscores', templateUrl: 'app/highscores.html', controller: 'HighScoresController', controllerAs: 'vm' })

    }

})();