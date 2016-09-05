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
							<li class="active"><a href="#organisation" class="parentClass forScroll">Organisation</a></li>
							<li><a href="#pricelist" class="parentClass forScroll">Price List</a></li>
							<li><a href="#billing" class="parentClass forScroll">Billing</a></li>
							<li><a href="#invoice" class="parentClass forScroll">Invoice</a></li>
							<li><a href="#useragent" class="parentClass forScroll">User Agent</a></li>
							<li><a href="#agentlog" class="parentClass forScroll">Agent Log</a></li>
							<li><a href="#messenger" class="parentClass forScroll">Messenger</a></li>
						</ul>
					</nav>
				
				</div>
			</div>
			<div class="col-sm-12 col-xs-12 col-md-10 col-lg-10 fill col-md-offset-2 col-lg-offset-2 rightContentPanel divResize" id="Organisation">
				<div class="includeFile" ng-repeat="temp in templates">
					<section class="Organisation">
						<div ng-include="pageURL+temp.url"></div>
					</section>
					<hr/>
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