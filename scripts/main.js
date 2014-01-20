var app = angular.module('cashRegApp', []);

app.controller('MainCtrl', function($scope) {
  
  
  $scope.addTax = function(amt){
    var tax = 0.13;
    var total = 0;
    $scope.taxAmt = amt * tax;
    $scope.totalAmt = amt * (1 + tax) ;
  };

  console.log("herro");

});