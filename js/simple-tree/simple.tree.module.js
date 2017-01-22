import {simpleTree} from "./simple.tree.js"
import {simpleNode} from "./simple.node.js"

angular.module('simple.tree', [])

.directive('simpleTree', simpleTree)

.directive('simpleNode', simpleNode);