var rootURL = "http://localhost/server";

var myMobileApp = angular.module('myMobileApp.controllers', []);


// Controlador de teste
function badjorasCtrl ($scope, $http) {
	$http({
		url: rootURL + "/",
		method: "GET"
	}).success(function(data, status, headers, config){
		console.log(data);
		$scope.badjoras = data;
	}).error(function(data, status, headers, config){
		console.log(status);
	});
}

// Controlador para ir buscar a informação dos mercados
function mercadosCtrl ($scope, $http) {
	$http({
		url: rootURL + "/mercados/",
		method: "GET"
	}).success(function(data, status, headers, config){
		console.log(data);
		$scope.mercados = data;
		console.log(angular.toJson($scope.mercados));
	}).error(function(data, status, headers, config){
		console.log(status);
	});
}
