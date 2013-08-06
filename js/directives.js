//'use strict';

/* Directives */
var rooturl = "http://localhost/server";
var myapp = angular.module('myMobileApp.directives', []); 
var user, chave, nome;

myapp.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

function showUser(){
	$('#utilizador').html(nome);
}

function authCtrl ($scope, $http, $location) {
	$scope.auth = function(){
		user = document.getElementById("txtutilizador").value;
		$http({
			url: rooturl+"/utilizador/"+user,
			method:"GET"
		}).success(function(data, status, headers, config){
			console.log(data);
			chave = data.ut_password;
			nome = data.ut_nome;
			console.log(nome);
			if(validaLog() == true){
				$location.path('/menumodulos');
			}else{
				alert("Utilizador e/ou password errada");
			}
		}).error(function(data,status,headers,config){
			console.log(status);
			alert("Preenchimento obrigatorio dos dados")
		});
	};
}

function validaLog(){
	console.log(user);
	console.log(chave);
	var pass = document.getElementById("txtpalavrachave").value;
	if (pass == chave){
		return true;
	}else{
		return false;
	}
}