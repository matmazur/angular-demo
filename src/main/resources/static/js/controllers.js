angular.module('app')

    .controller("BookCtrl", function (Book, BookService) {

        this.books = BookService.books;
        this.book = {};

        this.addBook = function (book) {
            if (BookService.saveBook(book)) {

                this.book.title = "";
                this.book.author = "";
                this.book.isbn = "";
                setCaretPosition("mark", 0);
            }
        };
    });