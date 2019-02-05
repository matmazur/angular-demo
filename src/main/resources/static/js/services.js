angular.module('app')

    .service("BookService", function (Book) {

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