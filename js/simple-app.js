var app = angular.module('app', ['super.simple.tree', 'simple.tree', 'collection']);

app.controller('MainCtrl', function($scope) {

  $scope.locations =  [
      {    name: 'Europe',
          children: [
              {    name: 'Italy',
                  children: [
                      {    name: 'Rome' },
                      {    name: 'Milan'    }
                  ]},
              {    name: 'Spain'}
          ]
      },
      {    name: 'South America',
          children: [
              {    name: 'Brasil'   },
              {    name: 'Peru' }
          ]
      }
  ];

  $scope.data = { 
		name: "Skåne",
		children: [
			{
				name: "lund",
				children: [
					{ name: 1500, children: []	},
					{ name: 1600, children: []	}
				]
			},
			{
				name: "malmö",
				children: [
					{ name: 1500, children: []	}
				]
			},
			{
				name: "genarp",
				children: [
					{ name: 1600, children: []	},
					{ name: 1700, children: []	}
				]
			},
		]
	};
	
	$scope.trad = [$scope.data];
 
});
