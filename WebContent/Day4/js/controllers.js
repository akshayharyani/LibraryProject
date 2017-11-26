var libControllers = angular.module('libApp.controllers', []);

libControllers.controller('LoginCtrl', function($rootScope, $scope, $http, $location,
		UserService) {
	$scope.validate = function(user) {
		
		/*$http.get("data/roles.json").success(function (response) {
			console.log("inside service"+response);
			$scope.registeredUsers = response;
	    }).error(function(data,status){ return null});*/
		UserService.getData().then(function(response) {
			$scope.userFound = false;
			$scope.userRole;
	        $scope.registeredUsers = response;
	        console.log($scope.registeredUsers);
			angular.forEach($scope.registeredUsers, function(registeredUser) {

				if (user.userName == registeredUser.userName
						&& user.password == registeredUser.password) {
					$scope.userFound = true;
					$scope.userRole = registeredUser.role;
				}
			});
			
			if($scope.userFound){
				alert('Login successful');
				if($scope.userRole == "student"){
					$location.path("home/student");
				}else if($scope.userRole == "librarian"){
					$location.path("/home/librarian");					
				}
			} else {
				alert('Please provide valid login credentials');
				$location.path("/main");			
			}
			
	    }).catch(console.error);
		

	};
});

libControllers.controller('BookListCtrl_Student', function($scope, $http, $location,
		BookData) {
	if(!$rootScope.books){
		BookData.getData();
	}	$scope.changeView = function(view){
        $location.path(view); 
    }
});

libControllers.controller('BookListCtrl_Librarian', function($scope, $rootScope, $http, $location,
		BookData) {
	if(!$rootScope.books){
		BookData.getData();
	}
	$scope.changeView = function(view){
        $location.path(view); 
    }
	$scope.issue = function(bookId){
		$location.path("/issue/"+bookId);		
    }
	$scope.return = function(bookId){
    	$location.path("/issue/"+bookId);	
    }
});

libControllers.controller('IssueBookCtrl', function($scope, $rootScope, $routeParams, $location, BookData) {
		
	$scope.bookId = $routeParams.bookId;
	$scope.book = {};
	
	angular.forEach($rootScope.books, function(book) {
		if (book.bookId == $scope.bookId) {
			$scope.book = book;
		}
	});

	$scope.issue = function(bookId){
		$scope.book.issued = true;
    	alert('Book Issued');
		$location.path("/home/librarian");	
    }
	
});

libControllers.controller('ReturnBookCtrl', function($scope, $rootScope,$routeParams, $location) {
	
	$scope.bookId = $routeParams.bookId;
	$scope.book = {};
	
	angular.forEach($rootScope.books, function(book) {
		if (book.bookId == $scope.bookId) {
			$scope.book = book;
		}
	});
	
	$scope.return = function(bookId){
		$scope.book.issued = false;
		angular.forEach($rootScope.books, function(book) {
			if (book.bookId == $scope.bookId) {
				book.issued = false;
			}
		});
    	alert('Book Returned');
    	$location.path("/home/librarian");
    }
});
