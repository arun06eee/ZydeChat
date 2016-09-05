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