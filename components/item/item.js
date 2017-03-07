angular.module('philipsApp')

.controller('ItemCtrl', function($scope, $location, Mfly, $stateParams, $mdDialog){


	var id = $stateParams.id; 
	$scope.paramID = id;
	Mfly.getItem(id).then(function(data){
		$scope.item = data;
	});

	Mfly.search('@topIcon')
		.then(function(data){
			$scope.icons = data;
		});

	$scope.goToRoute = function(item, ev) {
		if (item.name === 'Categories Icons') {
			$location.url('/');
		} else {
			$mdDialog.show({
	          controller: 'DialogCtrl',
	          templateUrl: 'common/tmpls/dialog/dialog.html',
	          parent: angular.element(document.body),
	          targetEvent: ev,
	          clickOutsideToClose:true
	        }).then(function() {
	            
	        });
		}
	}

	$scope.openDialog = function(ev) {
		$mdDialog.show({
	          controller: 'DialogCtrl',
	          templateUrl: 'common/tmpls/dialog/dialog.html',
	          parent: angular.element(document.body),
	          targetEvent: ev,
	          clickOutsideToClose:true
	        }).then(function() {
	            
	        });
	}


});


