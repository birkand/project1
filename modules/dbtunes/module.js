angular.module('DbTunes', []).
	service('DbTunesQuestionService', ['$http','$log','$q', function($http, $log, $q){
		return {
			getAlbumSongQuestion: function(){
				var deferred = $q.defer();
                   
				$http.get('http://dbtune.org/musicbrainz/snorql/')
					.then( function(resp){
						$log.info(resp.data);
						var _song = {name: 'Kullenen Ask', artist: 'Cingiz Kürdoğlu'}; // song bilgisi
						var _answer = {name: 'Yillarim', artist: 'Cingiz Kürdoğlu'}; // song album bilgisi
						var _options = [ _answer, {name: 'Gunlerim',artist: 'Hacı Taşan'}, {name: 'Saatlerim',artist: 'Kahtalı Mıçı'},{name: 'Dakikalarim', artist:'Şer'}] // song album ve yanina eklenmis diger secenek albumler

						// burada donen query sonucuna gore soruyu, cevap seceneklerini ve dogru cevabi olusturup 
						//deffered.resolve() ile donerek caller in bu methodu cagirdigi yerde 
						//then icerisinde success handler olarak ilk function(data) ile
						// data param icinde alabilirsin sevgili kardesim 
						deferred.resolve({question: _song, answer: _answer, options: _options}); 
						// burasi generic olabilir sonucta tum template (directive) lerde yerlestirilecek yerler belli olacak
					}, function(err){
						$log.error(err.data);	
						deferred.reject(err);
					});

				 return deferred.promise;	
			},
			getSongReleasedAtQuestion: function(){
				var deferred = $q.defer();
                   
				$http.get('http://dbtune.org/musicbrainz/snorql/')
					.then( function(resp){
						$log.info(resp.data);
						// burada donen query sonucuna gore soruyu, cevap seceneklerini ve dogru cevabi olusturup 
						//deffered.resolve() ile caller in bu methodu cagirdigi yerde then icerisinde success handler olarak ilk function(data) ile
						// functaki data parametresi icinde alabilirsin sevgili kardesim 
						deferred.resolve("Hakki bulut?");
					}, function(err){
						$log.error(err.data);	
						deferred.reject(err);
					});

				 return deferred.promise;	
			},
			getSongPairsReleasedSameYearQuestion: function(){
				var deferred = $q.defer();
                   
				$http.get('http://dbtune.org/musicbrainz/snorql/')
					.then( function(resp){
						$log.info(resp.data);
						// burada donen query sonucuna gore soruyu, cevap seceneklerini ve dogru cevabi olusturup 
						//deffered.resolve() ile caller in bu methodu cagirdigi yerde then icerisinde success handler olarak ilk function(data) ile
						// functaki data parametresi icinde alabilirsin sevgili kardesim 
						deferred.resolve("Hakki bulut?");
					}, function(err){
						$log.error(err.data);	
						deferred.reject(err);
					});

				 return deferred.promise;	
			},
			getArtistReleasedMostAlbumsQuestion: function(){
				var deferred = $q.defer();
                   
				$http.get('http://dbtune.org/musicbrainz/snorql/')
					.then( function(resp){
						$log.info(resp.data);
						// burada donen query sonucuna gore soruyu, cevap seceneklerini ve dogru cevabi olusturup 
						//deffered.resolve() ile caller in bu methodu cagirdigi yerde then icerisinde success handler olarak ilk function(data) ile
						// functaki data parametresi icinde alabilirsin sevgili kardesim 
						deferred.resolve("Hakki bulut?");
					}, function(err){
						$log.error(err.data);	
						deferred.reject(err);
					});

				 return deferred.promise;	
			},
		}
	}])
	.controller('QuestionController', ['$scope','$log', function($scope, $log){
				$scope.select = function(option){
					$scope.selected = option;
					if($scope.data.answer == option){
						$log.info('Dogru cevap');
						$scope.status = true;

					}else{
						$log.error('Yanlis cevap');
						$scope.status = false;
					}

				};
			}])
	.directive('albumSongQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/album-song-question.html',
			//function('link')
			scope: {
				data :'=data'
			},
			controller: 'QuestionController'
			/*,
			controller: ['$scope','$log', function($scope, $log){
				$scope.select = function(option){
					if($scope.data.answer == option){
						$log.info('Dogru cevap');
					}else{
						$log.error('Yanlis cevap');
					}
				};
			}]*/
		}
	}).
	directive('songReleasedAtQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/song-released-at-question.html',
			scope: {
				data :'=data'
			},
			controller: 'QuestionController'
		}
	}).
	directive('songPairsReleasedSameYearQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/song-pairs-released-same-year-question.html',
			scope: {
				data :'=data'
			},
			controller: 'QuestionController'
		}
	}).
	directive('artistReleasedMostAlbumsQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/artist-released-most-albums-question.html',
			scope: {
				data :'=data'
			},
			controller: 'QuestionController'
		}
	})
	;

	// more templates 
    // .controller('SongController',['$scope','Report', function( $scope, Report){
    //     $scope.getReport = function(reportName){
    //         var report = new Report(reportName);
    //         report.getReport($scope.reportParams);
    //     };
    // }])