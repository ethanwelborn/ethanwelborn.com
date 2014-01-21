'use strict';

app.controller('WorkCtrl', ['$scope', function ($scope) {
	$scope.currentProj = {};
	$scope.projs = [
		{
			title: 'the title',
			blurb: 'the blurb',
			content: 'the content'
		},
		{
			title: 'the title 2',
			blurb: 'the blurb 2',
			content: 'the content 2'
		}
	];

	$scope.showProj = function(proj) {
		$scope.currentProj = proj;
	};
}]);
