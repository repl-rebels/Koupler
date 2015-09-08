angular.module('koupler.couples',[])

//ctrl name changed from useCtrl to couplesCtrl
.controller('CouplesCtrl', function($scope, $window){
  $scope.data = {};

  $scope.getCouple = function(){
    var matchedCouple = $window.localStorage.getItem('coupleChosen');
    $scope.data.name = matchedCouple.person_1_first_name + matchedCouple.person_2_first_name;
    $scope.data.email = matchedCouple.email;
    $scope.data.phone = matchedCouple.phone;
  };

  $scope.getCouple();
});
