'use strict';

/**
 * @ngdoc function
 * @name funWithAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the funWithAngularApp
 */
angular.module('funWithAngularApp')
  .factory('github', function ($http) {
		var getUser = function(username){
			return	$http.get("https://api.github.com/users/" + username)
				.then(function(response){
					return	 response.data; 
				}); 
		}; 

		var getRepos = function(user){
			return	$http.get(user.repos_url) 
				.then(function(response){
					return	 response.data; 
				}); 
		}; 

		var getRepoDetails = function(username,reponame){
			var repo; 
			var repoUrl = "https://api.github.com/repo/" + username + "/" + reponame; 

			console.log(repoUrl); 

			return	$http.get(repoUrl)
				.then(function(response){
					repo = response.data; 
					return $http.get(repoUrl + "/collaborators"); 
				})
				.then(function(response){
					repo.collaborators = response.data; 
					return repo; 
				}); 
		}; 

		return {
			getUser  : getUser, 
			getRepos : getRepos, 
			getRepoDetails : getRepoDetails
		}; 
  });



//cahnges 
  // (function(){

// 	var github = function($http){

// 		var getUser = function(username){
// 			return	$http.get("https://api.github.com/users/" + username)
// 				.then(function(response){
// 					return response.data; 
// 				}); 
// 		}; 



// 		var getRepos = function(user){
// 			return	$http.get(user.repos_url) 
// 				.then(function(response){
// 					return response.data; 
// 				}); 
// 		}; 

// 		return {
// 			getUser  : getUser, 
// 			getRepos : getRepos
// 		}; 
// 	}; 

// 	var module = angular.module("funWithAngularApp"); 
// 	module.factory("github", github); 

// }()); 