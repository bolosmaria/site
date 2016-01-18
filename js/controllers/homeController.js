
var app = angular.module("bolosMaria", []);

app.controller('HomeController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books';

  $scope.bolos = [
    {
		"name": "Bolo de cenoura" ,
		"descricao": "Bolo de cenoura, coberto com brigadeiro",
		"valor": 20.00,
		"img": "img/project1.jpg"
	},
	{
		"name": "Bolo de cocô" ,
		"descricao": "Bolo de cenoura, coberto com brigadeiro",
		"valor": 20.00,
		"img": "img/project2.jpeg"
	},
	{
		"name": "Bolo de maça" ,
		"descricao": "Bolo de cenoura, coberto com brigadeiro",
		"valor": 20.00,
		"img": "img/project3.png"
	},
	{
		"name": "Bolo de banana" ,
		"descricao": "Bolo de cenoura, coberto com brigadeiro",
		"valor": 20.00,
		"img": "img/project4.jpg"
	},
	{
		"name": "Bolo de laranja" ,
		"descricao": "Bolo de cenoura, coberto com brigadeiro",
		"valor": 20.00,
		"img": "img/project5.png"
	}];

}]);
