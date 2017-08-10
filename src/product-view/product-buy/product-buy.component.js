function productBuyCtrl() {
	let vm = this;

	vm.availInStore = null;
	vm.availOnline = null;
	vm.quantity = 1;

	vm.$onInit = function () {
		let purchasingChannelCode = vm.product.purchasingChannelCode;
		if (purchasingChannelCode == 0 || purchasingChannelCode == 2) {
			vm.availInStore = true;
		}
		if (purchasingChannelCode == 0 || purchasingChannelCode == 1) {
			vm.availOnline = true
		}
	}
}

export default {
	bindings: {
		product: '<'
	},
	template: require('./product-buy.component.html'),
	controller: productBuyCtrl,
	controllerAs: 'vm'
}
