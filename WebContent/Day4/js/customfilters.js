var libFilters = angular.module('libApp.filters', []);

libFilters.filter('filterunissued', function() {
	return function(books, viewbookoption) {
		this.filteredBooks = [];
		if (viewbookoption == "Available") {

			angular.forEach(books, function(book) {
				if (book.issued) {
					this.filteredBooks.push(book);
				}
			});
			return this.filteredBooks;

		} else {
			return books;
		}
	}
});