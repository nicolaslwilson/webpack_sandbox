function productPromotionsCtrl() {
	let vm = this;

	vm.promotionDescriptions = null;

	vm.$onInit = function () {
		let promotions = vm.promotions;
		if(promotions) {
			vm.promotionDescriptions = [];
			for(let promotion of vm.promotions) {
				let description = promotion.Description[0].shortDescription;
				vm.promotionDescriptions.push(description);
			}
		}
	}
}

export default {
	bindings: {
		promotions: '<'
	},
	template: require('./product-promotions.component.html'),
	controller: productPromotionsCtrl,
	controllerAs: 'vm'
}
