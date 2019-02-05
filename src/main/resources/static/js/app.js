var app = angular.module('app', []);

app.factory("Book", function () {
    var reg = 1;

    function Book(title, author, isbn) {
        this.id = reg;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        reg++;
    }

    return Book;
});


app.service("BookService", function (Book) {

    this.books = [
        new Book("Fight Club", "Chuck Palahniuk", "4765476"),
        new Book("Bible", "few good lads", "1"),
        new Book("Breakfast Club", "Some Bloke", "321321765476")
    ];

    this.saveBook = function (book) {
        console.log(book);

        if (book.title && book.author && book.isbn) {
            this.books.push(new Book(book.title, book.author, book.isbn));
            return true;
        } else {
            var error = "";

            if (!book.title) {
                error += "Missing title\n"
            }
            if (!book.author) {
                error += "Missing author\n"
            }
            if (!book.isbn) {
                error += "Missing isbn\n"
            }
            alert(error);
        }
    }
});

app.controller("BookCtrl", function (Book, BookService) {

    this.books = BookService.books;
    this.book = {};

    this.addBook = function (book) {
        if (BookService.saveBook(book)) {

            this.book.title = "";
            this.book.author = "";
            this.book.isbn = "";
        }
    }
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


