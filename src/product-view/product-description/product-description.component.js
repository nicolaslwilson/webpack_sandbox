function productDescriptionCtrl() {
	let vm = this;

	vm.features = null;

	vm.$onInit = function () {
		vm.features = vm.itemDescription[0].features;
	}
}

export default {
	bindings: {
		itemDescription: '<'
	},
	template: require('./product-description.component.html'),
	controller: productDescriptionCtrl,
	controllerAs: 'vm'
}
