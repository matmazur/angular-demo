var app = angular.module('app', []);


var reg = 1;

function Book(title, author, isbn) {
    this.id = reg;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    reg++;
}


app.controller("BookCtrl", function () {

    this.books = [
        new Book("Fight Club", "Chuck Palahniuk", "4765476"),
        new Book("Bible", "few good lads", "1"),
        new Book("Breakfast Club", "Some Bloke", "321321765476")
    ];


    this.formTitle = "";
    this.formAuthor = "";
    this.formIsbn = "";
    this.id=0;

    this.addBook = function () {
        if (this.formTitle && this.formAuthor && this.formIsbn) {
            this.books.push(new Book(this.formTitle, this.formAuthor, this.formIsbn));
            this.formTitle = "";
            this.formAuthor = "";
            this.formIsbn = "";
        } else
            alert("missing data");
    }
})
;


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

