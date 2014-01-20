var app = angular.module('cashRegApp', []);

app.controller('MainCtrl', function($scope) {
  var tax = 0.13;
  var total = 0;
  var runningTax = 0;
  var runningTotal = 0;  

  $scope.totalAmt = 0;
  $scope.itemArray = [];
  $scope.itemArraywithTax = [];
  $scope.totalTax = 0;

  $scope.calcTaxOnly = function(amt){
    $scope.taxOnly = amt * tax;
    return $scope.taxOnly;
  };

  $scope.calcTaxIncl = function(amt){
    $scope.taxIncl = amt * (1 + tax);
    $scope.itemArraywithTax.push($scope.taxIncl);
  };

  $scope.calcTotal = function(){
    $scope.totalAmt += $scope.taxIncl;
  }

  $scope.calcTotalTax = function(){
    $scope.totalTax += $scope.taxOnly;
  }

  $scope.addItem = function(amt){
    $scope.itemArray.push(amt);
    $scope.calcTaxOnly(amt);
    $scope.calcTaxIncl(amt);
    $scope.calcTotalTax();
    $scope.calcTotal();
    $scope.clearInput();
  };

  $scope.clearInput = function(){
    $scope.itemAmt = '';
  };

  $scope.removeItem = function(index){
    var removing = $scope.itemArray.splice(index, 1);
    removingNum = removing[0];
    var removingTax = removingNum * 0.13;
    var removingTotal = removingNum * 1.13;
    $scope.totalTax -= removingTax;
    $scope.totalAmt -= removingTotal;
  };

  console.log("herro");

});