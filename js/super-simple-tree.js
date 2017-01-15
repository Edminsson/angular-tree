angular.module('super.simple.tree', [])

.directive('superSimpleTree', function () {
  return {
    template: '<super-simple-node ng-repeat="node in tree"></super-simple-node>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
})

.directive('superSimpleNode', function ($compile) {
  return {
    restrict: 'E',
    replace: true,
    template: '<li><span> {{ node.name }} </span></li>',
    link: function (scope, element) {
      if (scope.node && scope.node.children && scope.node.children.length > 0) {
        var childNode = $compile('<ul class="tree"><super-simple-tree children="node.children"></super-simple-tree></ul>')(scope);
        element.append(childNode);
      }
    }
  };
});
