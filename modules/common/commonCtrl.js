(function(){
	"use strict";
	ZYDECHAT.controller('commonCtrl', function($scope){
		angular.extend($scope,{
			HELPDESKTabs:[
				{
					tab : "Organization",
					name:"/organization",
					sub:"/organization",
					nav:"organization"
				}
			]
		});

		angular.extend($scope,{
			init: function() {

			},
			show: function(evt){

			},
		});
	})
})();
