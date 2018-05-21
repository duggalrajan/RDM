myApp.config(function($stateProvider) {
  $stateProvider
      .state('productsources', {
        url:'/productsources',
        templateUrl: './html/productsources.html'
      })
      .state('markets',{
        url:'/markets',
        templateUrl: './html/markets.html',
        controller: 'marketController'
      })
      .state('heirarchies',{
        url:'/heirarchies',
        templateUrl: './html/heirarchies.html'
      })
      .state('accountmappings',{
        url:'/accountmappings',
        templateUrl: './html/accountmappings.html'
      })
      .state('administration',{
        url:'/administration',
        templateUrl: './html/administration.html'
      })
      .state('reports',{
        url:'/reports',
        templateUrl: './html/reports.html'
      })
      .state('metadata',{
        url:'/metadata',
        templateUrl: './html/metadata.html'
      })
});
