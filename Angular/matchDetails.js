myApp.controller("matchDetails", ['$http', '$location', '$routeParams', function ($http, $location, $routeParams) {

    var main = this;
    this.mydate = $routeParams.mydate;
    this.ID1 = $routeParams.id1;
    this.ID2 = $routeParams.id2;
    this.team1;
    this.team2;
    this.score1;
    this.score2;
    this.winner;
    this.code1;
    this.code2;
    this.date;
    this.matchDay;
    this.matchData = [];
    /*================================
       function for going back to home
       
    ==================================*/
    this.goBack = function () {
        $location.path('/');
    }
    /*=========================
    logic for getting match details individually
    ============================*/
    this.getSingleMatchDetails = function (data) {
        main.matchData = data.rounds;
        for (var i in main.matchData) {
            for (var j in main.matchData[i].matches) {
                if (main.matchData[i].matches[j].team1.code === main.ID1 && main.matchData[i].matches[j].team2.code === main.ID2 && main.matchData[i].matches[j].date == main.mydate) {

                    main.matchDay = main.matchData[i].name;
                    main.date = main.matchData[i].matches[j].date;
                    main.team1 = main.matchData[i].matches[j].team1.name;
                    main.team2 = main.matchData[i].matches[j].team2.name;
                    main.score1 = main.matchData[i].matches[j].score1;

                    main.score2 = main.matchData[i].matches[j].score2;
                    main.code1 = main.matchData[i].matches[j].team1.code;
                    main.code2 = main.matchData[i].matches[j].team2.code;


                    if (main.score1 > main.score2) {
                        main.winner = "" + main.team1 + " Won";
                    } else if (main.score1 < main.score2) {
                        main.winner = "" + main.team2 + " Won";
                    } else {
                        main.winner = "Match Drawn";

                    }



                }

            }
        }
    }


    /*=======================================
        url's for getting data from an api
     ======================================*/

    this.baseUrl15 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    this.baseUrl16 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
    /*======================
        function for getting 2015-16 team data
     ======================*/
    this.dataForTeam15 = function () {
        $http({
            method: 'GET',
            url: main.baseUrl15
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            main.getSingleMatchDetails(response.data);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });





    }

    this.dataForTeam15();
    /*======================
       function for getting 2016-17 team data
    ======================*/
    this.dataForTeam16 = function () {
        $http({
            method: 'GET',
            url: main.baseUrl16
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            main.getSingleMatchDetails(response.data);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });





    }
    this.dataForTeam16();


}])