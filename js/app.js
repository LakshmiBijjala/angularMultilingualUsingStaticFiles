'use strict';

/* App Module */

var multilanguage = angular.module('multilanguage', ['pascalprecht.translate','multiLanguageController']);

multilanguage.config(['$translateProvider',
  function($translateProvider) {
	  
	  //This is for loading key value pairs anywhere from filesystem
	  $translateProvider.useStaticFilesLoader({
		  prefix: 'localjson/lang-',
		  suffix: '.json'
	  });
	  
	  
	 $translateProvider.use('de');
	  
	       
  }]);

