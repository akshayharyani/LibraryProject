var libServices= angular.module('libApp.services',[]);


libServices.service('UserService',function($http){
	var UserData = {};
	
	UserData.getData = function(){
		
		return $http.get('data/roles.json').then(function(res){ 
	        return(res.data);
	    });  
	}
	
	return UserData;
});


libServices.service('BookData',function($rootScope,$http){
	var serv = {};
	
	serv.getData = function(){
		
		$http.get('data/books.json').then(function(res){ 
	       $rootScope.books = res.data;
	       console.log($rootScope.books);
	    });  
		
	}
	
	return serv;
});