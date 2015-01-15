'use strict';

/**
 * @ngdoc function
 * @name funWithAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the funWithAngularApp
 */
angular.module('funWithAngularApp')
  .controller('AboutCtrl', function (
  
  $scope, github, $routeParams) {
    
    var onArtistComplete = function(data){
    	$scope.artists = data.artist;
    	//github.getRepos($scope.user).then(onRepos, onError); 
    }; 

    // var onRepos = function(data){
    // 	$scope.repos = data; 
    // }; 


      $scope.search = function(artistname){
    	 github.getArtists($scope.artistname).then(onArtistComplete, onError); 
    }; 
    	$scope.artistname = "cher"; 

    var onError = function(reason){
    	$scope.error = "could not fetch the data."; 
    }; 
    
    	//$scope.artistname = $routeParams.artistname; 
    	//$scope.repoSortOrder = "-stargazers_count"; 
        
       
  });
