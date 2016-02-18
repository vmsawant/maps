angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('startUp', {
      url: '/startup',
      templateUrl: 'templates/startUp.html',
      controller: 'startUpCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'mapCtrl'
    })
    .state('distance', {
      url: '/distance',
      templateUrl: 'templates/distance.html',
      controller: 'distanceCtrl'
    })
    .state('chart', {
      url: '/chart',
      templateUrl: 'templates/chart.html',
      controller: 'chartCtrl'
    })
    .state('details', {
      url: '/details-back',
      templateUrl: 'templates/details.html',
      controller: 'detailsCtrl'
    })
   .state('mytrips', {
      url: '/my-trips',
      templateUrl: 'templates/mytrips.html',
      controller: 'mytripsCtrl'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/startup');

});