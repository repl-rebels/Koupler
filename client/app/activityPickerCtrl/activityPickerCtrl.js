angular.module('koupler.activities', [])

.controller('ActivityPickerCtrl', function($scope, Activities) {
  //need to listen for an activity getting chosen
  var chosenActivity = //to be completed
  //need to call getCouples from own factory
  $scope.getCouples(chosenActivity);
})