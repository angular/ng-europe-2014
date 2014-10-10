angular.module('ngEuropeApp', ['route', 'home'])

  // DI for provider
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'home/homeController.js'
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });

  }])

  // DI for service instances
  .controller('AppCtrl', ['$route', function() {
    // TODO
  }]);