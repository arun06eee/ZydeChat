(function(){
	"use strict";
	ZYDECHAT.controller('organizationCntrl', function($scope, $state, ajaxFactory) {
		//Page Include
		angular.extend($scope, {
			pageURL: 'view/organization/',
			templates : [
				{name: 'Organization', url : 'organizationSetup.php', hasModal : 1}, 
				{name: 'Price List', url : 'organizationPriceList.php', hasModal : 2 },
				{name: 'Billing', url : 'organizationBilling.php', hasModal : 3 },
				{name: 'Billing', url : 'organizationInvoice.php', hasModal : 4 },
				{name: 'User Agent', url : 'organizationUserAgent.php', hasModal : 5 },
				{name: 'Agent Log', url : 'organizationAgentLog.php', hasModal : 6 },
				{name: 'Messenger', url : 'organizationMessenger.php', hasModal : 7 },
			],
			templatesModal: [
	
			]
		});

		// Scroll
		angular.extend($scope, {
			onMenuHeaderClick: function(evt) {
				angular.element('table').resize();
			}
		});

		//Request Ajax Service
		angular.extend($scope, {
			request: function (reqData, callback ) {
				var url = reqData.which;
				ajaxFactory.ajaxCall(url , reqData.oMethod, reqData.oType, reqData.data, function(oResult) {
					if (reqData.data.debug == "true") {
						console.log(reqData.which + " Response: " + JSON.stringify(oResult.result));
					}

					callback(oResult);
				});
			}
		});

		// Initialization
		angular.extend($scope, {
			init: function() {
				angular.element("title").html("Organization");
				$scope.fnOrganisationSetupInit();
				$scope.fnOrganisationPriceListInit();
				
			},
			update : function() {

			},
			show: function(evt){
				
			},
			fnSubmitUser: function(){
				$state.go("organization");
			}
		});

		// Organisation Table Create
		angular.extend($scope, {
			fnOrganisationTablesMap: function(id, headerData, tmpArr) {
				if($('#'+id +' table').length == 0){
					$('#'+id).append('<table class="table mtB0"></table>');
				}

				if($('#'+id+ ' table').hasClass('dataTable')) {
					$('#'+id+ ' .dataTables_wrapper').remove();
					$('#'+id).append('<table class="table mtB0"></table>');
				}
				$('#'+id+ ' table').empty();

				var tableContent = $('#'+id +' table').dataTable({
					"destroy": true,
					"bDestroy": true,
					"aoColumnDefs": headerData,
					"aaData": tmpArr,
					"iDisplayLength" : 8,
					"oLanguage": {
						"sLengthMenu" :"| View <span class='valueStyle1 activeGroup'>25</span>&nbsp;&nbsp;<span class='valueStyle1' >50</span>&nbsp;&nbsp;<span class='valueStyle1'>100</span>",
						"sLengthMenu" : " ",
						"sInfo": "_START_ - _END_ of _TOTAL_",
						"sInfoEmpty": "0 - 0 of _MAX_",
						'oPaginate' : {
							"sFirst": "&laquo;",
							"sLast": "&raquo;",
							"sNext": "&rsaquo;",
							"sPrevious": "&lsaquo;",
						},
						"sInfoFiltered": '',
					},
					"scrollY": "450px",
					scrollX: false,
					scrollCollapse: true,
					paging: true,
					pagingType: "full_numbers",
					"dom": '<"top"f>rt<"bottom"ilp><"clear">',
					"bRetrieve": true
				}).on('order.dt', function(e) {

				}).on('search.dt', function() {

				}).on('page.dt', function() {

				}).on( 'length.dt', function ( e, settings, len ) {

				});

/* 
				if(id == 'configureStylesDetails'){
					$('#configureStyleSearch').unbind('keyup change').on( 'keyup change', function (e) {
						tableContent.fnFilter( $(this).val() );
						e.preventDefault();
					});
				}
 */
				setTimeout(function(){
					$('#'+id).resize();
				},10);
			}		
		});

		// Organisation Setup
		angular.extend($scope, {
			OrganisationoTable : [],
			fnOrganisationSetupInit : function () {
				var lookupData = {};
				$scope.request({'which':'./ajax/organisationsetupLookup.json', 'oMethod':'POST', 'oType':'JSON', 'data':lookupData}, $scope.fnOrganisationSetupLookup);
			},
			fnOrganisationSetupLookup : function(data) {
				data = data.result;

				$scope.OrganisationSetupoTable = data;

				var headerData = $scope.fnOrganisationSetupHeader();
				setTimeout(function(){
					$scope.fnOrganisationTablesMap('organizationSetupDetails', headerData, $scope.OrganisationSetupoTable);
				}, 50);
			},
			fnOrganisationSetupHeader : function(){
				var headerData = [
					{
						"sTitle" : "Name",
						"mData" : "organisation_name",
						"aTargets": [0]
					},
					{
						"sTitle" : "Address",
						"mData" : "organisation_address",
						"aTargets": [1]
					},
					{
						"sTitle" : "Email",
						"mData" : "organisation_email",
						"aTargets": [2]
					},
					{
						"sTitle" : "Total User Agent",
						"mData" : "organisation_total_useragent",
						"aTargets": [3]
					},
				];

				return headerData;
			},
		});

		// Organisation Price List
		angular.extend($scope, {
			OrganisationPriceListoTable : [],
			fnOrganisationPriceListInit : function () {
				var lookupData = {};
				$scope.request({'which':'./ajax/priceListLookup.json', 'oMethod':'POST', 'oType':'JSON', 'data':lookupData}, $scope.fnOrganisationPriceListLookup);
			},
			fnOrganisationPriceListLookup : function(data) {
				data = data.result;

				$scope.OrganisationPriceListoTable = data;

				var headerData = $scope.fnOrganisationPriceListHeader();
				setTimeout(function(){
					$scope.fnOrganisationTablesMap('organizationPriceListDetails', headerData, $scope.OrganisationPriceListoTable);
				}, 50);
			},
			fnOrganisationPriceListHeader : function(){
				var headerData = [
					{
						"sTitle" : "Name",
						"mData" : "pricelist_name",
						"aTargets": [0]
					},
					{
						"sTitle" : "Total User Agent",
						"mData" : "pricelist_total_agent",
						"aTargets": [1]
					},
					{
						"sTitle" : "Price",
						"mData" : "pricelist_price",
						"aTargets": [2]
					},
					{
						"sTitle" : "Description",
						"mData" : "pricelist_description",
						"aTargets": [3]
					}
				];

				return headerData;
			},
		});
		
	})
})();