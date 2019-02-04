var app = angular.module('app', []);

app.controller("MoviesCtrl", function(){

    this.dummy = "delete this text to see the picture"
    this.movies = ['JvqQY6b5IbA','MRwWucCZpLg'];
    this.images =
        ['http://images6.fanpop.com/image/photos/39400000/Everybody-Wants-Some-Logo-everybody-wants-some-39453890-500-281.jpg']
});


function Person(name,surname){
    this.name=name;
    this.surname=surname;
}

app.controller("RepeatCtrl", function(){

    this.people = [
        new Person("Jack","Black"),
        new Person("Kelly","Kapoor"),
        new Person("Martin","Scorsese")
    ]
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

