myApp.directive('tab', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
        require: '^tabset',
        scope: {
            heading: '@',
            action: '&'
        },
        link: function(scope, elem, attr, tabsetCtrl) {
            scope.active = false;
            tabsetCtrl.addTab(scope);
        }
    };
});

// product directives - start
myApp.directive('productrules', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/product_rules.html'
  };
});
myApp.directive('productsetup', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/product_setup.html'
  };
});

myApp.directive('productproducts', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/product_products.html'
  };
});
myApp.directive('productmappings', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/product_mappings.html'
  };
});
// product directives - start

// market directives - start
myApp.directive('marketsetup', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/markets_setup.html'
  };
});
myApp.directive('marketproducts', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/markets_products.html'
  };
});

// market directives - end

// heirarchies directives - start

myApp.directive('heirarchiesrules', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/heirarchies_rules.html'
  };
});
myApp.directive('heirarchiessetup', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/heirarchies_setup.html'
  };
});
myApp.directive('heirarchiesproducts', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/heirarchies_products.html'
  };
});
myApp.directive('heirarchiesmappings', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/heirarchies_mappings.html'
  };
});

// heirarchies directives - end

// account mappings directives - start

myApp.directive('accountmappingrules', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/accountmapping_rules.html'
  };
});
myApp.directive('accountmappingsetup', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/accountmapping_setup.html'
  };
});
myApp.directive('accountmappingproducts', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/accountmapping_products.html'
  };
});
myApp.directive('accountmappingmappings', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/accountmapping_mappings.html'
  };
});

// account mappings directives - start

// administration mappings directives - start
myApp.directive('administrationsetup', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/administration_setup.html'
  };
});
// administration mappings directives - start


myApp.directive('tabset', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: './directives/tabset.html',
        bindToController: true,
        controllerAs: 'tabset',
        controller: function() {
            var self = this;
            self.tabs = [];
            self.addTab = function addTab(tab) {
                self.tabs.push(tab);
                if (self.tabs.length === 1) {
                    tab.active = true;
                }
                self.select = function(selectedTab) {
                    angular.forEach(self.tabs, function(tab) {
                        if (tab.active && tab !== selectedTab) {
                            tab.active = false;
                        }
                    });

                    selectedTab.active = true;
                };
            };
        }
    };
});

// administration mappings directives - start
myApp.directive('datagrid', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/dataGrid.html', 
    scope: {
      griddata: '='
    },
    link: function(scope, element, attrs){
      console.log('test', scope.griddata)
    }

  };
});
// administration mappings directives - start



// .directive('filterDropdown', function() {
//   return {
//     template: '<select class="form-control" ng-model="colFilter.term" ng-options="option.id as option.value for option in colFilter.options"></select>'
//   };
// })