/*! main - v1.0.0 - 2016-09-04 */var baseTag = document.createElement('base');
baseTag.href = document.location.href.replace(/\#.*/,'').replace(/\.*/,'');
document.head.appendChild(baseTag);
var ZYDECHAT = angular.module("ZYDECHAT", ['ui.router']);
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
(function(window, angular){
	'use strict';
	ZYDECHAT.config(function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
		$provide.decorator('$sniffer', function($delegate) {
			$delegate.history = false;
			return $delegate;
		});

	 	$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$urlRouterProvider.otherwise('login');

		$stateProvider
			.state('organization', {
				url: "/organization",
				templateUrl: "./view/organization/organization.php",
				//resolve: { authenticate: authenticate }
			})
			.state('login', {
				url: "/login",
				templateUrl: "./view/login/login.html",
				cache: false
				//resolve: { authenticate: authenticate }
		});

		/* 
		function authenticate($q, browserCookie, $state, $timeout) {
			if (browserCookie.getCookie("loggedin")) {
				$timeout(function() {
					if(!browserCookie.getCookie("events")){
						$(".topNav").addClass("hidden");
						$("#topnav_2").removeClass("hidden");
						$state.go('analytics');
					}else {
						if($state.current.name == 'login') {
							$state.go('analytics');
						}else {
							var currentPage = $state.current.name || browserCookie.getCookie("currentPage");
							window.location.href = "./#/"+ currentPage;
							browserCookie.setCookie("currentPage", currentPage);
						}
					}
				}, 0)
			} else {
				$timeout(function() {
					$state.go('login');
				},0)
			}
		}
		*/
	});
	ZYDECHAT.run(['$location',function($location){}]);
})(window, window.angular);