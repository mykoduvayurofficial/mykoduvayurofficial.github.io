/**
 * Created by kriz on 1/18/2017.
 */

// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

    // route for the theme page
        .when('/', {
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })

        // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the landscape page
        .when('/locality', {
            templateUrl : 'pages/locality.html',
            controller  : 'localityController'
        })
        // route for the culture page
        .when('/culture', {
            templateUrl : 'pages/culture.html',
            controller  : 'cultureController'
        })
        // route for the trending page
        .when('/events', {
            templateUrl : 'pages/events.html',
            controller  : 'eventsController'
        })
        // route for the services page
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
        // route for the feedback page
        .when('/feedback', {
            templateUrl : 'pages/feedback.html',
            controller  : 'feedbackController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the trending page
        .when('/trending', {
            templateUrl : 'pages/trending.html',
            controller  : 'trendingController'
        })

});



// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;

// inject rootScope variables
    $rootScope.english = "EN";
    $rootScope.malayalam = "മ";
    $rootScope.fbloader = true;
    $rootScope.langChange = false;
    $rootScope.myLang = "ENGLISH";



    $scope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $scope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };


    $scope.eng = function() {

        var x= document.getElementById("english");
        var y= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";



        var mm = window.matchMedia("(max-width:1080px)");
        if(mm.matches) {
            $scope.closed();
        }

        var w = document.getElementById("alertlang");
        w.style.display = "block";

        $rootScope.langChange = true;
        $rootScope.myLang = "ENGLISH";



    };

    $scope.mal = function() {

        var y= document.getElementById("english");
        var x= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";


        var mml = window.matchMedia("(max-width:1080px)");
        if(mml.matches) {
            $scope.closed();
        }

        var w = document.getElementById("alertlang");
        w.style.display = "block";

        $rootScope.langChange = true;
        $rootScope.myLang = " മലയാളം";


    };

    $rootScope.alertClose = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;
    };

    $scope.menuload = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;

    };



});

mykdrApp.controller('homeController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    // alert($scope.message);

});

mykdrApp.controller('localityController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    $scope.kdrMapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjyFs7nzkwdQ9YhT1AeALSYEeGEBbFpuQ";

    $scope.myMap = function() {
        var mapProp= {
            center:new google.maps.LatLng(10.678849, 76.646882),
            zoom:13
        };
        var map=new google.maps.Map(document.getElementById("kdrmap"),mapProp);
    };

    $scope.myMap();


});

mykdrApp.controller('aboutController', function($rootScope, $scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';


});

mykdrApp.controller('servicesController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';


});

mykdrApp.controller('cultureController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

});

mykdrApp.controller('eventsController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';


});

mykdrApp.controller('trendingController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';


    $scope.showNews = true;
    $scope.showArticles = false;
    $scope.showPictures = false;
    $scope.showVideos = false;

    $scope.news = function() {

        $scope.showNews = true;
        $scope.showArticles = false;
        $scope.showPictures = false;
        $scope.showVideos = false;

    };

    $scope.articles = function() {

        $scope.showNews = false;
        $scope.showArticles = true;
        $scope.showPictures = false;
        $scope.showVideos = false;

    };

    $scope.pictures = function() {

        $scope.showNews = false;
        $scope.showArticles = false;
        $scope.showPictures = true;
        $scope.showVideos = false;

    };

    $scope.videos = function() {

        $scope.showNews = false;
        $scope.showArticles = false;
        $scope.showPictures = false;
        $scope.showVideos = true;

    };

});

mykdrApp.controller('feedbackController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    // alert("hi");

    FB.XFBML.parse();


});





