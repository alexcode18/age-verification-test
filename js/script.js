// console.log('reaching js');

var date = new Date();
var currentYear = date.getYear() + 1900;
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();

// Creates option lists for day and year
function formOptions() {
	var y = 1921;
	while (y <= currentYear) {
		$('#year').append('<option value="' + y + '">' + y + '</option>');
		y++;
	}
	$('#year').val('1990');

	var z = 1;

	while (z <= 31) {
		$('#day').append('<option value="' + z + '">' + z + '</option>');
		z++;
	}
}

formOptions();

function formCheck() {
	// Checks that age is 21 or older based on year, and month only
	if ((parseInt($('#year').val()) <= 1996) && (parseInt($('#month').val()) <= currentMonth)) {
		alert("Welcome to the site. Enjoy!");
		window.location.href = 'http://www.wine.com/';
	} else {
		alert("We're sorry, but you're not old enough to view this site.");
		window.location.href = 'http://www.gotmilk.com/';
	}
	
}

function formCheckAdvanced(age) {
	// Checks that specified age is met based on day, month, and year. Takes leap years into account.
	var date = new Date();
	if (parseInt($('#year').val())  % 4 == 0) {
		$('#february').attr('data-days', "29");
	}

	if ((parseInt($('#year').val()) <= (currentYear - age)) && (parseInt($('#month').val()) <= currentMonth)) {

		if (parseInt($('#month option:selected').data('days')) >= parseInt($('#day').val())) {
			alert("Welcome to the site. Enjoy!");
			window.location.href = 'http://www.wine.com/';
		} else {
			alert("That date does not exist.");
		}

	} else {
		alert("We're sorry, but you're not old enough to view this site.");
		window.location.href = 'http://www.gotmilk.com/';
	}
	
}