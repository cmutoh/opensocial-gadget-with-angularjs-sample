'use strict';

var dirModule = angular.module('app.directives', []);

dirModule.directive('oaAdjustHeight', ['$interval', function($interval){
	return {
		link: function postLink (scope, iElement, iAttrs){
			var height;
			var tempHeight;
			
			scope.$watch('page', function(newVal, oldVal){
				if(newVal == iAttrs.oaAdjustHeight){
					var interval = $interval(function() {
						height = iElement[0].clientHeight;
						if (tempHeight == height){
							$interval.cancel(interval);
							gadgets.window.adjustHeight();
						}
						if (height > 0){
							tempHeight = height;
						}
						
					}, 200);
				}
			});
			
		}
	}
}]);