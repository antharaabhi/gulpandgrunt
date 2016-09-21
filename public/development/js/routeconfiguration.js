angular.module('MyApp').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/sites");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
	$stateProvider.state('app', {
      url: "/sites",
      templateUrl: "../production/templates/main.html",
      controller: 'MainController'
    }).state('app.site', {
      url: "/:siteSelected",
      views:{
      	"departments@app":{
		      templateUrl: "../production/templates/sitedepartments.html",
		      controller: 'DepartmentController'	
      	}
      }
    })
    .state('app.site.department', {
      url: "/:departmentSelected",
      views:{
      	"information@app":{
		      templateUrl: "../production/templates/information.html",
		      controller: 'InformationController'	
      	}
      }
    })
}]);
