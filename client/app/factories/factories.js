angular.module('koupler.factories', [])

.factory('Activities', function($http) {
  var activities = [
                    // 'Hiking',
                    // 'Dinner',
                    // 'Opera',
                    // 'Dancing', 
                    // 'Music Show'
                  ];
  var getActivities = function() {
    //make a get request to the server for for all activities in act table
      //populate activities array with these
  };
  var getCouples = function (activity) {
    //make a post request to the server with the activity chosen
      //give the response to Users factory/controller
  };

  return {
    activities: activities,
    getActivities: getActivities,
    getCouples: getCouples
  }
})