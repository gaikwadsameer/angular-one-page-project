<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope) {
            $scope.name = "John Doe"
        });
    </script>

    <div ng-app="myApp" ng-controller="myCtrl">
        <input ng-model="name"/>
    </div>

   <div ng-app="myApp" ng-controller="personCtrl">
    <p>the name is {{ lastName l uppercase }}</p>
   </div>

    <script>
        angular.modul('myApp', []).controller('personCtrl', function($$scope) {
            $scope.firstName ="John",
            $scope.lastName = "Doe"
        });
    </script>
</body>
</html>