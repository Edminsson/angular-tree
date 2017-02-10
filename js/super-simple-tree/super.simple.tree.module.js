var superSimpleTree = require("./super.simple.tree.js");
var superSimpleNode = require("./super.simple.node.js");

angular.module('super.simple.tree', [])

.directive('superSimpleTree', superSimpleTree)

.directive('superSimpleNode', superSimpleNode);
