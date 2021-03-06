'use strict';

/**
 * @ngdoc function
 * @name sunnysmusic.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sunnysmusic
 */
angular.module('sunnysmusic')
  .factory('github', function ($http) {
		var getUser = function(username){
			return	$http.get("https://api.github.com/users/" + username)
				.then(function(response){
					return	 response.data; 
				}); 
		}; 

//http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=xxx...

		var getArtists = function(artistname){
			return	$http.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistname + 
				    "&api_key=dad734b737bb5d11481192a16897fe56" + "&format=json")
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
			getRepoDetails : getRepoDetails, 
			getArtists     : getArtists
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

// 	var module = angular.module("sunnysmusic"); 
// 	module.factory("github", github); 

// }()); 