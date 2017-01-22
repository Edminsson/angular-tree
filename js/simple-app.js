import "js/super-simple-tree/super.simple.tree.module.js"
import "js/simple-tree/simple.tree.module.js"
import "js/collection/collection.module.js"
import {treeData} from "js/treeFactory.js"
import {simpleController} from "js/simpleController.js"

angular.module('app', ['super.simple.tree', 'simple.tree', 'collection'])
.factory('treedata', treeData)
.controller('MainCtrl', simpleController);
