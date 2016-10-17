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
	}]).
	directive('albumSongQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/album-song-question.html',
			//function('link')
			scope: {
				data :'=data'
			}
		}
	}).
	directive('songReleasedAtQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/song-released-at-question.html',
			scope: {
				data :'=data'
			}
		}
	}).
	directive('songPairsReleasedSameYearQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/song-pairs-released-same-year-question.html',
			scope: {
				data :'=data'
			}
		}
	}).
	directive('artistReleasedMostAlbumsQuestion', function(){
		return {
			templateUrl: 'modules/dbtunes/templates/artist-released-most-albums-question.html',
			scope: {
				data :'=data'
			}
		}
	})

	// more templates 
    // .controller('SongController',['$scope','Report', function( $scope, Report){
    //     $scope.getReport = function(reportName){
    //         var report = new Report(reportName);
    //         report.getReport($scope.reportParams);
    //     };
    // }])