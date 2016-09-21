angular.module('MyApp').factory('MyData',['ApiCall', 'ConfigService', function(ApiCall, ConfigService){
	var that = {};
	that.getData = function(){
		var request = ConfigService.getDataApi();
		return ApiCall.call(request);
	}
	return that;
}]);