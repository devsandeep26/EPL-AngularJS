//creating module
var myApp = angular.module("EPL", ['ngRoute']);







myApp.controller("myController", ['$http', function ($http) {
    //creating a context 
    var main = this;
    //array for 2015-16 team
    this.team15 = [];
    //array for 2016-17 team
    this.team16 = [];
    this.name;

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
            main.name = response.data.name;
            console.log(response.data.name);
            main.team15 = response.data.rounds;
            console.log(main.team15);
            // main.matches1 = response.data.rounds[0].matches;
            //console.log(main.matches1)

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });





    }
    //calling the function
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
            main.name = response.data.name;
            console.log(response.data.name);
            main.team16 = response.data.rounds;
            console.log(main.team16);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });
    }
    //calling the function
    this.dataForTeam16();


}]); //end of controller