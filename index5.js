<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp">

    <p><a href="#/!">Main</a></p>
   <a href="#!red">red</a>
   <a href="#!Green">Green</a>
   <a href="#!Blue">Blue</a>

    <div ng-view></div>

    <script>
        var app = angular.module("myApp", ["ngRoute"]);
        app.config(function($routeProvider) {
            $routeProvider
        });
    </script>

</body>
</html>