angular.module('cashRegApp', ['ngRoute']).config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/index.html',
    controller: 'MainCtrl'
  })
});