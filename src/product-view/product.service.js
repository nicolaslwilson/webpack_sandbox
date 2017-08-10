ProductService.$inject = ['$http'];

export default function ProductService ($http) {

	this.getItemData = function () {
		let basePath = window.location.pathname;
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
