myApp.controller ('HController', ['$scope', '$http', function HController($scope, $http) {

    $scope.selectFaIndex = 0;
    $scope.SelectedAvailItems = [];
    $scope.SelectedSelectedListItems = [];
    $scope.SelectedListItems = [
        []
    ];
    $scope.AvailableListItems = [
        []
    ];

    $scope.DefaultListItems = [
        [{
            email: 'john.banks@rj.com'
        }, {
            email: 'jim.chevy@rj.com'
        }, {
            email: 'ralph.stocks@rj.com'
        }],
        [{
            email: 'jim.sums@rj.com'
        }, {
            email: 'jim.camaro@rj.com'
        }, {
            email: 'jeff.money@rj.com'
        }],
        [{
            email: 'fred.pays@rj.com'
        }, {
            email: 'steve.acura@rj.com'
        }, {
            email: 'ryan.bills@rj.com'
        }]
    ];

    angular.copy($scope.DefaultListItems, $scope.AvailableListItems);

    $scope.btnRight = function () {
        //move selected.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            this.push(value);
        }, $scope.SelectedListItems[$scope.selectFaIndex]);

        //remove the ones that were moved.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            for (var i = $scope.AvailableListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.AvailableListItems[$scope.selectFaIndex][i].email == value.email) {
                    $scope.AvailableListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedAvailItems = [];

    };

    $scope.btnLeft = function () {
        //move selected.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            this.push(value);
        }, $scope.AvailableListItems[$scope.selectFaIndex]);

        //remove the ones that were moved from the source container.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            for (var i = $scope.SelectedListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.SelectedListItems[$scope.selectFaIndex][i].email == value.email) {
                    $scope.SelectedListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedSelectedListItems = [];
    };
}]);