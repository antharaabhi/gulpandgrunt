angular.module('MyApp').factory('ConfigService', [function(){

	var that = this;
	that.getDataApi = function() {
		return {
			url: '../../data/data.json',
	        method: 'get',
	        contentType: 'application/json'
		}
	}
	return that;
}]);