angular.module('app')


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
                )
        }

        function addData(product) {
            $http.post('/api/products', product)
                .then(function success(response) {
                        refreshData();
                        vm.product = {};
                    }, function error(response) {
                        console.log('API failed with status ' + response.status);
                    }
                )
        }

        refreshData();
    });