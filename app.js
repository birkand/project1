var app = angular.module('Project1App',[
	'DbTunes'
	]);

app.controller('MainController', function($scope,DbTunesQuestionService){
	console.log('Hello angular!');
	DbTunesQuestionService.getAlbumSongQuestion()
	.then(function(data){
		//serviste hazirlanan question objesi
		$scope.question1 = data
	}, function(err){
		//TODO: handle error
	}) ;
});

