angular.module('koupler.services', [])

.factory('userFactory', function($http){
  var getAllUsersDetails = function(){
    return $http({
      method: 'GET',
      url: '//////' //to be filled out. FROM ALEX.
    })
    .then(function(data){
      return data;
    })
  };


  return {
    getAllUsers: getAllUsersDetails,
    sendEmail: sendEmail
  };
})

