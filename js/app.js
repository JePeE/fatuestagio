'use strict';


// Declare app level module which depends on filters, and services
angular.module('myMobileApp', ['myMobileApp.filters', 'myMobileApp.services', 'myMobileApp.directives', 'myMobileApp.controllers']).
  config(['$routeProvider', function($routeProvider) {

//Caminhos comuns
    $routeProvider.when('/login', {auth: true, templateUrl: 'partials/login.html' });
    $routeProvider.when('/menumodulos', {auth: true, templateUrl: 'partials/menumodulos.html'});

// Módulo Policia
    $routeProvider.when('/dashpolicia', {templateUrl: 'partialpolicia/dashpolicia.html'});
    $routeProvider.when('/dadosmulta', {templateUrl: 'partialpolicia/dadosmulta.html'});

// Módulo Espaços
    $routeProvider.when('/espacos', {templateUrl: 'partialespacos/espacos.html'});
    $routeProvider.when('/espacosteste', {templateUrl: 'partialespacos/espacosteste.html'});
    $routeProvider.when('/dashespacos', {templateUrl: 'partialespacos/dashespacos.html'});

// Módulo Bilheteira
    $routeProvider.when('/dashbilhetes', {templateUrl: 'partialbilheteira/dashbilhetes.html'});
    $routeProvider.when('/dadosbilhete', {templateUrl: 'partialbilheteira/dadosbilhete.html'});
    $routeProvider.when('/descricaoh2m1', {templateUrl: 'partialbilheteira/descricaoh2m1.html'});
    $routeProvider.when('/descricaodanca', {templateUrl: 'partialbilheteira/descricaodanca.html'});
    $routeProvider.when('/descricaoconcerto', {templateUrl: 'partialbilheteira/descricaoconcerto.html'});
    $routeProvider.when('/descricaoopera', {templateUrl: 'partialbilheteira/descricaoopera.html'});
    $routeProvider.when('/descricaodancassalao', {templateUrl: 'partialbilheteira/descricaodancassalao.html'});

// Inserção de Dados

    $routeProvider.when('/fotos', {templateUrl: 'partials/fotos.html'});
    $routeProvider.when('/gps', {templateUrl: 'partials/gps.html'});
// Primeira página a ser carregada
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);
