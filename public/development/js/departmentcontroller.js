angular.module('MyApp').controller('DepartmentController', ['$scope', 'MyData', '$filter', '$state', '$stateParams' ,function($scope, MyData, $filter, $state, $stateParams) {
	$scope.selectedSite = '';

	MyData.getData().then(function(data){
		$scope.listDepartments(data.data);
	},function(err){
		console.log(err);
	});

	$scope.listDepartments = function(data){
		$scope.departments = $filter('filter')(data.sites,{siteName:$stateParams.siteSelected})[0].departments;
	}
	$scope.showInfo = function(department){
		$state.go("app.site.department", {siteSelected: $stateParams.siteSelected,departmentSelected: department});	
	}
}]);
    