angular.module('app.controllers', ['ionic', 'ngCordova'])
  
.controller('startUpCtrl', function($scope) {
  /* $state.go('map',{}, {reload: true});
  $scope.login = function(){
    $state.go('map');
  };*/
})
.controller('loginCtrl',function($scope){
  
})
   
.controller('mapCtrl', function($scope, $state, $ionicLoading, $compile, $cordovaGeolocation) { 
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });      
    });
  }, function(error){
    console.log("Could not get location");
  });   
})/*End of map controller*/

.controller('distanceCtrl', function($scope) {

})
.controller('detailsCtrl', function($scope) {

})

.controller('chartCtrl', function($scope) {

})
.controller('mytripsCtrl', function($scope) {

})
   




    
      
 



