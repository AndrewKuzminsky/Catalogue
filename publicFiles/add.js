var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http){

	$scope.add = function() {

		var connection = $http(
			{
				method: "post",
				url: "http://localhost:3000/item",
				data:
					{
						"nameID": $scope.nameID,
						"name": $scope.name,
						"brand": $scope.brand,
						"color": $scope.color,
						"price": $scope.price
					}

			})

		.then(function(response)
			{
				$scope.message = "Add Item: Success - status: " + response.status;
				$scope.nameID = null;
				$scope.name = null;
				$scope.brand = null;
				$scope.color = null;
				$scope.price = null;
			})

		.catch(function(response)
			{
				
			})

		.finally (function(config)
			{
				alert($scope.message);
			});

	};

});
//end controller
