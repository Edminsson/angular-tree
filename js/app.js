var app = angular.module('app', ['ui.tree']);

app.controller('mainController', function($scope){
    $scope.title = "Testing angular-ui-tree";
    $scope.deleteNodes = function(){
        $scope.data[1].nodes = [];
    };

    $scope.data = [{
    'id': 1,
    'title': 'node1',
    'nodes': [
        {
        'id': 11,
        'title': 'node1.1',
        'nodes': [
            {
            'id': 111,
            'title': 'node1.1.1',
            'nodes': []
            }
        ]
        },
        {
        'id': 12,
        'title': 'node1.2',
        'nodes': []
        }
    ]
    }, {
    'id': 2,
    'title': 'node2',
    'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
    'nodes': [
        {
        'id': 21,
        'title': 'node2.1',
        'nodes': []
        },
        {
        'id': 22,
        'title': 'node2.2',
        'nodes': []
        }
    ]
    }, {
    'id': 3,
    'title': 'node3',
    'nodes': [
        {
        'id': 31,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    , {
    'id': 4,
    'title': 'node4',
    'nodes': [
        {
        'id': 431,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    , {
    'id': 5,
    'title': 'node5',
    'nodes': [
        {
        'id': 531,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    , {
    'id': 6,
    'title': 'node6',
    'nodes': [
        {
        'id': 631,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    , {
    'id': 7,
    'title': 'node7',
    'nodes': [
        {
        'id': 731,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    , {
    'id': 8,
    'title': 'node8',
    'nodes': [
        {
        'id': 831,
        'title': 'node83.1',
        'nodes': []
        }
        ,{
        'id': 832,
        'title': 'node83.2',
        'nodes': []
        }
        ,{
        'id': 833,
        'title': 'node83.3',
        'nodes': []
        }
        ,{
        'id': 834,
        'title': 'node83.4',
        'nodes': []
        }

    ]
    }
    , {
    'id': 9,
    'title': 'node9',
    'nodes': [
        {
        'id': 931,
        'title': 'node3.1',
        'nodes': []
        }
    ]
    }
    
    
    ];





});