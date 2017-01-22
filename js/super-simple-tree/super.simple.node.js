function superSimpleNode ($compile) {
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
}

module.exports = superSimpleNode;