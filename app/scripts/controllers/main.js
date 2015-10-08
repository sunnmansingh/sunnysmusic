'use strict';

/**
 * @ngdoc function
 * @name sunnysmusic.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sunnysmusic
 */
angular.module('sunnysmusic')
  .controller('MainCtrl', function (
  	$scope, $interval, $location) {
    
    var decrementCountdown = function(){
    	$scope.countdown -= 1; 
    	if($scope.countdown < 1){
    		$scope.search($scope.username); 
    	}
    };
    
    var countdownInterval = null; 

     var startCountdown = function(){
    	countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);     	
    };

    $scope.search = function(username){
    	if(countdownInterval){
    		$interval.cancel(countdownInterval); 
    	    $scope.countdown = null; 
    	}
    	// use location 
    	$location.path("/user/" + username); 
    }; 
    	$scope.username = "angular"; 
    	$scope.countdown = 5; 
    	startCountdown(); 
 });


/*
why create services : create reusable logic
					: create shared data
					: angular instantiates a single instance of service
					: manage complexity - may be controller code is getting hug
*/