angular.module('app.controllers', [])
  
.controller('startUpCtrl', function($scope) {
  /* $state.go('map',{}, {reload: true});
  $scope.login = function(){
    $state.go('map');
  };*/
})
.controller('loginCtrl',function($scope){
  
})
   
.controller('mapCtrl', function($scope, $state, $ionicLoading, $compile) {
  $state.go('map',{}, {reload: true});

	  
  /*To change the color from green to red*/

  window.onload = function() {
  var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  });

google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
    };
  $scope.going = false;
	$scope.goEvent = function(){
  $state.go('map',{}, {reload: true});
   $scope.going = !$scope.going;
   if($scope.going){  
       $scope.go();
   }
   else
   {
       $scope.stop();
   } 
     
  };
  /*Tripmeter function  google.maps.event.addDomListener(window, 'load', function()*/
   



  google.maps.event.addDomListener(window, 'load', function() {
      var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
      var mapOptions = 
      {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
      };
 
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
      navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });

  
  
	/* function initialize() {

        var myLatlng = new google.maps.LatLng(19.07542,72.88160);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
     $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };*/

     
})/*End of map controller*/

.controller('distanceCtrl', function($scope) {

})
.controller('detailsCtrl', function($scope) {

})

.controller('chartCtrl', function($scope) {

})
.controller('mytripsCtrl', function($scope) {

})
   




    
      
 



