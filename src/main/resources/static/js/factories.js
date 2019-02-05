angular.module('app')

    .factory("Book", function (id) {
        function Book(title, author, isbn) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            id++;
        }

        return Book;
    });