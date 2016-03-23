;(function(app){

  app.service('SubRedditService', ['$http', function($http){
    
    this.getData = function(subRedditName){
      return $http({
        url: 'http://localhost:8080/rest/subreddit/:subRedditName',
        method: 'GET',
        params: {subRedditName: subRedditName}
      }).then(function(response){
        console.log(response);
      });
    };

  }]);

})(angular.module('app'));