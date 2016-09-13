<div ng-controller="organizationCntrl" ng-init="init()" id="organizationCntrl">

	<nav class="navbar navbar-inverse navbar-fixed-top headernavbar">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#" data-toggle="modal" >
					<span id="main_icon" class="glyphicon glyphicon-menu-hamburger toggleBtn"></span>
					<span class="brandName" id="brandName" title="ZydeChat">
					Zyde<span>Chat</span></span>
				</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right navbar-right-menu" ng-show="true">
					<li class="profile_dd">
						<a href="#"><i class="fa fa-cog" aria-hidden="true" style="width:20px;"></i>Setting</a>
					</li>
					<li class="profile_dd">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="glyphicon glyphicon-user icons"></i>Arun kumar <span class="caret"></span></a>
						<ul class="dropdown-menu userSetting_list">
							<li><a href="./#!/home" ng-click="common.fnLogout()">Logout</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div id="eventsSetupContent" class="container-fluid fill wrapper">
		<div class="row">
			<div id="leftNavigation" class="hidden-xs hidden-sm col-lg-2 col-md-2 hgt100">
				<div  class="hgt100 ABBborder-rgt">				
					<nav class="leftnavbar leftSidePanel" id="leftsidebar">
						<ul class="nav nav-stacked" role="tablist">
							<li ng-class="{active:currentPageshow == 1}"><a class="parentClass" ng-click="currentPageshow = 1;onMenuHeaderClick($event);" href="#organizationSetup"><i class="fa fa-home" aria-hidden="true"></i>Organisation</a></li>
							<li ng-class="{active:currentPageshow == 2}"><a class="parentClass" ng-click="currentPageshow = 2;onMenuHeaderClick($event);" href="#pricelist" 	><i class="fa fa-list" aria-hidden="true"></i>Price List</a></li>
							<li ng-class="{active:currentPageshow == 3}"><a class="parentClass" ng-click="currentPageshow = 3;onMenuHeaderClick($event);" href="#billing" 	><i class="fa fa-inr" aria-hidden="true"></i>Billing</a></li>
							<li ng-class="{active:currentPageshow == 4}"><a class="parentClass" ng-click="currentPageshow = 4;onMenuHeaderClick($event);" href="#invoice" 	><i class="fa fa-money" aria-hidden="true"></i>Invoice</a></li>
							<li ng-class="{active:currentPageshow == 5}"><a class="parentClass" ng-click="currentPageshow = 5;onMenuHeaderClick($event);" href="#useragent" 	><i class="fa fa-user" aria-hidden="true"></i>User Agent</a></li>
							<li ng-class="{active:currentPageshow == 6}"><a class="parentClass" ng-click="currentPageshow = 6;onMenuHeaderClick($event);" href="#agentlog"	><i class="fa fa-user-plus" aria-hidden="true"></i>Agent Log</a></li>
							<li ng-class="{active:currentPageshow == 7}"><a class="parentClass" ng-click="currentPageshow = 7;onMenuHeaderClick($event);" href="#messenger" 	><i class="fa fa-comments-o" aria-hidden="true"></i>Messenger</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="col-sm-12 col-xs-12 col-md-10 col-lg-10 fill col-md-offset-2 col-lg-offset-2 rightContentPanel" id="Organisation" ng-init="currentPageshow =  1" >
				<div class="includeFile" ng-repeat="temp in templates">
					<section class="Organisation" ng-show="currentPageshow == temp.hasModal">
						<div ng-include="pageURL+temp.url"></div>
					</section>
					<hr ng-show="currentPageshow == temp.hasModal" />
				</div>
			</div>
		</div>
		<!--- Modal 
		<div ng-repeat="temp in templatesModal">
			<div ng-include="pageURL+temp.url" ></div>
		</div>
		-->
	</div>
</div>