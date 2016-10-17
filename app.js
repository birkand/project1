var app = angular.module('Project1App',[
	'DbTunes'
	]);

app.controller('MainController', function($scope,DbTunesQuestionService){
	console.log('Hello angular!');
	DbTunesQuestionService.getAlbumSongQuestion()
	.then(function(data){
		//TODO populate question, answers and correct answer from song 
		$scope.question1 = data
	}, function(err){
		//TODO: handle error
	}) ;
});

