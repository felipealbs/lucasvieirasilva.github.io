'use strict';
app.controller('siteController', ['$scope', '$timeout', '$filter', 'siteService', 'toaster',
function ($scope, $timeout, $filter, siteService, toaster) {

	/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

	$timeout(function () {
		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "!",
			speed: 3000
		});
	}, 100);

	$scope.pageState = {
		waiting: false
	};

	$scope.buttonSend = {
	    display: $filter('translate')('button_send')
	}

	$scope.$watch('pageState.waiting', function (value) {
	    if (value) {
	        $scope.buttonSend.display = $filter('translate')('button_sending');
	    } else {
	        $scope.buttonSend.display = $filter('translate')('button_send');
	    }
	});

	$scope.contact = {
		Name: '',
		Email: '',
		Message: ''
	};

	var database = $filter('translate')('database');

	$scope.textProfessionalProfile = $filter('translate')('text_professional_profile_1');

	$scope.skills = [
		{ name: '.NET (C#, WPF, Windows Forms, MVC, Asp.Net, Web Api)', level: 4 },
		{ name: 'Web (Html5, Css3, JavaScript, AngularJs, Node.Js, Ajax, jQuery)', level: 4 },
		{ name: database + ' (Oracle, SQLServer, MySql)', level: 2 }
	];

	$scope.currentdate = new Date();

	$scope.send = function (form) {
		if (form.$valid) {
			$scope.pageState.waiting = true;
			siteService.send($scope.contact).then(function (results) {
			    $scope.contact = {};
			    var message = $filter('translate')('sucess_send_message');

			    toaster.pop('success', '', message);

				$scope.pageState.waiting = false;
			}, function (error) {
			    var message = $filter('translate')('error_send_message');

			    toaster.pop('error', '', message);
				$scope.pageState.waiting = false;
			});
		}
	}

}]);
