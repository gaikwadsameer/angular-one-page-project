<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<p ng-bind="firstname"></p>
<script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.firstname = "John";
        $scope.lastname = "Doe";
    })
</script>



<div ng-app="myApp" ng-contorller="namectrl">

<ul>
    <li ng-repeat="x in names">
        {{ x.name + ',' x.country }}
    </li>
</ul>

</div>

<script src="namesController.js"></script>   

</body>
</html>