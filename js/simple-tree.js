angular.module('simple.tree', [])

.directive('simpleTree', function () {
  return {
    template: '<simple-node ng-repeat="node in tree"></simple-node>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
})

.directive('simpleNode', function ($compile) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/node-template.html', // HTML for a single node.
    link: function (scope, element) {
      /*
       * Here we are checking that if current node has children then compiling/rendering children.
       * */
      if (scope.node && scope.node.children && scope.node.children.length > 0) {
        var childNode = $compile('<ul class="tree" ng-if="!node.visibility"><simple-tree children="node.children"></simple-tree></ul>')(scope);
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