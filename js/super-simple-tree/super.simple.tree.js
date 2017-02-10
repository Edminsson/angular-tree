module.exports = superSimpleTree;

function superSimpleTree () {
  return {
    template: '<super-simple-node ng-repeat="node in tree"></super-simple-node>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
}