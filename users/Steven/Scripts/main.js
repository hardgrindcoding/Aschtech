function loadSpecific(tag) {
	var text = "";
	//For the main page-
	if(tag == 'aboutP1') {

		text = "ENTHUSIASTIC PROBLEM SOLVER STUDYING COMPUTER SCIENCE AT BLEKINGE INSTITUTE OF TECHNOLOGY;";
		document.getElementById(tag).innerHTML = text;

	}
}

function unfade(tag) {
		var element = document.getElementById(tag);

		if(element.style.display == "none") {
			var op = 0.01;  // initial opacity
	    element.style.display = 'block';
	    var timer = setInterval(function() {
	        if (op >= 1){
	            clearInterval(timer);
	        }
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op += op * 0.1;
	    }, 10);
		}
}
//The goal is to have this reverse the function above
function fade(tag) {
	var element = document.getElementById(tag);
	element.style.display = "none";

	var op = 1;  // initial opacity

	var timer = setInterval(function() {
			if (op < 0.1){
					clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op = op - 0.1;
	}, 10);
}

function openContact() {
	var element = document.getElementById('overlay');
	element.style.display = "block";

	var op = 0.01;  // initial opacity
	var timer = setInterval(function() {
			if (op >= 1){
					clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += op * 0.1;
	}, 10);
}

function closeContact() {


}
