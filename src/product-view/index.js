import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routes from './product.routes.js';
import productService from './product.service.js'

//Component Imports
import productTitle from './product-title/product-title.component.js';
import productImages from './product-images/product-images.component.js';
import productOffers from './product-offers/product-offers.component.js';
import productPromotions from './product-promotions/product-promotions.component.js';
import productBuy from './product-buy/product-buy.component.js';
import productReturn from './product-return/product-return.component.js';
import productShare from './product-share/product-share.component.js';
import productDescription from './product-description/product-description.component.js';
import productReviews from './product-reviews/product-reviews.component.js';

export default angular.module('app.productView', [uirouter])
	.config(routes)
	.component('productTitle', productTitle)
	.component('productImages', productImages)
	.component('productOffers', productOffers)
	.component('productPromotions', productPromotions)
	.component('productBuy', productBuy)
	.component('productReturn', productReturn)
	.component('productShare', productShare)
	.component('productDescription', productDescription)
	.component('productReviews', productReviews)
	.service('productService', productService)
	.name;
