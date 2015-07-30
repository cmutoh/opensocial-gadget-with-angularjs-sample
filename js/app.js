var init = function (){
	
	'use strict';
	
	var app = angular.module('app', ['app.services', 'app.controllers', 'app.directives']);
	angular.bootstrap(document, ['app']);
}