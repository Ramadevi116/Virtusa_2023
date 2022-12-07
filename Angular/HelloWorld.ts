<!DOCTYPE html>  
<html ng-app="app">  
<head>  
    <meta charset="utf 8">
    <title>Guru99</title>     
</head>  
<body>
<h1 ng-controller="HelloWorldCtrl">{{message}}</h1>
<script src="https://code.angularjs.org/1.6.9/angular.js"></script>
<script>  
    angular.module("app", []).controller("HelloWorldCtrl", function($scope) {  
    $scope.message="Hello World" 
    } )
</script> 

</body>  
</html>
