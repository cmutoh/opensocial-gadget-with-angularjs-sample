'use strict';

var ctlModule = angular.module('app.controllers', []);

ctlModule.controller('MainController', ['$scope', 'ContentsGetter', function($scope, ContentsGetter){

	$scope.showPage1 = function(){
		ContentsGetter.page1().then(function(data){
			$scope.fetchedData1 = data;
			$scope.page = 'page1';
		});
	};
	
	$scope.showPage2 = function(){
		ContentsGetter.page2().then(function(data){
			$scope.fetchedData2 = data;
			$scope.page = 'page2';
		});
	};
	
	$scope.showPage3 = function(){
		ContentsGetter.page3().then(function(data){
			$scope.fetchedData3 = data;
			$scope.page = 'page3';
		});
	};

	$scope.showPage1();
}]);