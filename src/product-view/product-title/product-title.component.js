function productTitleCtrl() {

}

export default {
	template: require('./product-title.component.html'),
	controller: productTitleCtrl,
	controllerAs: 'vm',
	bindings: {
		product: '<'
	}
}
