function productOffersCtrl() {
	let vm = this;

	vm.offerPrice = null;

	vm.$onInit = function () {
		vm.offerPrice = vm.offers[0].OfferPrice[0];
	}
}

export default {
	bindings: {
		offers: '<'
	},
	template: require('./product-offers.component.html'),
	controller: productOffersCtrl,
	controllerAs: 'vm'
}
