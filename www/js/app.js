// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Strom' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('Strom', ['ionic', 'Strom.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tabs', {
      url: "/",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.years', {
      url: "years",
      views: {
        'years-tab': {
          templateUrl: "templates/years.html",
          controller: 'yearsCtrl'
        }
      }
    })
    .state('tabs.year', {
      url: "years/:year",
      views: {
        'years-tab': {
          templateUrl: "templates/year.html",
          controller: 'yearCtrl'
        }
      }
    })
    .state('tabs.tree', {
      url: "years/:year/:treeId",
      views: {
        'years-tab': {
          templateUrl: "templates/tree.html",
          controller: 'treeCtrl'
        }
      }
    })
    .state('tabs.favourites', {
      url: "favourites",
      views: {
        'favourites-tab': {
          templateUrl: "templates/favourites.html",
          controller: "favouritesCtrl"
        }
      }
    })
    .state('tabs.search', {
      url: "search",
      views: {
        'search-tab': {
          templateUrl: "templates/search.html",
          controller: "searchCtrl"
        }
      }
    })
    .state('tabs.about', {
      url: "about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    });

  $urlRouterProvider.otherwise("/years");
})

.controller("treeCtrl", function($scope, $stateParams, Trees) {
  $scope.tree = Trees.get($stateParams.year, $stateParams.treeId);
  $scope.isFavourite = Trees.favourites.contains({
    year: $scope.tree.year,
    id: $scope.tree.id
  });
  $scope.onFavouriteToggle = function() {
    Trees.favourites.toggle($scope.tree.year, $scope.tree.id)
  }
})

.controller("yearCtrl", function($scope, $stateParams, Trees) {
  $scope.year = $stateParams.year;
  $scope.data = Trees.all();
})

.controller("yearsCtrl", function($scope, Trees) {
  $scope.data = Trees.getYears();
  console.log("Showing " + $scope.data.length + " years");
})

.controller("favouritesCtrl", function($scope, Trees) {
  $scope.items = [];
  $scope.$on("$ionicView.enter", function() {
    console.log("favouritesCtrl enter");

    var items = [];
    var favs = Trees.favourites.all();
    for (var i = 0; i < favs.length; i++) {
      var item = Trees.get(favs[i].year, favs[i].id);
      if (item) {
        items.push(item);
      }
    }
    $scope.items = items;
  });
})

.controller("searchCtrl", function($scope, Trees) {
  console.log("searchCtrl");

  $scope.searchTerm = {
    phrase: ""
  };
  $scope.clearSearch = function() {
    console.log("clearSearch");
    $scope.searchTerm.phrase = "";
  };

  $scope.data = Trees.all();
});