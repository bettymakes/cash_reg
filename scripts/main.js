var app = angular.module('cashRegApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.test = [
    {num: 1, name: "tom"},
    {num: 2, name: "sally"},
    {num: 3, name: "ned"},
  ];

  console.log("herro");

});