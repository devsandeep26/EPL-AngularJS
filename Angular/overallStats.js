myApp.controller("statsController", ['$http', '$location', '$routeParams', function ($http, $location, $routeParams) {
    //creating a context 
    var main = this;
    //route param made for team code 
    this.code1 = $routeParams.code1;
    //initial count on matches played on 15-16
    var matchesPlayedOn1516 = 0;
    ////initial count on matches played on 16-17
    var matchesPlayedOn1617 = 0;
    ////initial count on goals scored on 15-16
    var scoredOn1516 = 0;
    //initial count on matches played on 16-17
    var scoredOn1617 = 0;
    //initial count on matches won on 15-16
    var winsOn1516 = 0;
    //initial count on matches won on 16-17
    var winsOn1617 = 0;

    var lossOn1516 = 0;
    var lossOn1617 = 0;
    var drawsOn1516 = 0;
    var drawsOn1617 = 0;
    this.rounds = [];

    this.goBack = function () {
        $location.path('/teamView');
    }

    //url request for football data
    this.baseUrl15 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    this.baseUrl16 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

    /*======================================================
    function for counting the match stats  overall matches
                played on 15-16 
    ======================================================*/


    this.matchesPlayedOn1516 = function (data) {
        main.rounds = data.rounds;

        for (var i in main.rounds) {
            for (var j in main.rounds[i].matches) {
                /*==================================
                  conditions for getting count on 
                    stats for 2015-16 match data 
                (if the team name is present on team1)
               ====================================*/
                if (main.rounds[i].matches[j].team1.code === main.code1) {


                    matchesPlayedOn1516++;
                    scoredOn1516 += main.rounds[i].matches[j].score1;
                    main.nameOfTeam1 = main.rounds[i].matches[j].team1.name;
                    if (main.rounds[i].matches[j].score1 > main.rounds[i].matches[j].score2) {
                        winsOn1516++;
                    } else if (main.rounds[i].matches[j].score1 < main.rounds[i].matches[j].score2) {
                        lossOn1516++;
                    } else if (main.rounds[i].matches[j].score1 === main.rounds[i].matches[j].score2) {
                        drawsOn1516++;
                    }
                }

                /*==================================
                  conditions for getting count on 
                    stats for 2015-16 match data 
                    ( if the team name is present on team 2)
               ====================================*/
                else if (main.rounds[i].matches[j].team2.code === main.code1) {
                    matchesPlayedOn1516++;
                    scoredOn1516 += main.rounds[i].matches[j].score2;
                    if (main.rounds[i].matches[j].score1 > main.rounds[i].matches[j].score2) {
                        winsOn1516++;
                    } else if (main.rounds[i].matches[j].score1 < main.rounds[i].matches[j].score2) {
                        lossOn1516++;
                    } else if (main.rounds[i].matches[j].score1 === main.rounds[i].matches[j].score2) {
                        drawsOn1516++;
                    }
                }
                main.matches = matchesPlayedOn1516;
                main.scoredOn1516 = scoredOn1516;
                main.winsOn1516 = winsOn1516;
                main.lossOn1516 = lossOn1516;
                main.drawsOn1516 = drawsOn1516;
            }
        }

    };
    /*=============================================
    function for counting the match stats  overall matches
                played on 16-17 
    ===============================================*/
    this.matchesPlayedOn1617 = function (data) {
        main.rounds = data.rounds;
        for (var i in main.rounds) {
            for (var j in main.rounds[i].matches) {
                /*==================================
                  conditions for getting count on 
                    stats for 2015-16 match data 
                (if the team name is present on team1)
               ====================================*/
                if (main.rounds[i].matches[j].team1.code === main.code1) {
                    matchesPlayedOn1617++;
                    scoredOn1617 += main.rounds[i].matches[j].score1;
                    main.nameOfTeam2 = main.rounds[i].matches[j].team1.name;
                    if (main.rounds[i].matches[j].score1 > main.rounds[i].matches[j].score2) {
                        winsOn1617++;
                    } else if (main.rounds[i].matches[j].score1 < main.rounds[i].matches[j].score2) {
                        lossOn1617++;
                    } else if (main.rounds[i].matches[j].score1 === main.rounds[i].matches[j].score2) {
                        drawsOn1617++;
                    }
                }

                /*==================================
                  conditions for getting count on 
                    stats for 2015-16 match data 
                    ( if the team name is present on team 2)
               ====================================*/
                else if (main.rounds[i].matches[j].team2.code === main.code1) {
                    main.nameOfTeam2 = main.rounds[i].matches[j].team2.name;
                    matchesPlayedOn1617++;
                    scoredOn1617 += main.rounds[i].matches[j].score2;
                    if (main.rounds[i].matches[j].score1 > main.rounds[i].matches[j].score2) {
                        winsOn1617++;
                    } else if (main.rounds[i].matches[j].score1 < main.rounds[i].matches[j].score2) {
                        lossOn1617++;
                    } else if (main.rounds[i].matches[j].score1 === main.rounds[i].matches[j].score2) {
                        drawsOn1617++;
                    }
                }
                main.matches1 = matchesPlayedOn1617;
                main.scoredOn1617 = scoredOn1617;
                main.winsOn1617 = winsOn1617;
                main.lossOn1617 = lossOn1617;
                main.drawsOn1617 = drawsOn1617;


            }
        }

    };
    this.dataForTeam15 = function () {
        $http({
            method: 'GET',
            url: main.baseUrl15
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data.rounds)

            main.matchesPlayedOn1516(response.data);




        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });





    }

    this.dataForTeam15();
    this.dataForTeam16 = function () {
        $http({
            method: 'GET',
            url: main.baseUrl16
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available


            console.log(response.data.rounds)
            main.matchesPlayedOn1617(response.data)
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);


        });





    }
    this.dataForTeam16();

}]);