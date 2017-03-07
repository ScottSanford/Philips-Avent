angular.module('philipsApp')

.controller('FolderDetailsCtrl', function($scope, $location, $state, Mfly, $stateParams, $mdDialog){

	var id = $stateParams.id;

	Mfly.getFolder(id)
		.then(function(data){
			
			$scope.subfolders = data;

			// show first folder items
			data.forEach(function(obj, index){
				if (index == 0) {
					Mfly.getFolder(obj.id).then(function(data){

						// mother items
						var mother = _.filter(data, function(obj){
							if (obj.beneficiary === "Mother's Health") {
								return obj;
							}
						});

						// baby items
						var baby = _.filter(data, function(obj){
							if (obj.beneficiary === "Baby's Health") {
								return obj;
							}
						});

						$scope.mother = mother;
						$scope.baby = baby;
					});
				}

			});

	});


	Mfly.search('@topIcon').then(function(data){
		$scope.icons = data;
	});

	$scope.activeMenu = 0;

	$scope.showAllItem = function() {
		var firstArray = [];
		var totalarray = [];
		Mfly.getFolder('4dd32f6ee19f482dbd11b5792ef15a37product326389').then(function(data){
	
			data.forEach(function(obj){

				Mfly.getFolder(obj.id).then(function(res){
					firstArray.push(res);
				});
			})
		});

		console.log(firstArray);
	};

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

	$scope.getSubFolder = function(id, index) {
		$scope.activeMenu = index;

		Mfly.getFolder(id)
			.then(function(data){
				var mother = _.filter(data, function(obj){
					if (obj.beneficiary === "Mother's Health") {
						return obj;
					}
				});

				var baby = _.filter(data, function(obj){
					if (obj.beneficiary === "Baby's Health") {
						return obj;
					}
				});

				$scope.mother = mother;
				$scope.baby = baby;

			});
	};

	$scope.openItem = function(id) {
		mflyCommands.openItem(id);
	};

});


