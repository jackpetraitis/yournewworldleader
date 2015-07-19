var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "partials/homepage.html",
            controller: "homepageController"
        })
        .when('/about', {
            templateUrl: "partials/about.html",
            controller: "aboutController"
        })
        .when('/territory', {
            templateUrl: "partials/territory.html",
            controller: "territoryController"
        })
        .when('/gallery', {
            templateUrl: "partials/gallery.html",
            controller: "galleryController"
        })
        .when('/donate',{
            templateUrl: "partials/donate.html"
        });
});


