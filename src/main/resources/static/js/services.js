angular.module('app')

    .service("ProductService", function ($http) {


        this.getAll= function() {

            return $http.get('/api/products')
                .then(function success(data) {
                        return data;
                    }, function error(response) {
                        console.log('API failed with status ' + response.status);
                    }
                );
        }

    });
