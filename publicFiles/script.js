var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
	{
		$scope.items = null;
		$scope.message = null;
		$scope.filterString = '';
		$scope.sortByName = false;
		$scope.sortOrder = '';
		$scope.setSortOrder = function()
		{
			if($scope.sortByName)
			{
				$scope.sortOrder = 'name';
			}
			else
			{
				$scope.sortOrder = '';
			}
   	}
		var connection = $http(
		{
			method: "get",
			url: "http://localhost:3000/item"
		})

		.then(function(response)
		{
			response.data.forEach(function(item) {
				item.steps = null;
			});
			$scope.items = response.data;
		})

		.catch(function(response)
		{
			// It is OK not to take any action here because it would be
			// clear to the user if the list operation is succesfull or not
		})

		.finally(function(config)	// induce a syntax error here and see what happens
		{
			// It is OK not to take any action here because it would be
			// clear to the user if the list operation is succesfull or not
		});

	});
