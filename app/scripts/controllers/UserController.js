angular.module('funWithAngularApp')
  .controller('UserCtrl', function (
  	$scope, github, $routeParams) {
    
    var onUserComplete = function(data){
    	$scope.user = data;
    	github.getRepos($scope.user).then(onRepos, onError); 
    }; 

    var onRepos = function(data){
    	$scope.repos = data; 
    }; 

    var onError = function(reason){
    	$scope.error = "could not fetch the data."; 
    }; 
    
    	$scope.username = $routeParams.username; 
    	$scope.repoSortOrder = "-stargazers_count"; 
        
        github.getUser($scope.username).then(onUserComplete, onError); 
 });