angular.module('philipsApp')

.factory('Hospitals', function(){

	var fakeData = {
        hospitals: [{
                name: 'Northwestern Clinic', 
                doctors: 5, 
                nurses: 3, 
                births: 28
            },
            {
                name: 'Ann & Robert H. Lurie Children Hospital of Chicago', 
                doctors: 6, 
                nurses: 5, 
                births: 35
            },
            {
                name: 'Mercy Hospital & Medical Center', 
                doctors: 3, 
                nurses: 2, 
                births: 15
            }
        ]
    };

    return fakeData.hospitals;
	
});