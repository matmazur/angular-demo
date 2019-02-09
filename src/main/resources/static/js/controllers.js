angular.module('app', ['ngResource'])
    .constant("appName", "restTestingApp")

    .factory("Product", function () {

        function Product(name, producer, price) {
            this.name = name;
            this.producer = producer;
            this.price = price;
        }

        return Product;
    })

    .controller("ProductCtrl", function ($http, $resource) {

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

        console.log(vm.products);

        this.addProduct = function (product) {

            if (product.name && product.producer && product.price) {
                console.log(vm.product.__proto__);
                vm.product.$save(function (data) {
                    refreshData();
                    vm.product = new Product();
                });
            } else {
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
    })
;