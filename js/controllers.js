
var multilanguageControllers = angular.module('multiLanguageController', []);
multilanguageControllers.controller('changeToGerman',['$scope', '$translate', function($scope, $translate) {
	
	var userLang = navigator.language || navigator.userLanguage;
	
	$scope.myCount = 10;
	$scope.changeLanguage =function() {
		$translate.use(userLang);
	}
	
	$scope.changeLanguagetoDutch = function() {
		$translate.use('de');
	}
}]);
