<!DOCTYPE html>
<html ng-app="ZYDECHAT">
<head>
	<title>ZydeSoft-ZYDECHAT</title>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css" />

	<!-- custom Style -->
	<link rel="stylesheet" href="css/custom.css" />
	
	<!-- Style Link -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600">

</head>
<body ng-controller="commonCtrl" ng-cloak>

	<div ui-view ng-cloak></div>

	<!-- JQuery Plugins -->
	<script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>

	<!-- Angularjs Plugins -->
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-ui-router.js"></script>

	<!-- Bootstrap Plugins -->
	<script type="text/javascript" src="js/bootstrap.min.js"></script>

	<!-- Custom Script -->
	<script src="dist/main.js"></script>
	
</body>
</html>