angular.module('koupler.activities', [])

.controller('ActivityPickerCtrl', function($scope, Activities) {
  //extend the scope with the factory
  angular.extend($scope, Activities);
  //immediately get all the activities, so that activities can be populated on page
  $scope.getActivities();
})