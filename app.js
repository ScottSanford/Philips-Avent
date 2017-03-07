angular.module("philipsApp", [
        'ngMaterial', 
        'ngMdIcons', 
        'ngAnimate', 
        'ui.router', 
        'myFilters', 
        'myDirectives'
    ])

    .config(function ($compileProvider, $stateProvider, $urlRouterProvider) { 

          $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:|https:\/\/|http:\/\/|data:image)/);

          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/");
          
          $stateProvider
                .state('parent', {
                    url: '/', 
                    templateUrl: 'components/parent/parent.html',                    
                    controller: 'ParentCtrl', 
                    cache: false
                })

          $stateProvider
                .state('details', {
                    url: '/folder-details/:id', 
                    templateUrl: 'components/folder-details/folder-details.html',                    
                    controller: 'FolderDetailsCtrl'
                })

          $stateProvider
                .state('item', {
                    url: '/item/:parentFolder/:id', 
                    templateUrl: 'components/item/item.html',                    
                    controller: 'ItemCtrl'
                })


    });
        