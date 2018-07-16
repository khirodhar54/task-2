let app=angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){


}); 
app.controller("myCtr", function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function(item){
        $scope.posts=item.data;
    })
})
;