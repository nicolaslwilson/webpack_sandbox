import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';
import 'angular-material';
import 'angular-material/angular-material.css';

import './style.css';

import productView from './product-view';
import routing from './app.config.js';

angular.module('app',[uirouter, productView, ngSanitize, 'ngMaterial', ])
	.config(routing);

