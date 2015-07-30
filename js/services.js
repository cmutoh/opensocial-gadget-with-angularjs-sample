'use strict';

var srvModule = angular.module('app.services', []);

srvModule.factory('ContentsGetter', ['$q', '$timeout', function($q, $timeout){
	return {
		page1:function(){
			var delay = $q.defer();
			$timeout(function(){
				delay.resolve("Page1: A page, memory page, or virtual page is a fixed-length contiguous block of virtual memory, described by a single entry in the page table. It is the smallest unit of data for memory management in a virtual memory operating system.");
			}, 200);
			return delay.promise;
		},
		page2:function(){
			var delay = $q.defer();
			$timeout(function(){
				delay.resolve("Page2: Virtual memory allows a page that does not currently reside in main memory to be addressed and used. If a program tries to access a location in such a page, an exception called a page fault is generated. The hardware or operating system is notified and loads the required page from the auxiliary store (hard disk) automatically. A program addressing the memory has no knowledge of a page fault or a process following it. Thus a program can address more (virtual) RAM than physically exists in the computer. ");
			}, 200);
			return delay.promise;
		},
		page3:function(){
			var delay = $q.defer();
			$timeout(function(){
				delay.resolve("Page3: Virtual memory is a scheme that gives users the illusion of working with a large block of contiguous memory space (perhaps even larger than real memory), when in actuality most of their work is on auxiliary storage (disk). Fixed-size blocks (pages) or variable-size blocks of the job are read into main memory as needed.");
			}, 200);
			return delay.promise;
		}
	};
}]);