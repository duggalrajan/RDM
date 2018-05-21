myApp.controller ('marketController', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {

	$scope.gridSettings = {};

	// $scope.myData = [
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },{
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
	//     {
	//         firstName: "Cox",
	//         lastName: "Carney",
	//         company: "Enormo",
	//         employed: true,
	//         hidden: true
	//     },
	//     {
	//         firstName: "Lorraine",
	//         lastName: "Wise",
	//         company: "Comveyer",
	//         employed: false
	//     },
	//     {
	//         firstName: "Nancy",
	//         lastName: "Waters",
	//         company: "Fuelton",
	//         employed: false
	//     },
 //    ];


	$scope.gridSettings = {

		// 	data: $scope.myData,
		enableFiltering: true,

		columnDefs: [
			{ name:'name', width:300, filters: [
			        {
			          condition: uiGridConstants.filter.CONTAINS,
			          placeholder: 'Contains'
			        },
		      		{
			          condition: uiGridConstants.filter.STARTS_WITH,
			          placeholder: 'Starts With'
			        },
			        {
			          condition: uiGridConstants.filter.ENDS_WITH,
			          placeholder: 'Ends With'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN,
			           placeholder: 'Greater Than'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
			          placeholder: 'Greater Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN,
			          placeholder: 'Less Than'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL,
			          placeholder: 'Less Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.NOT_EQUAL,
			          placeholder: 'Not Equal'
			        },
			      ]},
			{ name:'gender', width:300, filters: [
			        {
			          condition: uiGridConstants.filter.CONTAINS,
			          placeholder: 'Contains'
			        },
		      		{
			          condition: uiGridConstants.filter.STARTS_WITH,
			          placeholder: 'Starts With'
			        },
			        {
			          condition: uiGridConstants.filter.ENDS_WITH,
			          placeholder: 'Ends With'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN,
			           placeholder: 'Greater Than'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
			          placeholder: 'Greater Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN,
			          placeholder: 'Less Than'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL,
			          placeholder: 'Less Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.NOT_EQUAL,
			          placeholder: 'Not Equal'
			        },
			      ] },
			{ name: 'company',
		      // enableFiltering : false,
          	// filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-dropdown></div></div>', 
		 	  // filter: {	          	
	          	// condition: uiGridConstants.filter.ENDS_WITH,
	          	// options: [ {id: 1, value: 'Starts With'}, {id: 2, value: 'Ends With'}],
	          	// cellFilter: 'mapFilterType'
	          	// selectOptions: [ { value: '1', label: 'male' }, { value: '2', label: 'female' }, { value: '3', label: 'unknown'}, { value: '4', label: 'not stated' }, { value: '5', label: 'a really long value that extends things' } ]
		      // },
		      filters: [
			        {
			          condition: uiGridConstants.filter.CONTAINS,
			          placeholder: 'Contains'
			        },
		      		{
			          condition: uiGridConstants.filter.STARTS_WITH,
			          placeholder: 'Starts With'
			        },
			        {
			          condition: uiGridConstants.filter.ENDS_WITH,
			          placeholder: 'Ends With'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN,
			           placeholder: 'Greater Than'
			        },
			        {
			          condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
			          placeholder: 'Greater Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN,
			          placeholder: 'Less Than'
			        },
			        {
			          condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL,
			          placeholder: 'Less Than or Equal'
			        },
			        {
			          condition: uiGridConstants.filter.NOT_EQUAL,
			          placeholder: 'Not Equal'
			        },
			      ]
	    	},
		],
		// paginationPageSizes: 1,
  //       useCustomPagination: false,
  //       useExternalPagination: false,
  //       enableSorting: false,
  //       // excessRows:$scope.myData.length,
  //       enableSelectAll: false,
  //       enableCellEdit: false,
  //       enableRowSelection: true,
  //       enableRowHeaderSelection: false,
  //       multiSelect: false,
  //       enableColumnMenus: false,
  //       enableVerticalScrollbar: 1,
  //       enableHorizontalScrollbar:2,
  //       selectionRowHeaderWidth: 24,
  //       RowHeaderHeight: 40,
  //       rowHeight: 40,
  //       columnResize: true,
  //       enablePagination: true,
  //       enablePaginationControls: false,
  //       noUnselect : true,
  //       gridFooterTemplate: "<div>Footer</div>",
           paginationPageSizes: [10, 20, 30],
	       paginationPageSize: 10,
        
        onRegisterApi: function(gridApi) {$scope.gridApi = gridApi;}

	};

	$http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
	  .success(function(data) {
	    $scope.gridSettings.data = data;
	});
}])