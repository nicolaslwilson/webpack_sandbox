function productReturnCtrl() {
	let vm = this;

	vm.returnPolicyCopy = null;

	vm.$onInit = function () {
		vm.returnPolicyCopy = vm.returnPolicy[0].legalCopy;
	}
}

export default {
	bindings: {
		returnPolicy: '<'
	},
	template: require('./product-return.component.html'),
	controller: productReturnCtrl,
	controllerAs: 'vm'
}
