export function simpleTree () {
  return {
    template: '<simple-node ng-repeat="node in tree"></simple-node>',
    replace: true,
    restrict: 'E',
    scope: {
      tree: '=children'
    }
  };
}