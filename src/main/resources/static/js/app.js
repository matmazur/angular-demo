var app = angular.module('app', []);

app.controller('MainController', function () {

    this.exampleVariable = "This should be visible on the other side";

    this.a=0;
    this.b=0;

    this.addResult = function(){
       return this.a + this.b;
    };
    this.subResult = function(){
        return this.a - this.b;
    };

    this.multiResult = function(){
        return this.a * this.b;
    };

    this.divResult = function (){
        return this.a / this.b;
    };

});