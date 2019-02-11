angular.module('app', ['ngResource', 'ngRoute'])
    .constant("appName", "restTestingApp")

    .controller("ProductCtrl", function ($http, $resource, $timeout) {

        var vm = this;
        var Product = $resource("/api/products/:productId");
        vm.product = new Product();

        function refreshData() {
            vm.products = Product.query();
            console.log(vm.products);
        }

        vm.getById = function (id) {
            if (id) {
                vm.productById = Product.get({productId: id});
            } else {
                vm.productById = null;
            }
        };

        vm.clear = function () {
            $timeout(function () {
                vm.productById = null;
            }, 3000);

        };

        vm.addProduct = function (product) {

            if (product.name && product.producer && product.price) {
                console.log(vm.product.__proto__);
                vm.product.$save(function (data) {
                    refreshData();
                    vm.product = new Product;
                });

            }
            else {
                var errorText = "";
                if (!product.name) {
                    errorText += "fill name field\n";
                }
                if (!product.producer) {
                    errorText += "fill name producer\n";
                }
                if (!product.price) {
                    errorText += "fill name price\n";
                }
                alert(errorText);
            }
        };
        refreshData();
    });