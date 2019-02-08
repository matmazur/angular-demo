angular.module('app')
    .constant("appName", "restTestingApp")


    .controller("ProductCtrl", function ($http) {

        var vm = this;

        function refreshData() {
            $http.get('/api/products')
                .then(function success(response) {
                        vm.products = response.data;
                        console.log(vm.products);
                    }, function error(response) {
                        console.log('API failed with status ' + response.status);
                    }
                );
        }


        vm.product = {};
        this.addProduct = function (product) {

            if (product.name && product.producer && product.price) {
                $http.post('/api/products', product)
                    .then(function success(response) {
                            refreshData();
                            vm.product = {};
                        }, function error(response) {
                            console.log('API failed with status ' + response.status);
                        }
                    )
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
    });