angular.module('koupler.factories', [])

.factory('Activities', function($http) {
  var activities = [
                    {'name': 'Hiking'},
                    {'name': 'Dinner'},
                    {'name': 'Opera'},
                    {'name': 'Dancing'}, 
                    {'name': 'Music Show'}
                  ];
  var getActivities = function() {
    //make a get request to the server for for all activities in act table
      //populate activities array with these
  };
  var getCouples = function (activity) {
    $http.post('///', {activity: activity}).
      .then(function(response) {
        console.log('all good, should redirect to match.html');
      }, function(response) {
        console.log('sorry, there was an error ', response.statusText);
      });
  };

  return {
    activities: activities,
    getActivities: getActivities,
    getCouples: getCouples
  }
})