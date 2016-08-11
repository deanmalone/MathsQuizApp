(function () {
    'use strict';

    angular
        .module('app')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state("main", { url:'/main', templateUrl:'app/main.html', controller: 'MainController', controllerAs: 'vm'})
            .state("quiz", { url: '/quiz', templateUrl: 'app/quiz.html', controller: 'QuizController', controllerAs: 'vm' })
            .state("highscores", { url: '/highscores', templateUrl: 'app/highscores.html', controller: 'HighScoresController', controllerAs: 'vm' })

    }

})();