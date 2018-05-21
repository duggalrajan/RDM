var myApp = angular.module('myApp', ["ui.router","ui.grid", 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pagination']);

myApp.controller('myController', ['$scope', '$http',  function($scope, $http) {
  $scope.detail="Setup form";
 //var loaded = false;
  $scope.showSquads = function() {
    if (!loaded) {
      alert('loading');
      loaded=true;
     $scope.otherInfo="this is otherinfo";
    }
  };
  $scope.showChilds = function(index){
  
        $scope.items[index].active = !$scope.items[index].active;
        collapseAnother(index);
    };
    
    var collapseAnother = function(index){
        for(var i=0; i<$scope.items.length; i++){
            if(i!=index){
              $scope.items[i].active = false;
                
            }
        }
    };
    

$scope.items = [
        {
            name: "Product Sources",
            link: "productsources",
            subItems: [
                {name: "SubItem1"},
                {name: "SubItem2"}
            ]
        },
        {
            name: "Markets",
            link: "markets",
            subItems: [
                {name: "SubItem3"},
                {name: "SubItem4"},
                {name: "SubItem5"}
            ]
        },
        {
            name: "Heirarchies",
            link: "heirarchies",
            subItems: [
                {name: "SubItem1"},
                {name: "SubItem3"},
                {name: "SubItem4"},
                {name: "SubItem5"}
            ]
        },
        {
            name: "Account Mappings",
            link: "accountmappings",
            subItems: [
              {name: "SubItem3"},
                {name: "SubItem4"},
                {name: "SubItem5"},
                {name: "SubItem6"}
            ]
        },
        {
            name: "Administration",
            link: "administration",
            subItems: [
                {name: "SubItem3"}
            ]
        }
    ];
}]);
