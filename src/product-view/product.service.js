ProductService.$inject = ['$http', '$location'];

export default function ProductService ($http, $location) {

	this.getItemData = function () {
		let basePath = $location.path();
		return $http.get(basePath + 'assets/item-data.json')
			.then(_onSuccess, _onFailure);
	};


	function _onSuccess(response) {
		return response.data.CatalogEntryView[0];
	}

	function _onFailure(error) {
		console.error(error) //eslint-disable-line no-console
	}

	return this;
}
