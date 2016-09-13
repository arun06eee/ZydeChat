ZYDECHAT.factory('ajaxFactory',function ($http, $q) {
	var ajaxFuctions = {}

	/**
	* AjaxCall function
	* @param {object}  url.
	* @param {object}  method.
	* @param {object}  dataType.
	* @param {object}  data.
	* @param {object}  callback.
	* @return {object} callback
	*/

	ajaxFuctions.ajaxCall = function(url, method, dataType, data, callback, elem) {
		data = data || {};
		var defer = $q.defer();
		$http({
			url: url,
			method: method,
			dataType: dataType,
			headers: {
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			},
			data: $.param(data)
		}).success(function (result, status, header, config) {
			defer.resolve({status: status, result: result});
			var result = callback({status: status, result: result});
			defer.resolve();
			return result;
		}).error(function (status, error, config, Result) {
			defer.reject("error occured.");
			var result = callback({status: status});
			return result;
		})

		return defer.promise;
	};

	return ajaxFuctions;
});