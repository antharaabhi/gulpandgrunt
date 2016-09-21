angular.module('MyApp').controller('MainController', ['$scope', 'MyData', '$filter', '$state', function($scope, MyData, $filter, $state){
	$scope.sites = [];
	$scope.selectedSite = '';

	MyData.getData().then(function(data) {
		$scope.siteData = data.data;
		$scope.listSites(data.data);
	},function(err){
		console.log(err);
	});

	$scope.listSites = function(data) {
		for(var i = 0; i < data.sites.length; i++){
			$scope.sites.push(data.sites[i].siteName);
		}
	}

	$scope.siteSelected = function(site){
		$state.go("app.site", {siteSelected: site});
	}

}]);