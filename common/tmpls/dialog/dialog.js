angular.module('philipsApp')

.controller('DialogCtrl', function($scope, $mdDialog){

	$scope.closeDialog = function() {
		$mdDialog.cancel();
	};

});