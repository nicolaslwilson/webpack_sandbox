routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('productview', {
    url: '/',
    template: require('./product.html'),
    resolve: {
      product: ['productService', (productService) => {
        return productService.getItemData();
      }]
    }
  });
}
