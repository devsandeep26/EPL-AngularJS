myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/match-view", {
            templateUrl: "pages/match-view.html",
            controller: "myController",
            controllerAs: "epl"
        })
        .when("/match/:id1/:id2/:mydate", {
            templateUrl: "pages/matchDetail.html",
            controller: "matchDetails",
            controllerAs: "match"
        })
        .when('/teamView', {
            templateUrl: "pages/teamView.html",
            controller: "matchDetails",
            controllerAs: "match"
        })
        .when("/teamStats/:code1", {
            templateUrl: "pages/teamStats.html",
            controller: "statsController",
            controllerAs: "stats"
        })
        .otherwise({
            rediretTo: '/'
        });


}]);
/*====================================
       function for removing the %2f
======================================*/
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);