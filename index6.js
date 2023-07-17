<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

   <div ng-app="" ng-init="mySwitch=true">

    <p>
        <button ng-disabled="mySwitch">Click Me!</button>
    </p>
    <p>
        <input type="checkbox" ng-model="mySwitch"/>button
    </p>

    <p>
        {{ mySwith }}
    </p>
    </div>

    <div ng-app="">
        <p ng-show="true">I am visible</p>
        <p ng-show="false">I am not visible</p>
    </div>

</body>
</html>