'use strict'
angular.module("britishGas")
	   .controller("menuController", menuController);

function menuController($scope,$http){
	$http({
		method : "GET",
		url : "assets/data/data.json"
	}).then(function mySucces(response) {
		$scope.responseddata=response.data;			
	}, function myError(response) {
		console.log(response);
	});
	  $scope.dropdownchk = true;
      $scope.change = function() { 
	      $scope.dropdownchk=!$scope.dropdownchk;  
      };
      $scope.hovereff = function() { 
      	  $scope.dropdownchk=true; 
      };
}