var app = angular.module("myApp2", []);

app.controller("myController2", function($scope, $http)
{
	$scope.nameID = null;
	$scope.items = null;
	$scope.message = null;

	// start delete
	$scope.delete = function()
	{
		if($scope.nameID == null)
		{
			alert("You did not enter anything, please enter something.");
		}
		var connection = $http(
		{
			method: "delete",
			url: "http://localhost:3000/item/" + $scope.nameID

		})
		.then(function(response){

			$scope.message = "Delete Item: Success - status: "
				+ response.status + $scope.nameID;

			$scope.nameID = null;
		})
		.catch(function(response){

		})

		.finally(function(config)
		{
			alert($scope.message);
		})
		// end http

	};
	// end edit


});
//end controller
