var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
    console.log("inside")
    $scope.artists = [
    {
        "name":"DELL",
        "shortname":"DELL",
        "reknown":"Hardware and Software company",
        "bio":"Hardware and Software company"
    },
    {
        "name":"JIBO",
        "shortname":"JIBO",
        "reknown":"Robotics",
        "bio":"Robotics with sensors"
    },
    {
        "name":"Teal",
        "shortname":"Teal",
        "reknown":"Drones",
        "bio":"Drones are the future!"
    },
    {
        "name":"AWS",
        "shortname":"AWS",
        "reknown":"Platform as a service",
        "bio":"Hosting solutions for everybody"
    },
    {
        "name":"Indeed",
        "shortname":"Indeed",
        "reknown":"Job Search Monster!",
        "bio":"Job search made easy"
    },
    {
        "name":"MLH",
        "shortname":"MLH",
        "reknown":"Major League Hacking",
        "bio":"hackathons!!"
    },
    {
        "name":"Sparkpost!",
        "shortname":"Sparkpost!",
        "reknown":"Sparkpost",
        "bio":"email sent easy"
    },
    {
        "name":"rapid api",
        "shortname":"rapid api",
        "reknown":"rapid prototyping",
        "bio":"fast progress!"
    }
]
});

