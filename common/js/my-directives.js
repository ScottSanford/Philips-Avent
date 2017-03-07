angular.module('myDirectives', [])

.directive('mainNavBar', function($location, $mdDialog){
	return {

		restrict: 'E', 
		replace: true, 
		transclude: true,
		templateUrl: 'common/tmpls/navbars/main-nav-bar.html', 
		link: function(scope, element, attrs) {

			scope.closeInteractive = function () {
		        mflyCommands.close();
		    };


		}

	}
})





