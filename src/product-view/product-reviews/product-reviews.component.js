function productReviewCtrl() {
	let vm = this;

	// The individual customer reviews should probably be refactored into their own component in the future
	vm.customerReviewPro = null;
	vm.customerReviewCon = null;
	vm.totalReviews = null;
	vm.overallRating = null;

	vm.getStarRating = function (rating) {
		const MAX_RATING = 5;
		const STAR_ICON = '<i class="material-icons full-star">star</i>';
		const EMPTY_STAR_ICON = '<i class="material-icons empty-star">star</i>';

		let starRating = '';
		for (let i = 0; i < MAX_RATING; i++) {
			if(i < rating) {
				starRating += STAR_ICON;
			} else {
				starRating += EMPTY_STAR_ICON;
			}
		}

		return starRating;
	}

	vm.$onInit = function () {
		let customerReview = vm.customerReview[0];
		vm.customerReviewPro = customerReview.Pro[0];
		vm.customerReviewCon = customerReview.Con[0];
		vm.customerReviewPro.datePosted = new Date(vm.customerReviewPro.datePosted);
		vm.customerReviewCon.datePosted = new Date(vm.customerReviewCon.datePosted);
		vm.totalReviews = customerReview.totalReviews;
		vm.overallRating = customerReview.consolidatedOverallRating;
	}
}

export default {
	bindings: {
		customerReview: '<'
	},
	template: require('./product-reviews.component.html'),
	controller: productReviewCtrl,
	controllerAs: 'vm'
}
