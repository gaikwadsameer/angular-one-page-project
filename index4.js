<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
    <div ng-app="myApp" ng-controller="myctrl">
        <h1>{{mywelcome}}</h1>
    </div>
    
    <script>
        var app = angular.module('myApp', []);
        app.controller('myctrl', function($scope, $http) {
            $http.get("welcome.html")
            .then(function(response)) {
                $scope.mywelcome = response.data;
            });
        });
    </script>
</body>
</html>