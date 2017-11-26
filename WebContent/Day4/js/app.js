var app= angular.module('libApp', ['libApp.controllers','libApp.services','libApp.filters','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
    	templateUrl : "partials/Login.html",
    	controller : "LoginCtrl"
    })
    .when("/main", {
        templateUrl : "partials/Login.html",
        controller : "LoginCtrl"
    })
    .when("/home/student", {
        templateUrl : "partials/ViewBooks_Student.html",
        controller : "BookListCtrl_Student"
    })
    .when("/home/librarian", {
    	 templateUrl : "partials/ViewBooks_Librarian.html",
         controller : "BookListCtrl_Librarian"
    })
    .when("/isuue/:bookId", {
    	templateUrl : "partials/IssueBook.html",
        controller : "IssueBookCtrl"
    })
    .when("/return/:bookId", {
    	templateUrl : "partials/ReturnBook.html",
        controller : "ReturnBookCtrl"
    });
});