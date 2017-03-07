angular.module('philipsApp')

.controller('ParentCtrl', function($scope, $location, $interval, Mfly, Hospitals, $mdDialog){

	console.log('Parent Controller init');

	$scope.users = Hospitals;

	$scope.goToFolderDetails = function(folder, ev) {
		if (folder.name === 'Parental Challenges') {
			$location.url('folder-details/' + folder.id);
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
	};

	$scope.closeInt = function() {
		mflyCommands.close();
	};

	Mfly.filter(
		{keywords: '@parentFolder'}
		).then(function(data){
		$scope.folders = data;
		console.log($scope.folders);
	});


	Mfly.search('@aboutus').then(function(data){
		$scope.about = data;
	});	

});


