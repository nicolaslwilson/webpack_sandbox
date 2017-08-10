function productImagesCtrl() {
	let vm = this;

	vm.carouselImages = null;
	vm.totalImages = null;
	vm.currentIndex = null;

	vm.nextImage = function() {
		vm.currentIndex = vm.nextIndex();
	}

	vm.nextIndex = function() {
		let index = vm.currentIndex;
		index++;
		if (index >= vm.totalImages) {
			index = 0;
		}
		return index;
	}

	vm.previousIndex = function() {
		let index = vm.currentIndex;
		index--;
		if (index < 0) {
			index = vm.totalImages - 1;
		}
		return index;
	}

	vm.previousImage = function() {
		vm.currentIndex = vm.previousIndex();
	}

	vm.$onInit = function() {
		let images = vm.images[0];
		if (images) {
			vm.carouselImages = [];
			vm.totalImages = images.imageCount;
			vm.currentIndex = 0;

			let primaryImage = images.PrimaryImage[0];
			vm.carouselImages.push(primaryImage);

			let alternateImages = images.AlternateImages;
			for (let image of alternateImages) {
				vm.carouselImages.push(image);
			}
		}
	};
}

export default {
	template: require('./product-images.component.html'),
	controller: productImagesCtrl,
	controllerAs: 'vm',
	bindings: {
		images: '<'
	}
}
