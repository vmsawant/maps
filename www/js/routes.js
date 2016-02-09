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
        
      
    
      
        
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'mapCtrl'
    })
        
      
    
      
        
    .state('map2', {
      url: '/map1',
      templateUrl: 'templates/map2.html',
      controller: 'map2Ctrl'
    })
        
      
    
      
        
    .state('distance', {
      url: '/distance',
      templateUrl: 'templates/distance.html',
      controller: 'distanceCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/startup');

});