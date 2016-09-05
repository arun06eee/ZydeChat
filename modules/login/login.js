(function(){
	"use strict";
	ZYDECHAT.controller('loginCntrl', function($scope, $state) {

		//Page Include
		angular.extend($scope, {
			pageURL: 'view/login/',
			loginModel:[],
			login:{},
		});

		angular.extend($scope, {
			init: function() {
				$("title").html("Login");
			},
			update : function() {

			},
			show: function() {
		
			},
			fnSubmitUser: function(){
				$state.go("organization");
			}
		});
	})
})();