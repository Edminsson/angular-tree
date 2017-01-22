import {superSimpleTree} from "./super.simple.tree.js"
import {superSimpleNode} from "./super.simple.node.js"

angular.module('super.simple.tree', [])

.directive('superSimpleTree', superSimpleTree)

.directive('superSimpleNode', superSimpleNode);
