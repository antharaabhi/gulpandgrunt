angular.module('MyApp').controller('InformationController', ['$scope', 'MyData', '$filter', '$state', '$stateParams' ,function($scope, MyData, $filter, $state, $stateParams) {
	$scope.selectedSite = '';

	MyData.getData().then(function(data){
		$scope.listInformation(data.data);
	},function(err){
		console.log(err);
	});

	$scope.listInformation = function(data){
		var department = $filter('filter')(data.sites,{siteName:$stateParams.siteSelected})[0].departments;
		$scope.departmentUsers = $filter('filter')(department,{name:$stateParams.departmentSelected})//[0].users;
		console.log($stateParams.siteSelected, $stateParams.departmentSelected, $scope.departmentUsers)
		$scope.siteSelected = $stateParams.siteSelected;
		$scope.departmentSelected = $stateParams.departmentSelected;
	}

}]);