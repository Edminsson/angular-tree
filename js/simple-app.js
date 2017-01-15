var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.data = { 
		name: "Skåne",
		children: [
			{
				name: "lund",
				children: [
					{ name: 1500, children: []	},
					{ name: 1600, children: []	}
				]
			},
			{
				name: "malmö",
				children: [
					{ name: 1500, children: []	}
				]
			},
			{
				name: "genarp",
				children: [
					{ name: 1600, children: []	},
					{ name: 1700, children: []	}
				]
			},
		]
	};
	
	$scope.trad = [$scope.data];
  
  
});

app.directive('simplenodeTree', function () {
  return {
    template: '<simplenode ng-repeat="node in tree"></simplenode>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
});

app.directive('simplenode', function ($compile) {
  return {
    restrict: 'E',
    replace: true,
    template: '<li><span> {{ node.name }} </span></li>',
    link: function (scope, element) {
      if (scope.node && scope.node.children && scope.node.children.length > 0) {
        var childNode = $compile('<ul class="tree"><simplenode-tree children="node.children"></simplenode-tree></ul>')(scope);
        element.append(childNode);
      }
    }
  };
});

app.directive('nodeTree', function () {
  return {
    template: '<node ng-repeat="node in tree"></node>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
});

app.directive('node', function ($compile) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/node-template.html', // HTML for a single node.
    link: function (scope, element) {
      /*
       * Here we are checking that if current node has children then compiling/rendering children.
       * */
      if (scope.node && scope.node.children && scope.node.children.length > 0) {
        var childNode = $compile('<ul class="tree" ng-if="!node.visibility"><node-tree children="node.children"></node-tree></ul>')(scope);
        element.append(childNode);
      }
    },
    controller: ["$scope", function ($scope) {
      // This function is for just toggle the visibility of children
      $scope.toggleVisibility = function (node) {
        node.visibility = !node.visibility;
      };
    }]
  };
});