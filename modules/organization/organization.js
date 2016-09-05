(function(){
	"use strict";
	ZYDECHAT.controller('organizationCntrl', function($scope, $state) {
		//Page Include
		angular.extend($scope, {
			pageURL: 'view/organization/',
			templates : [
				{name: 'Organization', url : 'organizationSetup.php' }, 
				{name: 'Price List', url : 'organizationPriceList.php' },
				{name: 'Billing', url : 'organizationBilling.php' },
				{name: 'Billing', url : 'organizationInvoice.php' },
				{name: 'User Agent', url : 'organizationUserAgent.php' },
				{name: 'Agent Log', url : 'organizationAgentLog.php' },
				{name: 'Messenger', url : 'organizationMessenger.php' },
			],
			templatesModal: [
	
			]
		});

		angular.extend($scope, {
			init: function() {
				$("title").html("Organization");
				console.log("hiiiiii")
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