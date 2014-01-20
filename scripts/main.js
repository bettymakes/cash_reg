var app = angular.module('cashRegApp', []);

app.controller('MainCtrl', function($scope) {
  var tax = 0.13;
  var total = 0;
  var runningTax = 0;
  var runningTotal = 0;  

  $scope.totalAmt = 0;
  $scope.itemArray = [];
  $scope.itemArraywithTax = [];

  $scope.calcTaxOnly = function(amt){
    $scope.taxOnly = amt * tax;
    return $scope.taxOnly;
  };

  $scope.calcTaxIncl = function(amt){
    $scope.taxIncl = amt * (1 + tax);
    $scope.itemArraywithTax.push($scope.taxIncl);
  };

  $scope.calcTotal = function(amt){
    $scope.totalAmt += $scope.taxIncl;
  }

  $scope.addItem = function(amt){
    $scope.itemArray.push(amt);
    $scope.calcTaxOnly(amt);
    $scope.calcTaxIncl(amt);
    $scope.calcTotal(amt);
  };

  console.log("herro");

});