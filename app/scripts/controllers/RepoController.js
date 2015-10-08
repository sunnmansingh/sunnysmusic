angular.module('sunnysmusic')
  .controller('RepoCtrl', function ($scope, github, $routeParams) {

    var reponame = $routeParams.reponame; 
    var username = $routeParams.username; 

    github.getRepoDetails(username, reponame)
    .then(onRepo, onError);

    var onRepo = function(data){
    	$scope.repo = data;
    }; 

    var onError = function(reason){
    	$scope.error = reason; 
    }; 
 });