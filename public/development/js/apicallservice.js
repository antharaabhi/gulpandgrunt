angular.module('MyApp').service('ApiCall',['$http','$q', function($http, $q){
	this.call = function(request){
		var deferred = $q.defer();
		$http(request).then(function(data){
			deferred.resolve(data);
		}, function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	}
}]);