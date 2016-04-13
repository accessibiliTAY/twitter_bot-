var app = angular.module('myApp', []);

app.controller('TwitterController', ['$scope', '$http', function($scope, $http){


  $scope.users = [];
  $scope.nouns = [];
  $scope.adjectives = [];

https://twitter.com/users/username_available?username=whatever

// remove whitespace
  function removeSpace(str) {
    return str.replace(" ", "");
  };


  $scope.getAdjectives = function() {
    $http.get("/adjectives").then(function(res) {
      $scope.adjectives = res.data;
      console.log($scope.adjectives);
      $scope.getNouns();
    })
  };


  $scope.getNouns = function() {
    $http.get("/nouns").then(function(res) {
      $scope.nouns = res.data;
      console.log($scope.nouns);
      $scope.generate();
    })
  };


  $scope.generate = function() {
    // $scope.getAdjectives();
    // $scope.getNouns();
    console.log($scope.nouns, $scope.adjectives );
    for(var i=0; i <10; i++) {
      var handleName = removeSpace($scope.adjectives[i]) + removeSpace($scope.nouns[i]);
      $scope.users.push({name: handleName, url: "https://www.twitter.com/" + handleName, taken: null})

    }
    console.log($scope.users);
  }

  $scope.getClass = function(newClass){
    if(newClass){
      return "true";
    } else {
      return "false"
    }
  }

}])
