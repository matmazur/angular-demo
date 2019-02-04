var app = angular.module('app', []);

app.controller('CalculatorCtrl', function () {

    this.a = 0;
    this.b = 0;

    this.addResult = function () {
        return this.a + this.b;
    };
    this.subResult = function () {
        return this.a - this.b;
    };

    this.multiResult = function () {
        return this.a * this.b;
    };

    this.divResult = function () {
        return this.a / this.b;
    };

});

app.controller("HeaderController", function () {

    this.hardText = "Welcome to the jungle";
    this.newText = "";


    this.toUpper = function () {
        this.hardText = this.hardText.toUpperCase();
    };

    this.toLower = function () {
        this.hardText = this.hardText.toLowerCase();
    };

    this.changeText = function () {

        if (this.newText) {
            this.hardText = this.newText;
        }
        if (this.newText === "") {
            this.hardText = "Welcome to the jungle";
        }
    };
});

app.controller("BackController", function () {
    this.changeBackground = function () {

        var body = document.getElementsByTagName("body")[0];
        var color = body.style.backgroundColor;
        var colorToBe;

        switch (color) {
            case "red":
                colorToBe = "blue";
                break;
            default:
                colorToBe = "red";
        }
        body.style.backgroundColor = colorToBe;
    };

    this.changeBackgroundToWhite = function () {
        var body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "white";
    };
});

app.controller("ChangeController", function () {

    console.log(this.status);
    console.log(this.checkbox);

    this.status = "unchecked";
    this.checkbox = true;

    this.changeStatus = function () {

        console.log(this.status);
        console.log(this.checkbox);

        if (this.checkbox) {
            this.status = "checked";
        } else {
            this.status = "unchecked";
        }
    };

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

